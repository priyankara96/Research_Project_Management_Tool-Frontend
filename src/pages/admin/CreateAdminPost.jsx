import React, { Component } from 'react';
import axios from 'axios';
import './styles1.css';
import swal from "sweetalert";

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

    if (topic == "" || body == "" || date == "" || other == "") {
      swal("Please fill the form correctly", "Form values cannot be empty", "error");
    }else{
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

  }
 
    render() {
    return (
      <div className='container'>
           <button  className="btn btn-success btnback">
          <i class="material-icons">navigate_before</i>
          <a href="/admin"style={{ textDecoration: 'none', color: 'white' }}>
              Back
              </a></button>
              <br/>
              <br/>
      <h1 className="text-center">Add a Notice</h1>
    
   
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
                    placeholder="Enter Sleep "
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
          </div>
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

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          </div>
          

       
         

    
    )
  }
}
