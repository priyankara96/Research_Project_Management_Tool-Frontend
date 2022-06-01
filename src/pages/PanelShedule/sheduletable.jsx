import React, { Component } from 'react';
import axios from 'axios';


class sheduletable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    //retriving all entered information 
    axios.get("http://localhost:8000/panelshedule").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    });
  }

  onDelete = (id) => {
    //implementation of method deletion by specific id
    axios.delete(`http://localhost:8000/panelshedule/delete/${id}`).then((res) => {
      alert("delete successfully");
      this.retrievePosts();
    })
  }

  //implementation of searching function, searching done by including uppercases and lowercases
  filterData(posts, searchKey) {
    const result = posts.filter((post) =>
      post.name.toLowerCase().includes(searchKey) ||
      post.date.toLowerCase().includes(searchKey) ||
      post.time.toLowerCase().includes(searchKey) ||
      post.link.toLowerCase().includes(searchKey) 
      

    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("posts").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });
  }
  render() {
    return (

      <div className="container">
      <br></br>
        <div className="col-lg-3 mt-2 mb-2">
          <input
            className="form-control"
            type="search"
            placeholder="search"
            namr="searchQuery"
            onChange={this.handleSearchArea}>

          </input>

        </div>
        <table class="table">
          <thead>
            <tr>
              {/* defining tabel headings */}
              <th scope="col">#ID</th>
              <th scope="col">Name </th>
              <th scope="col">Date</th>
              <th scope="col">Time </th>
               <th scope="col">Link  </th>
               <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
              //auto incrementing id
              this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a href={`/post/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.name}
                    </a>
                  </td>
                  <td>{posts.date}</td>
                  <td>{posts.time}</td>
                  <td>{posts.link}</td>        
                  <td>

                    {/* button for update */}
                    <a className="btn btn-warning" href={`/edit/panel/${posts._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    {/* button for deletion */}
                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                      <i className="fas fa-edit"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
          <br/>
          <br/>
          
          <button className="ntn btn-success"><a href="/staff/add" style={{ textDecoration: 'none', color: 'white' }}>Add new </a></button>
        </table>

      </div>
    )
  }
}
export default sheduletable;