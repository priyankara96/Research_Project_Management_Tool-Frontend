import React, { Component } from 'react';
import axios from 'axios';

export default class edit extends Component{

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
    const id = this.props.match.params.id;

    const {name,idd,date} = this.state;

    const data ={
      name:name,
      idd:idd,
      date:date
    }

    console.log(data)

    //updating the relevant data by retrieving existing data
    axios.put(`https://backend-research-tool.herokuapp.com/staff/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Post updated Successfully")
        this.setState(
          {
            name:"",
            idd:"",
            date:""
          }
        )
      }
    })
    .then ((value) => {
    window.location= '/panel';
});

  }
  
  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`https://backend-research-tool.herokuapp.com/staff/${id}`).then((res) =>{

      if(res.data.success){
        this.setState({
         
          name:res.data.post.name,
          idd:res.data.post.idd,
          date:res.data.post.date

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
          <h1 className="text-center" > <font face = "Comic sans MS" size ="6" > Edit Staff </font> </h1> 
          <br/>
          
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal"></h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} >Name</label>
              <input type="text"
              className="form-control"
              name="name" 
              placeholder="Enter Topic"
              value={this.state.name}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>NIC</label>
              <input type="text"
              className="form-control"
              name="idd"
              placeholder="Enter Desciption"
              value={this.state.idd}
              onChange={this.handleInputChange}/>
            </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Date</label>
              <input type="date"
              className="form-control"
              name="date"
              placeholder="Enter ingredients"
              value={this.state.date}
              onChange={this.handleInputChange}/>
            </div>

            {/* <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update
                          
              </button>
          
          
          </form>
         
        </div> */}
        <div className="text-center" > 
            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update      
              </button>&nbsp;
            <a href="/panel"><button type="button" style={{marginTop:'15px'}} onClick={this.onClick} class="btn btn-warning"><i class="fa fa-close"></i>&nbsp;Cancel</button></a>
            {/* ListSupplierRegistration */}
            </div>
            <br/>
          </form>

          <br/>
          </div>
        </div>
        </div>
        </div>
    )
   }
}