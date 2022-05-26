import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert'

export default class addpanelmember extends Component {

  //initializing using constructor to null values
  constructor(props){
    super(props);
    this.state={
      name:"",
      idd:"",
      designation:"",
      date:""
     
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

    const {name,idd,designation,date,} = this.state;

    const data ={
      name:name,
      idd:idd,
      designation:designation,
       date:date,
     
    }

    console.log(data)

    //validation for recipe name
    if(name.length<2){
      swal("Enter valid  name", "error")
    }else{

      //save the entered data in db
    axios.post("http://localhost:8000/panel/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            name:"",
            idd:"",
            designation:"",
            date:"",
            
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
              <label style={{marginBottom:'5px'}} >Panek Member</label>
              <input type="text"
              className="form-control"
              name="name"
              placeholder="Panel Member "
              value={this.state.name}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Panel Member's ID</label>
              <input type="text"
              className="form-control"
              name="idd"
              placeholder="Member id"
              value={this.state.idd}
              onChange={this.handleInputChange}/>
            </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Panel Menmber's Designation</label>
              <input type="text"
              className="form-control"
              name="designation"
              placeholder="designation"
              value={this.state.designation}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Evalution Date</label>
              <input type="date"
              className="form-control"
              name="date"
              placeholder="Date"
              value={this.state.date}
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