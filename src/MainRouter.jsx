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
// Priyankara

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



export default class MainRouter extends Component {
  render() {
    return (
      <RequestContextProvider baseURL={"http://localhost:8000/"}>
        <UserContextProvider>
          <BrowserRouter>
            <div style={{ backgroundColor: "#D0D3D4", margin: "0" }}>


              {/* Priyankara*/}
              <Route path="/Home1" exact component={Home1} />
              <Route path="/Home2" exact component={Home2} />
              <Route path="/login" exact component={Signin} />
              <Route path="/CreateUsers" exact component={CreateUsers} />
              <Route path="/SignupStudent" exact component={SignupStudent} />
              <Route path="/SignupLecturer" exact component={SignupLecturer} />
              <Route path="/Profile" exact component={Profile} />
              {/* End - Priyankara */}


              {/* Chanduni */}
                  <Route path='/admin' exact component={AdminHome}></Route>
                  <Route path='/admin/add' exact component={CreateAdminPost}></Route>
                  <Route path='/admin/edit/:id' exact component={EditAdminPost}></Route>
                  <Route path='/admin/:id' exact component={AdminPostDetails}></Route>
                  <Route path='/' exact component={NoticeHome}></Route>
  
              {/* End - Chanduni */}

              {/* Erandi */}
                  <Route path="/CreateGroup" exact component={CreateGroup} />
                  <Route path="/ViewGroup/:id" exact component={ViewGroup} />
              {/* Erandi */}

             
            </div>
          </BrowserRouter>
        </UserContextProvider>
      </RequestContextProvider>
    );
  }
}
