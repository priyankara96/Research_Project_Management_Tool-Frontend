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

// -------------------------------------------------------------------------  Supervisor
export const SidebarItemsSupervisor = [
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
        title: "Notices",
        path: "/Notices",
        icon: <IoIcons.IoMdNotifications />,
        className: "nav-text"
    }
    
];


// -------------------------------------------------------------------------  Co-Supervisor
export const SidebarItemsCoSupervisor = [
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
        title: "Notices",
        path: "/Notices",
        icon: <IoIcons.IoMdNotifications />,
        className: "nav-text"
    }
    
];


// -------------------------------------------------------------------------  Admin
export const SidebarItemsAdmin = [
    {
        title: "Authentication Management",
        className: "nav-text2",
        path:"/AuthenticationManagement"
    },
    {
        title: "Add a new Student",
        path: "/Add_Student",
        icon: <FaIcons.FaArrowAltCircleRight />,
        className: "nav-text"
    },
    {
        title: "Add a new Lecturer",
        path: "/Add_Lecturer",
        icon: <FaIcons.FaArrowAltCircleRight />,
        className: "nav-text"
    },
    {
        title: "Add a new Supervisor",
        path: "/Add_Supervisor",
        icon: <FaIcons.FaArrowAltCircleRight />,
        className: "nav-text"
    },
    {
        title: "Add a new Co-Supervisor",
        path: "/Add_Co-Supervisor",
        icon: <FaIcons.FaArrowAltCircleRight />,
        className: "nav-text"
    },
    {
        title: "Update & Delete Authentication",
        path: "/All_Data",
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
        title: "Feedback Management",
        path: "#",
        className: "nav-text2"
    }
];



