
import { useEffect, useMemo, useState } from "react";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../services/api";
import { sortUsers } from "../utils/sorting";

export function useUsers() {
  const [allUsers, setAllUsers] = useState([]);

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
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setLoading(true);

      const data = await getUsers();
setAllUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function addUser(user) {
    try {
      await createUser(user);

      const newUser = {
        ...user,
        id: Date.now(),
      };

      setAllUsers((prev) => [newUser, ...prev]);
    } catch (err) {
      alert(err.message);
    }
  }

  async function editUser(updatedUser) {
    try {
      await updateUser(updatedUser);

      setAllUsers((prev) =>
        prev.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        )
      );
    } catch (err) {
      alert(err.message);
    }
  }

  async function removeUser(id) {
    try {
      await deleteUser(id);

      setAllUsers((prev) =>
        prev.filter((user) => user.id !== id)
      );
    } catch (err) {
      alert(err.message);
    }
  }

  const filteredUsers = useMemo(() => {
    const search = searchTerm.toLowerCase();

    return allUsers.filter((user) => {
      const matchesSearch =
        user.firstName.toLowerCase().includes(search) ||
        user.lastName.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.department.toLowerCase().includes(search);

      const matchesFilter =
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

      return matchesSearch && matchesFilter;
    });
  }, [allUsers, searchTerm, filters]);

  const sortedUsers = useMemo(() => {
    return sortUsers(filteredUsers, sortOption);
  }, [filteredUsers, sortOption]);

  const totalUsers = sortedUsers.length;

  const totalPages = Math.ceil(totalUsers / rowsPerPage);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const users = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return sortedUsers.slice(start, end);
  }, [sortedUsers, currentPage, rowsPerPage]);

  return {
    users,

    loading,
    error,

    totalUsers,

    currentPage,
    setCurrentPage,

    rowsPerPage,
    setRowsPerPage,

    searchTerm,
    setSearchTerm,

    sortOption,
    setSortOption,

    filters,
    setFilters,

    addUser,
    editUser,
    removeUser,

    refreshUsers: fetchUsers,
  };
}