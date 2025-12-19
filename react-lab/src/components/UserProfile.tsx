import type { User } from "../types/User";

type Props = {
  user: User | null;
};

const UserProfile = ({ user }: Props) => {
  if (!user) {
    return (
      <div style={{ padding: "20px", border: "1px solid #ccc" }}>
        <h2>User Profile</h2>
        <p>No user selected. Click "View" on a user to see their profile.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>User Profile</h2>
      <div style={{ lineHeight: "1.8" }}>
        <p>
          <strong>ID:</strong> {user.id}
        </p>
        <p>
          <strong>Full Name:</strong> {user.fullname}
        </p>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <p>
          <strong>Education:</strong> {user.education}
        </p>
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>
        <p>
          <strong>Skills:</strong>{" "}
          {user.skills.length > 0 ? user.skills.join(", ") : "None"}
        </p>
        <p>
          <strong>Bio:</strong> {user.bio || "No bio provided"}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
