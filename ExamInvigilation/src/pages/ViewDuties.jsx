import "../styles/ViewDuties.css";

function ViewDuties({ setPage }) {
  const duties = [
    {
      faculty: "Ravi Kumar",
      subject: "Data Structures",
      room: "A101",
      date: "15-06-2026",
    },
    {
      faculty: "Priya Sharma",
      subject: "Java Programming",
      room: "B205",
      date: "16-06-2026",
    },
    {
      faculty: "Kiran Reddy",
      subject: "DBMS",
      room: "C310",
      date: "17-06-2026",
    },
  ];

  return (
    <div className="duties-container">
      <h1>📋 View Duties</h1>

      <table>
        <thead>
          <tr>
            <th>Faculty Name</th>
            <th>Subject</th>
            <th>Room</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {duties.map((duty, index) => (
            <tr key={index}>
              <td>{duty.faculty}</td>
              <td>{duty.subject}</td>
              <td>{duty.room}</td>
              <td>{duty.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="back-btn"
        onClick={() => setPage("dashboard")}
      >
        ⬅ Back to Dashboard
      </button>
    </div>
  );
}

export default ViewDuties;