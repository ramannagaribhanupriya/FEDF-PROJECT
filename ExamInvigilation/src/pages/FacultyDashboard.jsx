import "../styles/FacultyDashboard.css";

function FacultyDashboard({ setPage }) {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">

        <h2 className="logo">
          🎓 EIS
        </h2>

        <ul>

          <li>
            🏠 Dashboard
          </li>

          <li onClick={() => setPage("examSchedule")}>
            📅 Exam Schedule
          </li>

          <li onClick={() => setPage("attendance")}>
            📝 Attendance
          </li>

          <li onClick={() => setPage("addFaculty")}>
            👨‍🏫 Add Faculty
          </li>

          <li onClick={() => setPage("viewDuties")}>
            📋 View Duties
           </li>

          <li onClick={() => setPage("notifications")}>
  🔔 Notifications
</li>

          <li onClick={() => setPage("settings")}>
            ⚙️ Settings
          </li>

          <li onClick={() => setPage("home")}>
            🚪 Logout
          </li>

        </ul>

      </div>

      {/* Main Content */}
      <div className="content">

        <div className="header">
          <h1>Faculty Dashboard</h1>
          <p>Welcome to Smart Exam Invigilation System</p>
        </div>

        {/* Cards */}
        <div className="cards">

          <div className="card">
            <h3>Total Exams</h3>
            <p>15</p>
          </div>

          <div className="card">
            <h3>Faculty Members</h3>
            <p>25</p>
          </div>

          <div className="card">
            <h3>Today's Duties</h3>
            <p>8</p>
          </div>

          <div className="card">
            <h3>Notifications</h3>
            <p>4</p>
          </div>

        </div>

        {/* Upcoming Schedule */}
        <div className="schedule">

          <h2>Upcoming Exam Schedule</h2>

          <table>

            <thead>
              <tr>
                <th>Subject</th>
                <th>Date</th>
                <th>Time</th>
                <th>Hall</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Data Structures</td>
                <td>15-06-2026</td>
                <td>09:00 AM</td>
                <td>A101</td>
              </tr>

              <tr>
                <td>Java Programming</td>
                <td>16-06-2026</td>
                <td>11:00 AM</td>
                <td>B205</td>
              </tr>

              <tr>
                <td>DBMS</td>
                <td>17-06-2026</td>
                <td>02:00 PM</td>
                <td>C310</td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default FacultyDashboard;