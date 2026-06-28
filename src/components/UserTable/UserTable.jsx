
import "./UserTable.css";

function UserTable({
  users,
  onEdit,
  onDelete,
}) {
  if (users.length === 0) {
    return (
      <div className="no-users">
        No users found.
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>

              <td>{user.firstName}</td>

              <td>{user.lastName}</td>

              <td>{user.email}</td>

              <td>{user.department}</td>

              <td className="action-buttons">
                <button
                  className="edit-btn"
                  onClick={() => onEdit(user)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => {
                    const confirmed = window.confirm(
                      `Delete ${user.firstName} ${user.lastName}?`
                    );

                    if (confirmed) {
                      onDelete(user.id);
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;