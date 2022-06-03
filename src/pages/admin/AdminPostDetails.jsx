import React, { Component } from 'react'
import axios from 'axios';

export default class AdminPostDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      post:[]
    };
  }
  componentDidMount(){
    const id =this.props.match.params.id;

    axios.get(`https://backend-research-tool.herokuapp.com/admin/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }
 


  render() {
    const { topic, body, date, other} = this.state.post;
    return (
      <div> 
        <button  className="btn btn-success btnback">
          <i class="material-icons">navigate_before</i>
          <a href="/admin"style={{ textDecoration: 'none', color: 'white' }}>
              Back
              </a></button>
<br/>
<br/>
          <div className='text-center'>
            
            <h1 >{topic}</h1>
            </div>
            
            <hr/>
            <br/>
              <br/>
           <div className='container'>
            <dl className="row">
             
              <dt className="col-sm-3">Description</dt>
              <dd className="col-sm-9" >{body}</dd>
              <dt className="col-sm-3">Date</dt>
              <dd className="col-sm-9">{date}</dd>
              <dt className="col-sm-3">Other</dt>
              <dd className="col-sm-9">{other}</dd>
             
              
            </dl>
            </div>
           
       
      
    
  
  </div>
    )
  }
}
