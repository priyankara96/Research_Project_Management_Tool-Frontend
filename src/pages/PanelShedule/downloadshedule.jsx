import React, { Component } from 'react'
import axios from 'axios'
import './shedule.css'
import jsPdf from 'jspdf';
import 'jspdf-autotable';

export default class downloadshedule extends Component {
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
    axios.get("https://backend-research-tool.herokuapp.com/panelshedule").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    });
}
onDelete=(id)=>{
    axios.delete(`https://backend-research-tool.herokuapp.com/panelshedule/delete/${id}`).then((res)=>{
      alert("Deleted Successful");
      this.retrievePosts();
    })
  }

  filterData(posts,searchKey){
    const result =posts.filter((post)=>
     post.gid.toLowerCase().includes(searchKey) ||
      post.name.toLowerCase().includes(searchKey) ||
      post.date.toLowerCase().includes(searchKey) ||
      post.time.toLowerCase().includes(searchKey) ||
      post.link.toLowerCase().includes(searchKey) 
    
    )
    this.setState({posts:result})
  }
  
  handleSearchArea =(e) =>{
    const searchKey=e.currentTarget.value;
  
    axios.get("https://backend-research-tool.herokuapp.com/marking").then(res =>{
      if(res.data.success){
  
        this.filterData(res.data.existingPosts,searchKey)
      }
    });
  }
     //Report pdf generating
     jsPdfGenerator = () => {

        //new document in jspdf
        var doc = new jsPdf('l', 'pt', 'a3');

        doc.text(600, 20, 'Panel Allocation Listt', { align: 'center' }, ) ;
        doc.autoTable({ html: '#result-table' })

        doc.autoTable({
            columnStyles: { europe: { halign: 'center' } },
            margin: { top: 10 },
        })

        //save the pdf
        doc.save("Panel Allocation List.pdf");
    }
  render() {
    return (
        <div className=''>
         
              <br/>
              <br/>
        <div className='text-center'>
        <h1>Panel Allocation List</h1>
        </div>
        <button  className="btn btn-success btnback">
          <i class="material-icons">navigate_before</i>
          <a href="/Notice" style={{ textDecoration: 'none', color: 'white' }}>
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
        
        <table id="result-table" class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#ID</th>
               <th scope="col"> Group ID </th>
              <th scope="col">Panel Member </th>
              <th scope="col">Date</th>
              <th scope="col">Time </th>
               <th scope="col"> Group Chat Link  </th>
               
           
          </tr>
        </thead>
        <tbody>
          {
            this.state.posts.map((posts,index)=>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                  <a href={`/post/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.gid}
                    </a>
                  </td>
                  <td>{posts.name}</td>
                  <td>{posts.date}</td>
                  <td>{posts.time}</td>
                  <td>{posts.link}</td>        
                  
                
               
              </tr>
            )) }
        </tbody>
        <br/>
        <br/>
       
      </table>
      <button className=" btn btn-success" onClick={this.jsPdfGenerator}>Panel Allocation List</button>
      </div>
    )
  }
}
