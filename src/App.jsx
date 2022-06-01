import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./MainRouter";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import {  BrowserRouter as Router } from "react-router-dom";
import { RequestContextProvider } from "./services/RequestContext";
import { UserContextProvider } from "./services/UserContext";

export default function App() {
  return (
    <>
    <RequestContextProvider baseURL={"http://localhost:8000"}>
    <UserContextProvider>
      <Router>
        <Header />
        <MainRouter /> 
        <Footer />
      </Router>
      </UserContextProvider>
    </RequestContextProvider>
</>
  );
}
