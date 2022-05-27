import React, { Component } from 'react'
import axios from 'axios'
import './adminstyle.css';

export default class GroupList extends Component {
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
            axios.get("http://localhost:8000/researchgroups").then(res =>{
              if(res.data.success){
                this.setState({
                  posts:res.data.existingPosts
                });
                console.log(this.state.posts)
              }
            });
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
          
            axios.get("http://localhost:8000/researchgroups").then(res =>{
              if(res.data.success){
          
                this.filterData(res.data.existingPosts,searchKey)
              }
            });
          }
  render() {
    return (
      <div>GroupList
           <div className='container con'>
          
          <div className='text-center'>
          <h1>Notices For All Students</h1>
          <br/>
          <br/>
          </div>
   
          <br/>
          <div className='row'>
            <div className='col-10'>
              
                  {this.state.posts.map((posts,index)=>(
                      <p key={index} >
                          <h2 className='topic'>{posts.leaderName}</h2>
                          <br/>
                    <h5>{posts.body}</h5>
                    <p className='text-right'><b>{posts.other}</b></p>
                    <p className='text-right'><b>{posts.date}</b></p></p>
  
                  ))}
  </div>
  </div>
  </div>
      </div>
    )
  }
}
