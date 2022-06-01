import React, { Component } from 'react';
import { Button } from "antd";
import "./AuthenticationManagement.css"
import Student from "../../images/Student.png";
import Lecturer from "../../images/Lecturer.jpg";
import Supervisor from "../../images/Supervisor.jpg";
import CoSupervisor from "../../images/Co-Supervisor.jpg";
import All from "../../images/All.jpg";
import Report from "../../images/Report.png";

export default class MainDashboard extends Component {

  render() {
    return (
    <div>
        <br/>
    <div className="col-md-8 mt-4 mx-auto">
        <h1 className="text-center" >  Authentication Management </h1> 
        <br/>

        <form onSubmit = { this.onSubmit } className="needs-validation" noValidate style={{backgroundColor: "#c0cdce"}}>
        <br/><br/>

     
        <div class="container">
        <div class="row hidden-md-up">
        {/* 01 */}
                <div class="col-md-4" >
                <div class="card text-center" style = {{backgroundColor:'#dddddd'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={Student} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/Add_Student" style={{ textDecoration: 'none', color: 'Info' }}>
                        Add a new Student </a>
                    </Button>
                    </div>
                </div>
                </div>
        {/* 02 */}
                <div class="col-md-4" >
                <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={Lecturer} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/Add_Lecturer" style={{ textDecoration: 'none', color: 'Info' }}>
                        Add a new Lecturer </a>
                    </Button>
                    </div>
                </div>
                </div>
        {/* 03 */}
                <div class="col-md-4" >
                <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={All} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/All_Data" style={{ textDecoration: 'none', color: 'Info' }}>
                        Details of all Users </a>
                    </Button>
                    </div>
                </div>
                </div><br/><br/>



<div class="container" style={{marginTop:"15px"}}>
<div class="row hidden-md-up">
        {/* 04 */}
                <div class="col-md-4" >
                <div class="card text-center" style = {{backgroundColor:'#dddddd'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={Supervisor} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/Add_Supervisor" style={{ textDecoration: 'none', color: 'Info' }}>
                        Add a new Supervisor </a>
                    </Button>
                    </div>
                </div>
                </div>
        {/* 05 */}
                <div class="col-md-4" >
                <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={CoSupervisor} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/Add_Co-Supervisor" style={{ textDecoration: 'none', color: 'Info' }}>
                        Add a new Co-Supervisor </a>
                    </Button>
                    </div>
                </div>
                </div>
        {/* 06 */}
                <div class="col-md-4" >
                <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={Report} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/AuthenticationReport" style={{ textDecoration: 'none', color: 'Info' }}>
                        Generate Report </a>
                    </Button>
                    </div>
                </div>
                </div> 
                </div>


        
        </div>
        </div>
        </div>
        <br/> <br/>
        </form>

    </div> <br/><br/><br/><br/>
    </div>
    )
  }
}