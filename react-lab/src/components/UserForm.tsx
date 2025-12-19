import type { User } from "../types/User";

type Props = {
  formData: Omit<User, "id">;
  onFormChange: (
    field: keyof Omit<User, "id">,
    value: string | number | string[]
  ) => void;
  onSubmit: () => void;
  onClear: () => void;
  isEditing: boolean;
};

const UserForm = ({
  formData,
  onFormChange,
  onSubmit,
  onClear,
  isEditing,
}: Props) => {
  const handleSkillChange = (skill: string) => {
    const updatedSkills = formData.skills.includes(skill)
      ? formData.skills.filter((s) => s !== skill)
      : [...formData.skills, skill];
    onFormChange("skills", updatedSkills);
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        marginBottom: "20px",
      }}
    >
      <h2>{isEditing ? "Edit User" : "Add User"}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label>
            Full Name:
            <input
              type="text"
              value={formData.fullname}
              onChange={(e) => onFormChange("fullname", e.target.value)}
              required
              style={{ marginLeft: "10px", width: "300px" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Age:
            <input
              type="number"
              value={formData.age}
              onChange={(e) => onFormChange("age", Number(e.target.value))}
              required
              style={{ marginLeft: "10px", width: "300px" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Education:
            <select
              value={formData.education}
              onChange={(e) => onFormChange("education", e.target.value)}
              required
              style={{ marginLeft: "10px", width: "315px" }}
            >
              <option value="">Select...</option>
              <option value="Grade school">Grade school</option>
              <option value="High school">High school</option>
              <option value="College">College</option>
            </select>
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Gender:
          </label>
          <label style={{ marginRight: "15px" }}>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={(e) => onFormChange("gender", e.target.value)}
              required
            />
            Male
          </label>
          <label style={{ marginRight: "15px" }}>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={(e) => onFormChange("gender", e.target.value)}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={(e) => onFormChange("gender", e.target.value)}
            />
            Other
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Skills:
          </label>
          <label style={{ marginRight: "15px" }}>
            <input
              type="checkbox"
              checked={formData.skills.includes("TypeScript")}
              onChange={() => handleSkillChange("TypeScript")}
            />
            TypeScript
          </label>
          <label style={{ marginRight: "15px" }}>
            <input
              type="checkbox"
              checked={formData.skills.includes("React")}
              onChange={() => handleSkillChange("React")}
            />
            React
          </label>
          <label style={{ marginRight: "15px" }}>
            <input
              type="checkbox"
              checked={formData.skills.includes("Node")}
              onChange={() => handleSkillChange("Node")}
            />
            Node
          </label>
          <label>
            <input
              type="checkbox"
              checked={formData.skills.includes("NoSQL")}
              onChange={() => handleSkillChange("NoSQL")}
            />
            NoSQL
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Bio:</label>
          <textarea
            value={formData.bio}
            onChange={(e) => onFormChange("bio", e.target.value)}
            rows={4}
            style={{ width: "300px" }}
          />
        </div>

        <button
          type="submit"
          style={{ marginRight: "10px", padding: "5px 15px" }}
        >
          {isEditing ? "Save User" : "Add User"}
        </button>
        <button type="button" onClick={onClear} style={{ padding: "5px 15px" }}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default UserForm;
