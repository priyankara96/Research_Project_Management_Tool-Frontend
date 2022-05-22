import React, { Component } from 'react';
import axios from 'axios';


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
    
        axios.put(`http://localhost:8000/admin/update/${id}`, data).then((res) => {
          if (res.data.success) {
            alert("Post updated Successfully")
            
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
    
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8000/admin/${id}`).then((res) => {
    
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
   
        <div>
     
         
        <div className="card"
          style={{ width: "80%" }}
        // style={{marginRight:"5%"}}
        >
          <div className="cardedit">
            <div className="col-md-8 mt-4 mx-auto">
              <h1 className="h3 mb-3 font-weight-normal adminletter text-center"> Edit Form </h1>
              <form className="needs-validation" >
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }} >Topic: </label>
                  <input type="text"
                    className="form-control"
                    name="topic"
                    placeholder="Enter Topic"
                    value={this.state.topic}
                    onChange={this.handleInputChange} />
                </div>


                <label style={{ marginBottom: '5px' }} >Desciption: </label>
                <div class="row">
                  <div class="col">
                    <input type="text"
                      className="form-control"
                      name="body"
                      placeholder="Description"
                      value={this.state.body}
                      onChange={this.handleInputChange} />
                  </div>
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

                <label style={{ marginBottom: '5px' }} >Date: </label>
                <div class="row">
                  <div class="col">
                    <input type="date"
                      className="form-control"
                      name="date"
                      placeholder="parent type"
                      value={this.state.date}
                      onChange={this.handleInputChange} />
                  </div>
                </div>

             
              <br />
              <br />
                <div className="text-center">
                <button className="btn btn-primary" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                  <i className="far fa-check-square"></i>
                  &nbsp; Update
                </button>
                </div>
                </form>
                <br />
                <br />
             
            </div>
          </div>
        </div>
        
      
      
    </div>
  
    )
  }
}
