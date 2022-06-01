import React, { Component } from 'react';
import axios from 'axios';

export default class editpanel extends Component{

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
    const id = this.props.match.params.id;

    const {name,idd,designation,date} = this.state;

    const data ={
       name:name,
      idd:idd,
      designation:designation,
       date:date,
    }

    console.log(data)

    //updating the relevant data by retrieving existing data
    axios.put(`http://localhost:8000/panel/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Post updated Successfully")
        this.setState(
          {
             name:"",
            idd:"",
            designation:"",
            date:"",
          }
        )
      }
    })
  }
  
  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/panel/${id}`).then((res) =>{

      if(res.data.success){
        this.setState({
         
          name:res.data.post.name,
          idd:res.data.post.idd,
          designation:res.data.post.designation,
          date:res.data.post.date

        });

        console.log(this.state.post);
      }
    })

  }

  render() {
    return (
      //designing form for updating
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

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update
                          
              </button>
          
          
          </form>
          
        </div>
    )
   }
}
