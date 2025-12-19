import type { User } from "../types/User";

type Props = {
  users: User[];
  onView: (user: User) => void;
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
};

const UserList = ({ users, onView, onEdit, onDelete }: Props) => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        marginBottom: "20px",
      }}
    >
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #333" }}>
              <th style={{ padding: "10px", textAlign: "left" }}>ID</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Full Name</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "10px" }}>{user.id}</td>
                <td style={{ padding: "10px" }}>{user.fullname}</td>
                <td style={{ padding: "10px" }}>
                  <button
                    onClick={() => onView(user)}
                    style={{ marginRight: "5px", padding: "3px 10px" }}
                  >
                    View
                  </button>
                  <button
                    onClick={() => onEdit(user)}
                    style={{ marginRight: "5px", padding: "3px 10px" }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(user.id)}
                    style={{ padding: "3px 10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
