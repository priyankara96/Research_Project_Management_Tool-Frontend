import React, { Component } from 'react';
import './ContactUs.css'
import background from "../images/ContactUs.jpg";
import a from "../images/a.jpg";
import b from "../images/b.jpg";
import c from "../images/c.jpg";

function ContactUs() {
  return (
    <div  style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }} > 
    

    <div class="chip" style={{marginLeft:"50px", marginTop:"220px"}} >
    <img src={a} width="150" height="150" />
    +94 11 123 1234
    </div> <br/>
    
    <div class="chip" style={{marginLeft:"50px", marginTop:"50px"}} >
    <img src={b} width="150" height="150" />
    <a href='#'>courseweb@email.lk</a>
    </div> <br/>

    <div class="chip" style={{marginLeft:"50px", marginTop:"50px", marginBottom:"300px"}} >
    <img src={c} width="150" height="150" />
    <a href='#'>Location</a>
    </div> 


    </div>
  );
}

export default ContactUs;