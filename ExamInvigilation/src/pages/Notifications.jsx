import "../styles/Notifications.css";

function Notifications({ setPage }) {
  const notifications = [
    "📢 Exam Schedule Updated",
    "👨‍🏫 New Faculty Added Successfully",
    "📋 Invigilation Duties Released",
    "🏫 Room Allocation Updated",
    "✅ Attendance Report Generated",
  ];

  return (
    <div className="notifications-container">
      <h1>🔔 Notifications</h1>

      <div className="notification-list">
        {notifications.map((item, index) => (
          <div key={index} className="notification-card">
            {item}
          </div>
        ))}
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

export default Notifications;