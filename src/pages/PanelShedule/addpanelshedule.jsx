import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert'

export default class panelshedule extends Component {

  //initializing using constructor to null values
  constructor(props){
    super(props);
    this.state={
      name:"",
      date:"",
      time:"",
      link:"",
     
     
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

    const {name,date,time,link} = this.state;

    const data ={
      name:name,
      date:date,
      time:time,
      link:link
      
     
    }

    console.log(data)

    //validation for recipe name
    if(name.length<2){
      swal("Enter valid  name", "error")
    }else{

      //save the entered data in db
    axios.post("http://localhost:8000/panelshedule/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            name:"",
            date:"",
            time:"",
            link:"",
        
            
          }
        )
        swal("Added successfully", "success");
      }
    })
  }

  }

  render() {
    return (
      //designing form to get user inputs
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Add Panel Member </h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} >Panel Member</label>
              <input type="text"
              className="form-control"
              name="name"
              placeholder="Panel Member "
              value={this.state.name}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Date</label>
              <input type="date"
              className="form-control"
              name="date"
              placeholder="date"
              value={this.state.date}
              onChange={this.handleInputChange}/>
            </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Time</label>
              <input type="time"
              className="form-control"
              name="time"
              placeholder="time"
              value={this.state.time}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Link</label>
              <input type="text"
              className="form-control"
              name="link"
              placeholder="meeting link"
              value={this.state.link}
              onChange={this.handleInputChange}/>
            </div>
             {/* <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Number Of Passsngers</label>
              <input type="text"
              className="form-control"
              name="passengers"
              placeholder="no of passengers"
              value={this.state.passengers}
              onChange={this.handleInputChange}/>
            </div> */}


          
            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>
          
          
          </form>
          <br>
          </br>
            <button className="ntn btn-success"><a href="/taxihome" style={{ textDecoration: 'none', color: 'white' }}> Mermber List</a></button>
          
        </div>
    )
  }
}