import { useEffect, useState } from "react";
import { getUsers } from "./services/api";
import UserTable from "./components/UserTable/UserTable";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  if (loading) {
  return <h2>Loading users...</h2>;
}

if (error) {
  return <h2>{error}</h2>;
}
  return (
  <div style={{ padding: "30px" }}>
    <h1>User Management Dashboard</h1>

    <UserTable users={users} />
  </div>
);
}

export default App;