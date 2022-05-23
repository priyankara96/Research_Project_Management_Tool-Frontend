import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/student/Register";
import UpdateUsers from "./pages/admin/UpdateUsers";
import Evaluate from "./pages/staff/PanelMember/Evaluate";
import Topic from "./pages/staff/Supervisor/Topic";

import { BrowserRouter, Route } from "react-router-dom";

// Chanduni
import AdminHome from "./pages/admin/AdminHome";
import CreateAdminPost from "./pages/admin/CreateAdminPost";
import EditAdminPost from "./pages/admin/EditAdminPost";
import AdminPostDetails from "./pages/admin/AdminPostDetails";
import NoticeHome from "./components/NoticeHome";
// Chanduni

// Erandi
import CreateGroup from "./pages/student/CreateGroup";
import ViewGroup from "./pages/student/ViewGroup";
// Erandi

export default function MainRouter() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/Register" element={<Register />} />
    //     <Route path="/UpdateUsers" element={<UpdateUsers />} />
    //     <Route path="/Evaluate" element={<Evaluate />} />
    //     <Route path="/Topic" element={<Topic />} />

    <BrowserRouter>
      {/* Chanduni */}
      <Route path="/admin" exact component={AdminHome}></Route>
      <Route path="/admin/add" exact component={CreateAdminPost}></Route>
      <Route path="/admin/edit/:id" exact component={EditAdminPost}></Route>
      <Route path="/admin/:id" exact component={AdminPostDetails}></Route>
      <Route path="/" exact component={NoticeHome}></Route>

      {/* Chanduni */}

      {/* Erandi */}
      <Route path="/CreateGroup" exact component={CreateGroup} />
      <Route path="/ViewGroup/:id" exact component={ViewGroup} />
      {/* Erandi */}

    </BrowserRouter>
  );
}
