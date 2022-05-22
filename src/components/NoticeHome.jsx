import React, { Component } from 'react'
import axios from 'axios'
import './adminstyle.css';



export default class NoticeHome extends Component {
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
        <div className='container con'>
          
        <div className='text-center'>
        <h1>Notices For All Students</h1>
        <br/>
        <br/>
        </div>
        <div className='row'>
          <div className='col-10'>
            
                {this.state.posts.map((posts,index)=>(
                    <p key={index} >
                        <h2 className='topic'>{posts.topic}</h2>
                        <br/>
                  <h5>{posts.body}</h5>
                  <p className='text-right'><b>{posts.other}</b></p>
                  <p className='text-right'><b>{posts.date}</b></p></p>

                ))}
</div>
<div className='col-2'>
<div className='boxs'>
  <h4>Support & Contact</h4>
  <br/>
  <i class="material-icons">phone</i>  &nbsp; +94000000001 &nbsp;<br/>
  
  <i class="material-icons">email</i> &nbsp;support@sliit.lk &nbsp;<br/>
  
  <i class="material-icons">share</i> &nbsp;Contact FAQ &nbsp;<br/>
  
  <i class="material-icons">speaker_notes</i>&nbsp; FAQ &nbsp;
</div>
<br/>
<br/>
<div className='boxs'>
  <h4>Research Procedure</h4>
  <br/>
  <h6>1. Group Rgistration</h6>
  <h6>2. Request for Supervisor and Co-supervisor</h6>
  <h6>3. Register Topic</h6>
  <h6>4. Get frequent feedback</h6>
  <h6>5. Viva Presentation</h6>
  <h6>6. Get Marking</h6>
</div>
</div>
        </div>
      </div>
    )
  }
}
