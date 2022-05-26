import React, { Component } from 'react'
import axios from 'axios'

export default class AdminHome extends Component {
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
    axios.get("http://localhost:8000/admin").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    });
}
onDelete=(id)=>{
    axios.delete(`http://localhost:8000/admin/delete/${id}`).then((res)=>{
      alert("Deleted Successful");
      this.retrievePosts();
    })
  }

  filterData(posts,searchKey){
    const result =posts.filter((post)=>
    post.topic.toLowerCase().includes(searchKey)||
    post.description.toLowerCase().includes(searchKey)||
    post.postCategory.toLowerCase().includes(searchKey)
    
    )
    this.setState({posts:result})
  }
  
  handleSearchArea =(e) =>{
    const searchKey=e.currentTarget.value;
  
    axios.get("http://localhost:8000/admin").then(res =>{
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
        <h1>Notices</h1>
        </div>
        
        <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Topic</th>
            <th scope="col">Description</th>
            <th scope="col">Other</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.posts.map((posts,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                  <a href={`admin/${posts._id}`} style={{textDecoration:'none'}}>
                  {posts.topic}
                </a>
                  </td>
                
                <td>{posts.body}</td>
                <td>{posts.other}</td>
                <td>{posts.date}</td>
                
                <td>
                  <a className="btn btn-warning" href={`admin/edit/${posts._id}`}>
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
        <button className="btn btn-success"><a href="/admin/add" style={{textDecoration:'none',color:'white'}}>Add new Notice</a></button>
        </div>
      </table>
      </div>
    )
  }
}
