import React, { Component } from 'react';
import { Button } from "antd";
import "./Dashboard.css"
import UserManagement from "../images/UserManagement.jpg";
import Feedback from "../images/Feedback.jpg";
import background from "../images/background2.jpeg";
import files from '../images/files.jpg';
import markings from '../images/markings.jpg';
import notices from '../images/notices.png'


export default class MainDashboard extends Component {

  render() {
    return (
      <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      

    <div className='page'>
    <div><br/>
    <h1 className="text-center">Admin Dashboard</h1>

<div class="py-3">
    <div class="container">
      <div class="row hidden-md-up">
{/* 01 */}
<div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#dddddd'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={UserManagement} alt="User Management"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/AuthenticationManagement" style={{ textDecoration: 'none', color: 'Info' }}>
               Authentication Management </a>
               </Button>
             </div>
           </div>
         </div>
{/* 02 */}
          <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={notices} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/admin" style={{ textDecoration: 'none', color: 'Info' }}>
               Notice Management </a>
               </Button>
             </div>
           </div>
         </div>
{/* 03 */}
<div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={files} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/Resources" style={{ textDecoration: 'none', color: 'Info' }}>
                   File Uploads </a>
               </Button>
             </div>
           </div>
         </div>
{/* 04 */}
          <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={markings} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/marking" style={{ textDecoration: 'none', color: 'Info' }}>
                   Marking Scheme Creating </a>
               </Button>
             </div>
           </div>
         </div>

      </div><br/>
{/* 05 */}
        <div class="row">
        <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src="" alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="#" style={{ textDecoration: 'none', color: 'Info' }}>
                   Name 5 </a>
               </Button>
             </div>
           </div>
        </div>
{/* 06 */}
        <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={Feedback} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="#" style={{ textDecoration: 'none', color: 'Info' }}>
                   Feedback Management </a>
               </Button>
             </div>
           </div>
         </div>


        </div><br></br>

    </div>
  </div>







    </div>
      
    

    </div>
    </div>
    )


    
  }
}