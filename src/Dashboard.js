import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Table, Button} from 'react-bootstrap';
import './Style.css';
import Adduser from './Adduser';

export default class Dashboard extends React.Component{
constructor() {
    super();
    this.state = {
    list:''
    }
  }
   componentDidMount() {
    fetch('http://localhost:4000/Displayuser').then((response) => {
    response.json().then((result) => {
    console.log(result)
    this.setState({ list : result.data })
    })
    })
  }

delete = (e,id) =>
    {
      e.preventDefault()
      console.log(id)
      const data = {
         "Id": id 
      }
      axios({
         url:'http://localhost:4000/delete',
         method:'DELETE',
         data
      }).then((result) =>{
            alert("deleted successfully")
        })
        
    }
 render()
 {
  return(
    <div>
        <h1 className="header text-center mt-5 mb-5">Fetch API data</h1>
        {
          this.state.list ?
            <div>
              <Table  responsive hover>
                <thead className="bg-primary text-white">
                  <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Address</th>
                    <th>Update</th>
                    <th>Delete</th>
                   </tr>
                </thead>
                
                <tbody>
                {
                  this.state.list.map((item, i) =>
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>{item.phoneno}</td>
                    <td>{item.city}</td>
                    <td>{item.address}</td>
                    <td><Button className="btn btn-warning a" ><Link to={{pathname:'/Adduser',data: item}} className="a"> Update </Link></Button></td>
                    <td><Button className="btn btn-danger" onClick={(e)=>{this.delete(e,item.id)}}>Delete</Button></td>
                    </tr>)
                }
                 </tbody>
              </Table>
            </div>
            : <p>please wait</p>
        }
      </div>

)
}
}