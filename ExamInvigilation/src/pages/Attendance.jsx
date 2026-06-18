import { useState } from "react";
import "../styles/Attendance.css";

function Attendance({ setPage }) {

  const [studentId, setStudentId] = useState("");

  const [result, setResult] = useState("");

  const searchStudent = () => {

    if (studentId === "101") {

      setResult("👨‍🎓 Rahul | Hall: A101 | Status: ✅ Present");

    }

    else if (studentId === "102") {

      setResult("👩‍🎓 Priya | Hall: A101 | Status: ❌ Absent");

    }

    else if (studentId === "103") {

      setResult("👩‍🎓 Anjali | Hall: B205 | Status: ✅ Present");

    }

    else if (studentId === "104") {

      setResult("👨‍🎓 Kiran | Hall: C310 | Status: ⏰ Late");

    }

    else {

      setResult("❌ Student not found");

    }

  };

  return (

    <div className="attendance-page">

      <button

        className="back-btn"

        onClick={() => setPage("dashboard")}

      >

        ← Back to Dashboard

      </button>

      <h1>

        📝 Smart Attendance Monitoring System

      </h1>

      <p className="subtitle">

        Monitor student attendance and exam hall participation.

      </p>

      {/* Cards */}

      <div className="cards">

        <div className="card">

          <h2>👨‍🎓 Total Students</h2>

          <h1>250</h1>

        </div>

        <div className="card">

          <h2>✅ Present</h2>

          <h1>230</h1>

        </div>

        <div className="card">

          <h2>❌ Absent</h2>

          <h1>20</h1>

        </div>

        <div className="card">

          <h2>⏰ Late Arrivals</h2>

          <h1>8</h1>

        </div>

      </div>

      {/* Highlights */}

      <div className="highlights">

        <div className="highlight-box">

          🏆 Best Attendance Hall : A101 (98%)

        </div>

        <div className="highlight-box">

          ⚠️ Low Attendance Hall : C310 (72%)

        </div>

        <div className="highlight-box">

          📈 Overall Attendance : 92%

        </div>

      </div>

      {/* Search Student */}

      <div className="search-box">

        <h2>

          🔍 Search Student

        </h2>

        <input

          type="text"

          placeholder="Enter Student ID"

          value={studentId}

          onChange={(e) => setStudentId(e.target.value)}

        />

        <button

          onClick={searchStudent}

        >

          Search

        </button>

        {result && (

          <div className="search-result">

            {result}

          </div>

        )}

      </div>

      {/* Attendance Table */}

      <div className="table-section">

        <h2>

          📋 Attendance Details

        </h2>

        <table>

          <thead>

            <tr>

              <th>ID</th>

              <th>Name</th>

              <th>Hall</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>101</td>

              <td>Rahul</td>

              <td>A101</td>

              <td>✅ Present</td>

            </tr>

            <tr>

              <td>102</td>

              <td>Priya</td>

              <td>A101</td>

              <td>❌ Absent</td>

            </tr>

            <tr>

              <td>103</td>

              <td>Anjali</td>

              <td>B205</td>

              <td>✅ Present</td>

            </tr>

            <tr>

              <td>104</td>

              <td>Kiran</td>

              <td>C310</td>

              <td>⏰ Late</td>

            </tr>

          </tbody>

        </table>

      </div>

      {/* Alerts */}

      <div className="alerts">

        <h2>

          🔔 Attendance Alerts

        </h2>

        <p>

          ⚠️ 20 students are absent today.

        </p>

        <p>

          ⚠️ Hall C310 attendance is low.

        </p>

        <p>

          ⚠️ 8 students arrived late.

        </p>

      </div>

    </div>

  );
}

export default Attendance;