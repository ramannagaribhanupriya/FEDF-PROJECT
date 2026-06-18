import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import StudentItem from "./StudentItem";

function StudentDashboard() {
  const [students, setStudents] = useState([
    "Bhanu Priya",
    "Teja",
    "Lahari",
  ]);

  const [studentName, setStudentName] = useState("");

  const inputRef = useRef(null);

  // Focus input on page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Update browser title
  useEffect(() => {
    document.title = `Students: ${students.length}`;
  }, [students]);

  // Add student
  const addStudent = () => {
    if (studentName.trim() === "") return;

    setStudents([...students, studentName]);
    setStudentName("");
    inputRef.current.focus();
  };

  // Delete student using useCallback
  const deleteStudent = useCallback((name) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student !== name)
    );
  }, []);

  // Total students using useMemo
  const totalStudents = useMemo(() => {
    return students.length;
  }, [students]);

  // Total characters using useMemo
  const totalCharacters = useMemo(() => {
    return students.reduce(
      (total, student) => total + student.length,
      0
    );
  }, [students]);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Student Management Dashboard</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button onClick={addStudent} style={{ marginLeft: "10px" }}>
        Add Student
      </button>

      <button
        onClick={() => inputRef.current.focus()}
        style={{ marginLeft: "10px" }}
      >
        Focus Input
      </button>

      <h3>Total Students: {totalStudents}</h3>
      <h3>Total Characters: {totalCharacters}</h3>

      <ul style={{ listStyle: "none" }}>
        {students.map((student, index) => (
          <StudentItem
            key={index}
            name={student}
            onDelete={deleteStudent}
          />
        ))}
      </ul>
    </div>
  );
}

export default StudentDashboard;