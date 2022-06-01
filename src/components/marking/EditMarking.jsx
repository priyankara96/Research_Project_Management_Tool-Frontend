import React, { Component } from 'react';
import axios from 'axios';
import markingedit from '../../images/markingedit.png'
import './Marking.css'
import swal from "sweetalert";


export default class EditMarkingPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupID: "",
            topic: "",
            criteria: "",
            Student1: "",
            Student2: "",
            Student3: "",
            Student4: "",
            Mark1: "",
            Mark2: "",
            Mark3: "",
            Mark4: "",
    
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
    
        const {  groupID,
            topic,
            criteria,
            Student1,
            Student2,
            Student3,
            Student4,
            Mark1,
            Mark2,
            Mark3,
            Mark4 } = this.state;
    
        const data = {
          groupID: groupID,
          topic: topic,
          criteria: criteria,
          Student1: Student1,
          Student2: Student2,
          Student3: Student3,
          Student4: Student4,
          Mark1: Mark1,
          Mark2: Mark2,
          Mark3: Mark3,
          Mark4: Mark4,
    
        }
    
        console.log(data)
    
        axios.put(`http://localhost:8000/marking/update/${id}`, data).then((res) => {
          if (res.data.success) {
            swal("Update Successful", "Update is recorder", "success");
            
            this.setState(
              {
                groupID: "",
                topic: "",
                criteria: "",
                Student1: "",
                Student2: "",
                Student3: "",
                Student4: "",
                Mark1: "",
                Mark2: "",
                Mark3: "",
                Mark4: "",
    
    
    
              }
            )
          }
        })
      }
    
      componentDidMount() {
    
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8000/marking/${id}`).then((res) => {
    
          if (res.data.success) {
            this.setState({
  
              groupID: res.data.post.groupID,
              topic: res.data.post.topic,
              criteria: res.data.post.criteria,
              Student1: res.data.post.Student1,
              Student2: res.data.post.Student2,
              Student3: res.data.post.Student3,
              Student4: res.data.post.Student4,
              Mark1: res.data.post.Mark1,
              Mark2: res.data.post.Mark2,
              Mark3: res.data.post.Mark3,
              Mark4: res.data.post.Mark4
    
            });
    
            console.log(this.state.post);
          }
        })
    
      }
 
    render() {
    return (
   
      <div className='container'>
      <h1 className="text-center">Edit Making</h1>
    
      <button  className="btn btn-success btnback">
          <i class="material-icons">navigate_before</i>
          <a href="/marking"style={{ textDecoration: 'none', color: 'white' }}>
              Back
              </a></button>
       
      
      
              <div className="row">
          <div className="col-3">
          <br/>
            <br/>
            <img src={markingedit} style={{ width: "500px", borderRadius:'1000px' }} />
          </div>
          <div className="col-9">
            <div className="align">
              <div className="card1 card" style={{ width: "600px" }}>
                <form className="row g-3 needs-validation form1" noValidate>
                  <div class="card-body">
                    <div
                      className="form-group"
                      style={{ marginBottom: "15px" }}
                    >
                      <label style={{ marginBottom: "5px" }}>Group ID: </label>
                      <input
                        type="text"
                        className="form-control"
                        name="groupID"
                        placeholder="Enter GroupID"
                        value={this.state.groupID}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <div
                      className="form-group"
                      style={{ marginBottom: "15px" }}
                    >
                      <label style={{ marginBottom: "5px" }}>Topic: </label>
                      <input
                        type="text"
                        className="form-control"
                        name="topic"
                        placeholder="Enter Description "
                        value={this.state.topic}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <div
                      className="form-group"
                      style={{ marginBottom: "15px" }}
                    >
                      <label style={{ marginBottom: "5px" }}>Criteria: </label>
                      <input
                        type="text"
                        className="form-control"
                        name="criteria"
                        placeholder="Other "
                        value={this.state.criteria}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputEmail4">Student 1</label>
                        <input
                          type="text"
                          class="form-control"
                          name="Student1"
                          placeholder="IT number"
                          value={this.state.Student1}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4">Marks </label>
                        <input
                          type="text"
                          class="form-control"
                          name="Mark1"
                          placeholder="Marks"
                          value={this.state.Mark1}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputEmail4">Student 2</label>
                        <input
                          type="text"
                          class="form-control"
                          name="Student2"
                          placeholder="IT number"
                          value={this.state.Student2}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4">Marks </label>
                        <input
                          type="text"
                          class="form-control"
                          name="Mark2"
                          placeholder="Marks"
                          value={this.state.Mark2}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputEmail4">Student 3</label>
                        <input
                          type="text"
                          class="form-control"
                          name="Student3"
                          placeholder="IT number"
                          value={this.state.Student3}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4">Marks</label>
                        <input
                          type="text"
                          class="form-control"
                          name="Mark3"
                          placeholder="Marks"
                          value={this.state.Mark3}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputEmail4">Student 4</label>
                        <input
                          type="text"
                          class="form-control"
                          name="Student4"
                          placeholder="IT number"
                          value={this.state.Student4}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4">Marks</label>
                        <input
                          type="text"
                          class="form-control"
                          name="Mark4"
                          placeholder="Marks"
                          value={this.state.Mark4}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <br />

                    <br />
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
                </form>
                </div>
         
          </div>
          </div>
  </div>
  </div>
    )
  }
}
