import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { RequestContextProvider } from "./services/RequestContext";
import { UserContextProvider } from "./services/UserContext";


// Priyankara
import Home1 from "./components/Home1";
import Home2 from "./components/Home2";
import Signin from "./pages/AuthenticationManagement/Signin";
import CreateUsers from "./pages/AuthenticationManagement/CreateUsers";
import SignupStudent from "./pages/AuthenticationManagement/SignupStudent";
import SignupLecturer from "./pages/AuthenticationManagement/SignupLecturer";
import Profile from "./pages/AuthenticationManagement/Profile";
import AuthenticationManagement from "./pages/AuthenticationManagement/AuthenticationManagement";
import All_Data from "./pages/AuthenticationManagement/All_Data";
import All_Edit_Data from "./pages/AuthenticationManagement/All_Edit_Data";
import Add_Student from "./pages/AuthenticationManagement/Add_Student";
import Add_Lecturer from "./pages/AuthenticationManagement/Add_Lecturer";
import Add_Supervisor from "./pages/AuthenticationManagement/Add_Supervisor";
import Add_CoSupervisor from "./pages/AuthenticationManagement/Add_Co-Supervisor";

import AdminDashboard from "./components/AdminDashboard";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
// Priyankara

// Chanduni
import AdminHome from "./pages/admin/AdminHome";
import CreateAdminPost from "./pages/admin/CreateAdminPost";
import EditAdminPost from "./pages/admin/EditAdminPost";
import AdminPostDetails from "./pages/admin/AdminPostDetails";
import NoticeHome from "./components/NoticeHome";
import ChatApp from "./components/ChatApp";
import GroupList from "./components/GroupList";
import Video from "./components/Video";
import AdminUpload from "./pages/admin/AdminUpload";
import ViewAdminUpload from "./pages/admin/ViewAdminUpload";
// Chanduni

// Nipuna
import Mailer from "./pages/Email/emailer";
import addpanel from "./pages/staff/addpanel";
import addform from "./pages/StaffForm/addform";
import edit from "./pages/staffedit/edit";
import addpanelmember from "./pages/PanelMembers/addpanelmember";
import panelmembertable from "./pages/PanelMembers/panelmembertable";
// import fileupload from "./pages/fileupload/fileupload";

import Add_Lecturer from "./pages/AuthenticationManagement/Add_Lecturer";
import Add_Supervisor from "./pages/AuthenticationManagement/Add_Supervisor";

// Erandi
import CreateGroup from "./pages/student/CreateGroup";
import ViewGroup from "./pages/student/ViewGroup";
import StudentDetails from "./pages/admin/StudentDetails";
import Submissions from "./pages/student/Submissions";
import StudentList from "./pages/admin/StudentList";
import StudentSubmissionView from "./pages/supervisor/StudentSubmissionView";
// Erandi


export default class MainRouter extends Component {
  render() {
    return (
      <RequestContextProvider baseURL={"http://localhost:8000/"}>
        <UserContextProvider>
          <BrowserRouter>
            <div style={{ backgroundColor: "#D0D3D4", margin: "0" }}>


              {/* Priyankara*/}
              <Route path="/" exact component={Home1} />
              <Route path="/Home2" exact component={Home2} />
              <Route path="/login" exact component={Signin} />
              <Route path="/CreateUsers" exact component={CreateUsers} />
              <Route path="/SignupStudent" exact component={SignupStudent} />
              <Route path="/SignupLecturer" exact component={SignupLecturer} />
              <Route path="/Profile" exact component={Profile} />
              <Route path="/AuthenticationManagement" exact component={AuthenticationManagement} />
              <Route path="/All_Data" exact component={All_Data} />
              <Route path="/alledit/:id" exact component={All_Edit_Data} />
              <Route path="/Add_Student" exact component={Add_Student} />
              <Route path="/Add_Lecturer" exact component={Add_Lecturer} />
              <Route path="/Add_Supervisor" exact component={Add_Supervisor} />
              <Route path="/Add_Co-Supervisor" exact component={Add_CoSupervisor} />

              <Route path="/AdminDashboard" exact component={AdminDashboard} />
              <Route path="/AboutUs" exact component={AboutUs} />
              <Route path="/ContactUs" exact component={ContactUs} />
              {/* End - Priyankara */}


              {/* Chanduni */}
                  <Route path='/admin' exact component={AdminHome}></Route>
                  <Route path='/admin/add' exact component={CreateAdminPost}></Route>
                  <Route path='/admin/edit/:id' exact component={EditAdminPost}></Route>
                  <Route path='/admin/:id' exact component={AdminPostDetails}></Route>
                  <Route path='/Notice' exact component={NoticeHome}></Route>
                  <Route path='/chat' exact component={ChatApp}></Route>
                  <Route path='/GroupList' exact component={GroupList}></Route>
                  <Route path='/Video' exact component={Video}></Route>
                  <Route path='/Resources' exact component={AdminUpload}></Route>
                  <Route path='/AdminUploads' exact component={ViewAdminUpload}></Route>
              {/* End - Chanduni */}

             {/* Nipuna */}
              <Route path='/Mailer' exact component={Mailer} ></Route>
              <Route path='/Panel' exact component={addpanel}></Route>
              <Route path='/staff/add' exact component={addform}></Route>
              <Route path='/staff/edit/:id' exact component={edit}></Route>
              <Route path='/addpanelmember' exact component={addpanelmember} ></Route>
              <Route path='/paneltable' exact component={panelmembertable} ></Route>
             
             {/* Erandi */}
             <Route path="/CreateGroup" exact component={CreateGroup} />
                  <Route path="/ViewGroup/:id" exact component={ViewGroup} />
                  <Route path="/Submissions" exact component={Submissions} />
                  <Route path="/StudentDetails" exact component={StudentDetails} />
                  <Route path="/StudentList" exact component={StudentList} />
                  <Route path="/StudentSubmissionView" exact component={StudentSubmissionView} />
              {/* Erandi */}

             
            </div>
          </BrowserRouter>
        </UserContextProvider>
      </RequestContextProvider>
    );
  }
}
