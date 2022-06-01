import React, { Component } from 'react'
import axios from 'axios'
import './Marking.css'

export default class MarkingHome extends Component {
constructor(props){
super(props);
      
this.state={
    posts:[]
    };
}
componentDidMount(){
    this.retrievePosts();
}

retrievePosts(){
    axios.get("http://localhost:8000/marking").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    });
}
onDelete=(id)=>{
    axios.delete(`http://localhost:8000/marking/delete/${id}`).then((res)=>{
      alert("Deleted Successful");
      this.retrievePosts();
    })
  }

  filterData(posts,searchKey){
    const result =posts.filter((post)=>
    post.groupID.toLowerCase().includes(searchKey)||
    post.topic.toLowerCase().includes(searchKey)||
    post.Student1.toLowerCase().includes(searchKey)||
    post.Student2.toLowerCase().includes(searchKey)||
    post.Student3.toLowerCase().includes(searchKey)||
    post.Student4.toLowerCase().includes(searchKey)
    
    )
    this.setState({posts:result})
  }
  
  handleSearchArea =(e) =>{
    const searchKey=e.currentTarget.value;
  
    axios.get("http://localhost:8000/marking").then(res =>{
      if(res.data.success){
  
        this.filterData(res.data.existingPosts,searchKey)
      }
    });
  }
  render() {
    return (
        <div className=''>
         
              <br/>
              <br/>
        <div className='text-center'>
        <h1>Marking Schema</h1>
        </div>
        <button  className="btn btn-success btnback">
          <i class="material-icons">navigate_before</i>
          <a href="/AdminDashboard"style={{ textDecoration: 'none', color: 'white' }}>
              Back
              </a></button>
              <div className="col-md-6 mb-4">
        <form class="form-inline">
        <i class="fas fa-search" aria-hidden="true"></i>
          <input
          className="form-control form-control-sm ml-3 w-75"
          type="search"
          placeholder="search"
          name="searchQuery"
          onChange={this.handleSearchArea}>
          </input>
          </form>
        </div>
        
        <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Group ID</th>
            <th scope="col">Topic</th>
            <th scope="col">Criteria</th>
            <th scope="col">Student IT NO</th>          
            <th scope="col">Mark Obtained </th>
            <th scope="col">Actions </th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.posts.map((posts,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                  <a href={`marking/${posts._id}`} style={{textDecoration:'none'}}>
                  {posts.groupID}
                </a>
                  </td>
                
                <td>{posts.topic}</td>
                <td>{posts.criteria}</td>
                <td>{posts.Student1}<br/>{posts.Student2}<br/>{posts.Student3}<br/>{posts.Student4}</td>
                <td>{posts.Mark1}<br/>{posts.Mark2}<br/>{posts.Mark3}<br/>{posts.Mark4}</td>
                
                <td>
                  <a className="btn btn-warning" href={`marking/edit/${posts._id}`}>
                  <i class="material-icons">edit</i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}>
                  <i className="material-icons">delete_forever</i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            )) }
        </tbody>
        <br/>
        <br/>
        <div className="text-center" style={{marginLeft:'20px'}}>
        <button className="btn btn-success"><a href="/marking/add" style={{textDecoration:'none',color:'white'}}>Add new Marking</a></button>
        </div>
      </table>
      </div>
    )
  }
}
