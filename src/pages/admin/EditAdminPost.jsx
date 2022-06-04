import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert";

export default class EditAdminPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
          topic: "",
          body: "",
          other:'',
          date: ""
    
        }
      }
    
      handleInputChange = (e) => {
        const { name, value } = e.target;
    
        this.setState({
          ...this.state,
          [name]: value
        })
    
      }
    
      onSubmit = (e) => {
    
        e.preventDefault();
      
        const id = this.props.match.params.id;
    
        const { topic, body, other, date } = this.state;
    
        const data = {
          topic: topic,
          body: body,
          other: other,
          date: date
    
        }
    
        console.log(data)
    //update method
        axios.put(`https://backend-research-tool.herokuapp.com/admin/update/${id}`, data).then((res) => {
          if (res.data.success) {
            swal("Update Successful", "Update is recorder", "success");
            
            this.setState(
              {
                topic: "",
                body: "",
                other: "",
                date: ""
    
    
              }
            )
          }
        })
      }
    
      componentDidMount() {
   //retrieve data correcsponding to id 
        const id = this.props.match.params.id;
    
        axios.get(`https://backend-research-tool.herokuapp.com/admin/${id}`).then((res) => {
    
          if (res.data.success) {
            this.setState({
    
              topic: res.data.post.topic,
              body: res.data.post.body,
              other: res.data.post.other,
              date: res.data.post.date
    
            });
    
            console.log(this.state.post);
          }
        })
    
      }
 
    render() {
    return (
   
      <div className='container'>
      <h1 className="text-center">Edit a Notice</h1>
    
      <button  className="btn btn-success btnback">
          <i class="material-icons">navigate_before</i>
          <a href="/admin"style={{ textDecoration: 'none', color: 'white' }}>
              Back
              </a></button>
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
              &nbsp; Update
            </button>
          </div>
          </div>
  
    )
  }
}
