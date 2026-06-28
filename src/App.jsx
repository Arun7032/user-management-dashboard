import { useEffect, useState } from "react";
import { getUsers } from "./services/api";
import UserTable from "./components/UserTable/UserTable";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
          const data = await getUsers();
          setUsers(data);
        } catch (error) {
          console.error(error);
          etError(error.message);
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

  if (loading) {
  return <h2>Loading users...</h2>;
}

if (error) {
  return <h2>{error}</h2>;
}
  return (
  <div style={{ padding: "30px" }}>
    <h1>User Management Dashboard</h1>

    <>
  <SearchBar
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
  />

  <UserTable users={filteredUsers} />
</>
  </div>
);
}

export default App;