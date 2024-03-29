import React, { Component } from 'react';
import { Button } from "antd";
import "./Dashboard.css"
import background from "../images/background2.jpeg";

import icon from "../images/add-icon.jpg";

export default class MainDashboard extends Component {

  render() {
    return (
      <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      

    <div className='page'>
    <div><br/>
    <h1 className="text-center">Panel Member Dashboard</h1>

<div class="py-3">
    <div class="container">
      <div class="row hidden-md-up">
{/* 01 */}
<div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#dddddd'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={icon} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="#" style={{ textDecoration: 'none', color: 'Info' }}>
                    Name 1 </a>
               </Button>
             </div>
           </div>
         </div>
{/* 02 */}
          <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={icon} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="#" style={{ textDecoration: 'none', color: 'Info' }}>
                    Name 2 </a>
               </Button>
             </div>
           </div>
         </div>
{/* 03 */}
<div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={icon} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="#" style={{ textDecoration: 'none', color: 'Info' }}>
                    Name 3 </a>
               </Button>
             </div>
           </div>
         </div>
{/* 04 */}
          <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={icon} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="#" style={{ textDecoration: 'none', color: 'Info' }}>
                    Name 4 </a>
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
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={icon} alt="Card image cap"/>
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
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={icon} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="#" style={{ textDecoration: 'none', color: 'Info' }}>
                    Name 6 </a>
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