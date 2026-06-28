import { useEffect, useMemo, useState } from "react";
import { getUsers } from "../services/api";
import { sortUsers } from "../utils/sorting";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    const search = searchTerm.toLowerCase();

    return users.filter((user) => {
      const matchesSearch =
        user.firstName.toLowerCase().includes(search) ||
        user.lastName.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.department.toLowerCase().includes(search);

      const matchesFilters =
        user.firstName
          .toLowerCase()
          .includes(filters.firstName.toLowerCase()) &&
        user.lastName
          .toLowerCase()
          .includes(filters.lastName.toLowerCase()) &&
        user.email
          .toLowerCase()
          .includes(filters.email.toLowerCase()) &&
        user.department
          .toLowerCase()
          .includes(filters.department.toLowerCase());

      return matchesSearch && matchesFilters;
    });
  }, [users, searchTerm, filters]);

  const sortedUsers = useMemo(() => {
    return sortUsers(filteredUsers, sortOption);
  }, [filteredUsers, sortOption]);

  const totalUsers = sortedUsers.length;

  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;

  const paginatedUsers = sortedUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  return {
    users: paginatedUsers,

    totalUsers,

    currentPage,
    setCurrentPage,

    rowsPerPage,
    setRowsPerPage,

    loading,
    error,

    searchTerm,
    setSearchTerm,

    sortOption,
    setSortOption,

    filters,
    setFilters,

    setUsers,
  };
}