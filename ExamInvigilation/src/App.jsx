import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import FacultyDashboard from "./pages/FacultyDashboard";
import ExamSchedule from "./pages/ExamSchedule";
import Attendance from "./pages/Attendance";

import AddFaculty from "./pages/AddFaculty";
import ViewDuties from "./pages/ViewDuties";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" && <Home setPage={setPage} />}

      {page === "login" && <Login setPage={setPage} />}

      {page === "dashboard" && <FacultyDashboard setPage={setPage} />}

      {page === "examSchedule" && <ExamSchedule setPage={setPage} />}

      {page === "attendance" && <Attendance setPage={setPage} />}

      {page === "addFaculty" && <AddFaculty setPage={setPage} />}

      {page === "viewDuties" && (
  <ViewDuties setPage={setPage} />
       )}

      {page === "notifications" && (
  <Notifications setPage={setPage} />
)}
      {page === "settings" && <Settings setPage={setPage} />}
    </div>
  );
}

export default App;