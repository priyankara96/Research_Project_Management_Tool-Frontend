import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/student/Register";
import UpdateUsers from "./pages/admin/UpdateUsers";
import Evaluate from "./pages/staff/PanelMember/Evaluate";
import Topic from "./pages/staff/Supervisor/Topic";

export default function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/UpdateUsers" element={<UpdateUsers />} />
        <Route path="/Evaluate" element={<Evaluate />} />
        <Route path="/Topic" element={<Topic />} />
      </Routes>
    </Router>
  );
}
