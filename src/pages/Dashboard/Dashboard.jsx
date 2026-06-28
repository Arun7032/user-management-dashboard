import { useEffect, useState } from "react";
import { getUsers } from "../../services/api";
import { sortUsers } from "../../utils/sorting";

import SearchBar from "../../components/SearchBar/SearchBar";
import UserTable from "../../components/UserTable/UserTable";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const search = searchTerm.toLowerCase();

    return (
      user.firstName.toLowerCase().includes(search) ||
      user.lastName.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.department.toLowerCase().includes(search)
    );
  });

  const sortedUsers = sortUsers(filteredUsers, sortOption);

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h1>User Management Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1 }}>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>

          <option value="firstNameAsc">
            First Name (A-Z)
          </option>

          <option value="firstNameDesc">
            First Name (Z-A)
          </option>

          <option value="lastNameAsc">
            Last Name (A-Z)
          </option>

          <option value="lastNameDesc">
            Last Name (Z-A)
          </option>

          <option value="departmentAsc">
            Department (A-Z)
          </option>

          <option value="departmentDesc">
            Department (Z-A)
          </option>
        </select>
      </div>

      <UserTable users={sortedUsers} />
    </>
  );
}

export default Dashboard;