import React from "react";
import "./StylesHeader.css";
import SliderLecturer from "./SliderLecturer";
import SliderStudent from "./SliderStudent";
import AdminSlider from "./SliderAdmin";
import logo from "../images/CourseWeb.jpg";
import useUser from "../services/UserContext";
import { AiOutlineLogin } from "react-icons/ai";

function Header() {
  const { user } = useUser();
  console.log("User", user);

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
              <a href="/login" type="button" class="btn btn-outline-secondary" style={{marginLeft:"50px"}} > <AiOutlineLogin /> </a>
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
              <a href="/login" type="button" class="btn btn-outline-secondary" style={{marginLeft:"50px"}} > <AiOutlineLogin /> </a>
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
              <a href="/login" type="button" class="btn btn-outline-secondary" style={{marginLeft:"50px"}} > <AiOutlineLogin /> </a>
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
              <a href="/login" type="button" class="btn btn-outline-secondary" style={{marginLeft:"50px"}} > <AiOutlineLogin /> </a>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
