import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import type { User } from "./types/User";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<Omit<User, "id">>({
    fullname: "",
    age: 0,
    education: "",
    gender: "",
    skills: [],
    bio: "",
  });
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);

  const handleFormChange = (
    field: keyof Omit<User, "id">,
    value: string | number | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (editingUserId) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingUserId ? { ...formData, id: editingUserId } : user
        )
      );
      setEditingUserId(null);
    } else {
      const newUser: User = {
        ...formData,
        id: Date.now().toString(),
      };
      setUsers((prev) => [...prev, newUser]);
    }
    handleClear();
  };

  const handleClear = () => {
    setFormData({
      fullname: "",
      age: 0,
      education: "",
      gender: "",
      skills: [],
      bio: "",
    });
    setEditingUserId(null);
  };

  const handleView = (user: User) => {
    setSelectedUser(user);
  };

  const handleEdit = (user: User) => {
    setFormData({
      fullname: user.fullname,
      age: user.age,
      education: user.education,
      gender: user.gender,
      skills: user.skills,
      bio: user.bio,
    });
    setEditingUserId(user.id);
  };

  const handleDelete = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    if (selectedUser?.id === id) {
      setSelectedUser(null);
    }
    if (editingUserId === id) {
      handleClear();
    }
  };

  return (
    <>
      <UserForm
        formData={formData}
        onFormChange={handleFormChange}
        onSubmit={handleSubmit}
        onClear={handleClear}
        isEditing={!!editingUserId}
      />
      <UserList
        users={users}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <UserProfile user={selectedUser} />
    </>
  );
}

export default App;
