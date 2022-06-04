import React, { Component } from 'react'
import axios from 'axios'
import './adminstyle.css';
import logo from '../images/logo.png'
import researchimage from '../images/researchimg.png'
import submit from '../images/submit.jpg'

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
    axios.get("https://backend-research-tool.herokuapp.com/admin").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    });
}
onDelete=(id)=>{
    axios.delete(`https://backend-research-tool.herokuapp.com/admin/delete/${id}`).then((res)=>{
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
  
    axios.get("https://backend-research-tool.herokuapp.com/admin").then(res =>{
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
 <div className='general'>
        <h4>General Notices</h4></div>
        <br/>
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

<div className='col-1'>
<div className='boxs'>
  <h4>Support & Contact</h4>
  <hr/>

  <i class="material-icons">phone</i>  &nbsp; +94000000001 &nbsp;<br/>
  
  <i class="material-icons">email</i> &nbsp;support@sliit.lk &nbsp;<br/>
  
  <i class="material-icons">share</i> &nbsp;Contact FAQ &nbsp;<br/>
  
  <i class="material-icons">speaker_notes</i>&nbsp; FAQ &nbsp;
</div>
<br/>
<br/>
<div className='boxs'>
  <h4>Research Procedure</h4>
  <hr/>

  <h6>1. Group Rgistration</h6>
  <h6>2. Request for Supervisor and Co-supervisor</h6>
  <h6>3. Register Topic</h6>
  <h6>4. Get frequent feedback</h6>
  <h6>5. Viva Presentation</h6>
  <h6>6. Get Marking</h6>
</div>
</div>
<hr/>
<div className='general'>
<h4>UseFul Links</h4></div>
        </div>
        <br/>
        <img src={logo} className='imagesicons'/> &nbsp; <h5 style={{display: 'inline-block'}}> <a href="/CreateGroup" style={{textDecoration:'none', color:'info'}}>Group Registration</a></h5> <br/>
       <img src={researchimage} className='imagesicons'/> &nbsp; <h5 style={{display: 'inline-block'}}> <a href="/Video" style={{textDecoration:'none', color:'info'}}>Research Guide Line video</a></h5>  <br/>
       <img src={logo} className='imagesicons'/> &nbsp; <h5 style={{display: 'inline-block'}}> <a href="/RegisterTopic" style={{textDecoration:'none', color:'info'}}>Topic Registration</a></h5><br/>
      <img src={researchimage} className='imagesicons'/> &nbsp; <h5 style={{display: 'inline-block'}}> <a href="/chat" style={{textDecoration:'none', color:'info'}}>FAQ</a></h5>  
  <hr/>
   
        <div className='general'>
        <h4>Downloadable Documentation</h4> </div>
        <br/>
        <img src={researchimage} className='imagesicons'/> &nbsp;<h5 style={{display: 'inline-block'}}> <a href="/schema" style={{textDecoration:'none', color:'black'}}>Marking Scheme</a></h5>  <br/>
        <img src={logo} className='imagesicons'/> &nbsp; <h5 style={{display: 'inline-block'}}> <a href="/downloadshedule" style={{textDecoration:'none', color:'black'}}>Panel Allocation</a></h5>  <br/>
        <img src={logo} className='imagesicons'/> &nbsp; <h5 style={{display: 'inline-block'}}> <a href="/StudentList" style={{textDecoration:'none', color:'black'}}>Student List</a></h5>  <br/>
        <img src={logo} className='imagesicons'/> &nbsp; <h5 style={{display: 'inline-block'}}> <a href="/ViewStudentMarkList" style={{textDecoration:'none', color:'black'}}>Student Marks</a></h5>  <br/>
        <img src={logo} className='imagesicons'/> &nbsp; <h5 style={{display: 'inline-block'}}> <a href="/TopicStatusList" style={{textDecoration:'none', color:'black'}}>Research Topic Feedbacks</a></h5>  <br/>
        <img src={researchimage} className='imagesicons'/> &nbsp;<h5 style={{display: 'inline-block'}}> <a href="/AdminUploads" style={{textDecoration:'none', color:'black'}}>Other Resources and Templates</a></h5>  <br/>
        <hr/>
  
   
  <div className='general'>
  <h4>Submissions</h4> </div>
  <br/>
  
  <img src={submit} className='imagesicons'/> &nbsp;<h5 style={{display: 'inline-block'}}> <a href="/Submissions" style={{textDecoration:'none', color:'black'}}>Click this link to add Your submissions</a></h5>  <br/>
<hr/>
<br/>
<br/>
<br/>
      </div>
    )
  }
}

