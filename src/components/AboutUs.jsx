import React, { Component } from 'react';
import "./AboutUs.css"
import { Button } from "antd";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.jpg"; 

function AboutUs() {
  return (
   
    <div> 

<div className="about-section">
  <h1>About Us</h1>
  <p>We are a leading non-state degree awarding institute approved by the University Grants Commission (UGC) under the Universities Act. We are also members of the Association of Commonwealth Universities (ACU), as well as the International Association of Universities (IAU), and the first Sri Lankan institute to be accredited by the Institution of Engineering & Technology, UK.</p> 
    <p>We are proud to be listed as a leading and formidable awarding institute authorised and approved by the University Grants Commission (UGC) under the Universities Act, and the International Association of Universities (IAU). Furthermore, not only we are the first Sri Lankan institute to be accredited by the Institute of Engineering & Technology(IET.), UK, our IT degrees are also in turn accredited by the Engineering Council, UK.</p>
</div>
<br/>
<h2 class="text-center">Our Team</h2>

<div className="col-md-8 mt-4 mx-auto">

        
        <br/>

     
        <div class="container">
        <div class="row hidden-md-up">
        {/* 01 */}
                <div class="col-md-4" >
                <div class="card text-center" style = {{backgroundColor:'#dddddd'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}}  src={team1} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <h4 style={{marginTop:"10px"}}>Chairman</h4>
                    <h4 style={{color:"#8b7870"}}>Jane Doe</h4> 
                    <p>Adjunct Associate Professor</p>
                    <p>Utah State University, USA.</p>
                    <p style={{color:"#1c67a5"}}>jane@example.com</p>
                    </div>
                </div>
                </div>
        {/* 02 */}
                <div class="col-md-4" >
                <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} src={team3}  alt="Card image cap"/>
                    <h4 style={{marginTop:"10px"}}>President/CEO</h4>
                    <h4 style={{color:"#8b7870"}}>Olivia Clone</h4>
                    <p>Adjunct Professor</p>
                    <p>Utah State University, USA.</p>
                    <p style={{color:"#1c67a5"}}>olivia@example.com</p>
                    </div>
                </div>
                </div>
        {/* 03 */}
                <div class="col-md-4" >
                <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} src={team2} alt="Card image cap"/>
                    <h4 class="card-title"></h4>                
                    <h4 style={{marginTop:"10px"}}>Board Member</h4>
                    <h4 style={{color:"#8b7870"}}>Mike Ross</h4>
                    <p>Professor</p>
                    <p>Utah State University, USA.</p>
                    <p style={{color:"#1c67a5"}}>mike@example.com</p>
                    </div>
                </div>
                </div>


        
        </div>
        </div>
        <br/> <br/>

    </div>

<br/>
        

</div>
  );
}

export default AboutUs;