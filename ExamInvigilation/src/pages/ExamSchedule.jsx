import "../styles/ExamSchedule.css";

function ExamSchedule({ setPage }) {
  const exams = [
    {
      subject: "Data Structures",
      date: "15-06-2026",
      time: "09:00 AM",
      hall: "A101",
    },
    {
      subject: "Java Programming",
      date: "16-06-2026",
      time: "11:00 AM",
      hall: "B205",
    },
    {
      subject: "DBMS",
      date: "17-06-2026",
      time: "02:00 PM",
      hall: "C310",
    },
    {
      subject: "Computer Networks",
      date: "18-06-2026",
      time: "10:00 AM",
      hall: "D110",
    },
  ];

  return (
    <div className="exam-container">
      <h1>📅 Exam Schedule</h1>

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
          {exams.map((exam, index) => (
            <tr key={index}>
              <td>{exam.subject}</td>
              <td>{exam.date}</td>
              <td>{exam.time}</td>
              <td>{exam.hall}</td>
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

export default ExamSchedule;