import React, { Component } from 'react';
import axios from 'axios';
import './styles1.css';
import swal from "sweetalert";
import notices from '../../images/notices.png'
export default class CreateAdminPost extends Component {
constructor(props){
    super(props);
        this.state={
          topic:"",
          body:"",
          date:"",
          other:""
    }
}
handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }
  onSubmit = (e) =>{

    e.preventDefault();

    const {topic,body,date, other} = this.state;

    const data ={
      topic:topic,
      body:body,
      date:date,
      other:other
    }
    console.log(data);
//validation
    if (topic == "" || body == "" || date == "" || other == "") {
      swal("Please fill the form correctly", "Form values cannot be empty", "error");
    }else{
 //data save
    axios.post("https://backend-research-tool.herokuapp.com/admin/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            topic:"",
            body:"",
            date:"",
            other:""
          }
        );
        swal(
          "Notice Added Successfully",
            "Notice Details added successfully",
            "success");
      }
    })
  }

  }
  //demo button
  demo =() => { 

    //setState
    this.setState ({
      topic :"Group Registration"
    })
    this.setState ({
      body:"Must have 4 members in each group. Appoint a leader and register Your group. Registration can be done only for the Leader. Registartion link is avaible below"
    })
  
    this.setState ({
      date:2/3/2022
    }) 
  
    this.setState ({
      other:"LIC"
    }) 
  
  }
 
    render() {
    return (
      <div className='container'>
          
      <h1 className="text-center">Add a Notice</h1>
      <button  className="btn btn-success btnback">
          <i class="material-icons">navigate_before</i>
          <a href="/admin"style={{ textDecoration: 'none', color: 'white' }}>
              Back
              </a></button>
    
              <div className="row">
                <div className="col-3">
                  <br/>
                  <br/>
              <img src= {notices} style={{width:'500px', borderRadius:"150000000000000000px"}}/>
              </div>
              <div className="col-9">
          <div className="align">
        <div className="card1 card" style={{width:'600px'}}>
        <form className="row g-3 needs-validation form1" noValidate>
              <div class="card-body">
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Topic: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="topic"
                    placeholder="Enter Topic"
                    value={this.state.topic}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Description: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="body"
                    placeholder="Enter Description "
                    value={this.state.body}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Other: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="other"
                    placeholder="Other "
                    value={this.state.other}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Date: </label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    placeholder="Enter Date"
                    value={this.state.date}
                    onChange={this.handleInputChange}
                  />
                </div>

                <br />

                <br />
              </div>
            </form>
            <div className='btnAlign'>
          <button
              className="btn btn-success "
              type="submit"
              style={{ marginTop: "15px" }}
              onClick={this.onSubmit}
            >
                 <i class="material-icons">check</i>
              &nbsp; Submit
            </button>
          </div>
          <div className="btnAlign">
          <br/>
        <button type="button" className="btn btn-outline-dark btn-sm btnAlign" onClick={this.demo} > Demo </button>
        <br/>
        <br/>
        </div>
          </div>
          </div>
          </div>
          </div>
          

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          </div>
        
          

       
         

    
    )
  }
}
