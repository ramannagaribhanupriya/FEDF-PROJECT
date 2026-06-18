import React, { useState } from "react";
import "../styles/AddFaculty.css";

function AddFaculty({ setPage }) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Faculty Added Successfully!\n\nName: ${name}\nDepartment: ${department}\nEmail: ${email}`
    );

    setName("");
    setDepartment("");
    setEmail("");
  };

  return (
    <div className="faculty-container">
      <h1>➕ Add Faculty</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Faculty Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Add Faculty</button>
      </form>

      <button
        className="back-btn"
        onClick={() => setPage("dashboard")}
      >
        ⬅ Back to Dashboard
      </button>
    </div>
  );
}

export default AddFaculty;