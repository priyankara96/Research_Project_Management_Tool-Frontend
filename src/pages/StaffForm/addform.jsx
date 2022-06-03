import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert'

export default class addform extends Component {

  //initializing using constructor to null values
  constructor(props){
    super(props);
    this.state={
      name:"",
      idd:"",
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

    const {name,idd,date,} = this.state;

    const data ={
      name:name,
      idd:idd,
      date:date,
     
    }

    console.log(data)

    //validation for recipe name
    if(name.length<2){
      swal("Enter valid  name", "error")
    }else{

      //save the entered data in db
    axios.post("https://backend-research-tool.herokuapp.com/staff/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            name:"",
            idd:"",
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
       <div>
      <div className> <br/>
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="text-center" > <font face = "Comic sans MS" size ="6" > Add New  </font> </h1> 
          <br/>
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal"></h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} >Name</label>
              <input type="text"
              className="form-control"
              name="name"
              placeholder="Name "
              value={this.state.name}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>NIC</label>
              <input type="text"
              className="form-control"
              name="idd"
              placeholder="nic"
              value={this.state.idd}
              onChange={this.handleInputChange}/>
            </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Birth Day </label>
              <input type="date"
              className="form-control"
              name="date"
              placeholder="birthday"
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
          
        <br/>
          </div>
        </div>
        </div>
        </div>
    )
   }
}