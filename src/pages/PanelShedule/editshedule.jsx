import React, { Component } from 'react';
import axios from 'axios';

export default class editshedule extends Component{

//initializing using constructor to null values
  constructor(props){
    super(props);
    this.state={
      gid:"",
      name:"",
      date:"",
      time:"",
      link:""
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

    const {gid,name,date,time,link} = this.state;

    const data ={
      gid:gid,
      name:name,
      date:date,
      time:time,
      link:link
    }

    console.log(data)

    //updating the relevant data by retrieving existing data
    axios.put(`https://backend-research-tool.herokuapp.com/panelshedule/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Post updated Successfully")
        this.setState(
          {
            gid:"",
            name:"",
            date:"",
            time:"",
            link:""
          }
        )
      }
    })
  }
  
  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`https://backend-research-tool.herokuapp.com/panelshedule/${id}`).then((res) =>{

      if(res.data.success){
        this.setState({
          gid:res.data.post.gid,
          name:res.data.post.name,
          date:res.data.post.date,
          time:res.data.post.time,
          link:res.data.post.link

        });

        console.log(this.state.post);
      }
    })

  }

  render() {
    return (
      //designing form for updating
       <div>
      <div className> <br/>
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="text-center" > <font face = "Comic sans MS" size ="6" > Edit Shedule</font> </h1> 
          <br/>
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal"></h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} >Group ID</label>
              <input type="text"
              className="form-control"
              name="gid"
              placeholder="group id"
              value={this.state.gid}
              onChange={this.handleInputChange}/>
            </div>
           
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} >Panel Member</label>
              <input type="text"
              className="form-control"
              name="name"
              placeholder="Panel Member"
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

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update
                          
              </button>
          
          
          </form>
          
           
        </div>
        </div>
        </div>
        </div>
    )
   }
}