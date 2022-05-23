import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai'

// -------------------------------------------------------------------------  Lecturer
export const SidebarItemsLecturer = [
    {
        title: "My Profile",
        path: "/Profile",
        icon: <FaIcons.FaUserCircle />,
        className: "nav-text"
    },
    {
        title: "My Courses",
        path: "/",
        icon: <FaIcons.FaBook />,
        className: "nav-text"
    },
    {
        title: "Q & A",
        path: "/",
        icon: <FaIcons.FaEdit />,
        className: "nav-text"
    },
    {
        title: "Notices",
        path: "/Notices",
        icon: <IoIcons.IoMdNotifications />,
        className: "nav-text"
    },
    {
        title: "Performance",
        path: "/ViewMarks",
        icon: <FaIcons.FaArrowCircleUp />,
        className: "nav-text"
    },
    {
        title: "Analysis",
        path: "/analysis",
        icon: <FaIcons.FaChartLine />,
        className: "nav-text"
    },
    {
        title: "Reviews",
        path: "/reviewList",
        icon: <FaIcons.FaStarHalfAlt />,
        className: "nav-text"
    }
    
];


// -------------------------------------------------------------------------  Student
export const SidebarItemsStudent = [
    {
        title: "My Profile",
        path: "/profile",
        icon: <FaIcons.FaUserCircle />,
        className: "nav-text"
    },
    {
        title: "My Courses",
        path: "/MyCourses",
        icon: <FaIcons.FaBook />,
        className: "nav-text"
    },
    {
        title: "Q & A",
        path: "/allQ",
        icon: <FaIcons.FaEdit />,
        className: "nav-text"
    },
    {
        title: "Performance",
        path: "/MyPerformance",
        icon: <FaIcons.FaArrowCircleUp />,
        className: "nav-text"
    },
    {
        title: "Notices",
        path: "/Notices",
        icon: <IoIcons.IoMdNotifications />,
        className: "nav-text"
    }
    
];


// -------------------------------------------------------------------------  Admin
export const SidebarItemsAdmin = [
    {
        title: "Job Vacancy Management",
        className: "nav-text2",
        path:"#"
    },
    {
        title: "Add a new vacancy",
        path: "/",
        icon: <FaIcons.FaArrowAltCircleRight />,
        className: "nav-text"
    },
    {
        title: "Update & Delete vacancy",
        path: "/",
        icon: <FaIcons.FaArrowAltCircleRight />,
        className: "nav-text"
    },
    {
        title: "Delete Career Requests",
        path: "/",
        icon: <FaIcons.FaArrowAltCircleRight />,
        className: "nav-text"
    },
    {
        title: "Genarate Report",
        path: "/",
        icon: <FaIcons.FaArrowAltCircleRight />,
        className: "nav-text"
    },
    {
        title: "Authentication Management",
        path: "/",
        className: "nav-text2"
    },

    {
        title: "Feedback Management",
        path: "/",
        className: "nav-text2"
    }
];



