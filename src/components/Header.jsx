import React from "react";
import "./StylesHeader.css";
import SliderLecturer from "./SliderLecturer";
import SliderStudent from "./SliderStudent";
import AdminSlider from "./SliderAdmin";
import SliderSupervisor from "./SliderSupervisor";
import SliderCoSupervisor from "./SliderCoSupervisor";
import logo from "../images/CourseWeb.jpg";
import useUser from "../services/UserContext";
import { AiOutlineLogin } from "react-icons/ai";
import useRequest from "../services/RequestContext";
import { useHistory } from "react-router-dom";

function Header() {
  const { user } = useUser();
  console.log("User", user);

  const { updateToken } = useRequest();
  const { setUser } = useUser();

  const history = useHistory();
  const logout = async () => {
    await updateToken();
    setUser({});

    history.push("/login");
    window.location.reload(true);
  }; 

  if (user == undefined) {
    return (
      <>
        <div className="conatiner"> {/* ----------------------- When there is no login opportunity */}
          <div className="header">
          <a href="/"><img src={logo} alt="logo" className="logo" /></a>

            <ul className="pages">
              <a href="/">
                Home
              </a>
              <a href="/login">
                Notice
              </a>
              <a href="/login">
                Resources
              </a>
              <a href="/AboutUs">
                About
              </a>
              <a href="/ContactUs">
                Contact Us
              </a>
              <a href="/login">
                My Profile
              </a>
              <button type="button" class="btn btn-outline-secondary" onClick={logout} style={{marginLeft:"50px"}}><AiOutlineLogin />&nbsp; Logout</button>
            </ul>
          </div>
        </div>
      </>
    );
  } else if (user.role == "Student") { //  --------------------- When there is a student login opportunity  
    return (
      <>
        <div className="conatiner">
          <div className="header">
            <SliderStudent />
            <a href="/home2"><img src={logo} alt="logo" className="logo" /></a>

            <ul className="pages">
              <a href="/home2">
                Home
              </a>
              <a href="/Notice">
                Notice
              </a>
              <a href="/">
                Resources
              </a>
              <a href="/AboutUs">
                About
              </a>
              <a href="/ContactUs">
                Contact Us
              </a>
              <a href="/Profile">
                My Profile
              </a>
              <button type="button" class="btn btn-outline-secondary" onClick={logout} style={{marginLeft:"50px"}}><AiOutlineLogin />&nbsp; Logout</button>
            </ul>
          </div>
        </div>
      </>
    );
  } else if (user.role == "Lecturer") { //  ------------------- When there is a lecturer login opportunity 
    return (
      <>
        <div className="conatiner">
          <div className="header">
            <SliderLecturer />
            <a href="/home2"><img src={logo} alt="logo" className="logo" /></a>

            <ul className="pages">
              <a href="/home2">
                Home
              </a>
              <a href="/Notice">
                Notice
              </a>
              <a href="/">
                Resources
              </a>
              <a href="/AboutUs">
                About
              </a>
              <a href="/ContactUs">
                Contact Us
              </a>
              <a href="/Profile">
                My Profile
              </a>
              <button type="button" class="btn btn-outline-secondary" onClick={logout} style={{marginLeft:"50px"}}><AiOutlineLogin />&nbsp; Logout</button>
            </ul>
          </div>
        </div>
      </>
    );
  } else if (user.role == "Supervisor") { //  ------------------- When there is a supervisor login opportunity 
    return (
      <>
        <div className="conatiner">
          <div className="header">
            <SliderSupervisor />
            <a href="/SupervisorDashboard"><img src={logo} alt="logo" className="logo" /></a>

            <ul className="pages">
              <a href="/SupervisorDashboard">
                Home
              </a>
              <a href="/Notice">
                Notice
              </a>
              <a href="/">
                Resources
              </a>
              <a href="/AboutUs">
                About
              </a>
              <a href="/ContactUs">
                Contact Us
              </a>
              <a href="/Profile">
                My Profile
              </a>
              <button type="button" class="btn btn-outline-secondary" onClick={logout} style={{marginLeft:"50px"}}><AiOutlineLogin />&nbsp; Logout</button>
            </ul>
          </div>
        </div>
      </>
    );
  } else if (user.role == "Co-Supervisor") { //  ------------------- When there is a co-supervisor login opportunity 
    return (
      <>
        <div className="conatiner">
          <div className="header">
            <SliderCoSupervisor />
            <a href="/SupervisorDashboard"><img src={logo} alt="logo" className="logo" /></a>

            <ul className="pages">
              <a href="/SupervisorDashboard">
                Home
              </a>
              <a href="/Notice">
                Notice
              </a>
              <a href="/">
                Resources
              </a>
              <a href="/AboutUs">
                About
              </a>
              <a href="/ContactUs">
                Contact Us
              </a>
              <a href="/Profile">
                My Profile
              </a>
              <button type="button" class="btn btn-outline-secondary" onClick={logout} style={{marginLeft:"50px"}}><AiOutlineLogin />&nbsp; Logout</button>
            </ul>
          </div>
        </div>
      </>
    );
  } else { //  --------------------------------------------------- When there is an admin login opportunity 
    return (
      <>
        <div className="conatiner">
          <div className="header">
            <AdminSlider />
            <a href="/AdminDashboard"><img src={logo} alt="logo" className="logo" /></a>

            <ul className="pages">
              <a href="/AdminDashboard">
                Home
              </a>
              <a href="/Notice">
                Notice
              </a>
              <a href="/">
                Resources
              </a>
              <a href="/AboutUs">
                About
              </a>
              <a href="/ContactUs">
                Contact Us
              </a>
              <a href="#">
                My Profile
              </a>
              <button type="button" class="btn btn-outline-secondary" onClick={logout} style={{marginLeft:"50px"}}><AiOutlineLogin />&nbsp; Logout</button>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
