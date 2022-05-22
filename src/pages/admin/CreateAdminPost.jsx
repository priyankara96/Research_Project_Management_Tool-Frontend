import React, { Component } from 'react';
import axios from 'axios';

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
    console.log(data)

    axios.post("http://localhost:8000/admin/save",data).then((res) =>{
      if(res.data.success){
        this.setState(
          {
            topic:"",
            body:"",
            date:"",
            other:""
          }
        )
      }
    })


  }
 
    render() {
    return (
      <div>
      <h1 className="h3 mb-3 font-weight-normal">Create new Notice</h1>
      <form className="needs-validation" noValidate>
        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >Topic</label>
          <input type="text"
          className="form-control"
          name="topic"
          placeholder="Enter Topic"
          value={this.state.topic}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Description</label>
          <input type="text"
          className="form-control"
          name="body"
          placeholder="Enter Desciption"
          value={this.state.body}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Other</label>
          <input type="text"
          className="form-control"
          name="other"
          placeholder="Other"
          value={this.state.other}
          onChange={this.handleInputChange}/>
        </div>


        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Date</label>
          <input type="date"
          className="form-control"
          name="date"
          value={this.state.date}
          onChange={this.handleInputChange}/>
        </div>


        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
          <i className="far fa-check-square"></i>
          &nbsp; Save
        </button>

      
      </form>     
    </div>
    
    )
  }
}
