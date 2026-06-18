import { useState } from "react";
import "../styles/Settings.css";

function Settings({ setPage }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="settings-container">
      <h1>⚙️ Settings</h1>

      <div className="settings-card">

        <h3>Theme Settings</h3>

        <label className="toggle-label">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          Enable Dark Mode
        </label>

        <p>
          Current Mode:
          {darkMode ? " 🌙 Dark Mode" : " ☀️ Light Mode"}
        </p>

      </div>

      <div className="settings-card">

        <h3>System Information</h3>

        <p>Project: Smart Exam Invigilation System</p>

        <p>Version: 1.0</p>

        <p>Status: Active ✅</p>

      </div>

      <button
        className="back-btn"
        onClick={() => setPage("dashboard")}
      >
        ⬅ Back to Dashboard
      </button>

    </div>
  );
}

export default Settings;