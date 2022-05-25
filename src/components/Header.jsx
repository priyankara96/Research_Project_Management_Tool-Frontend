import React from "react";
import "./StylesHeader.css";
import SliderLecturer from "./SliderLecturer";
import SliderStudent from "./SliderStudent";
import AdminSlider from "./SliderAdmin";
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
          <a href="/home1"><img src={logo} alt="logo" className="logo" /></a>

            <ul className="pages">
              <a href="/home1">
                Home
              </a>
              <a href="/">
                About
              </a>
              <a href="/login">
                My Courses
              </a>
              <a href="/login">
                Resources
              </a>
              <a href="/login">
                Libraries
              </a>
              <a href="/">
                Contact Us
              </a>
              <a href="/home1" type="button" class="btn btn-outline-secondary" style={{marginLeft:"50px"}} > <AiOutlineLogin /> </a>
              <button onClick={logout}>Logout</button>
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
              <a href="/">
                About
              </a>
              <a href="/">
                My Courses
              </a>
              <a href="/">
                Resources
              </a>
              <a href="/">
                Libraries
              </a>
              <a href="/">
                Contact Us
              </a>
              <a href="/home1" type="button" class="btn btn-outline-secondary" style={{marginLeft:"50px"}} > <AiOutlineLogin /> </a>
              <button onClick={logout}>Logout</button>
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
              <a href="/">
                About
              </a>
              <a href="/">
                My Courses
              </a>
              <a href="/">
                Resources
              </a>
              <a href="/">
                Libraries
              </a>
              <a href="/">
                Contact Us
              </a>
              <a href="/home1" type="button" class="btn btn-outline-secondary" style={{marginLeft:"50px"}} > <AiOutlineLogin /> </a>
              <button onClick={logout}>Logout</button>
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
              <a href="/">
                About
              </a>
              <a href="/">
                My Courses
              </a>
              <a href="/">
                Resources
              </a>
              <a href="/">
                Libraries
              </a>
              <a href="/">
                Contact Us
              </a>
              <a href="/home1" type="button" class="btn btn-outline-secondary" style={{marginLeft:"50px"}} > <AiOutlineLogin /> </a>
              <button onClick={logout}>Logout</button>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
