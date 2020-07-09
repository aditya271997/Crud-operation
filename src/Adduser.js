import React from 'react';
import './App.css';
import axios from 'axios';
import './Style.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Button , Form, Card} from 'react-bootstrap'
class Adduser extends React.Component{
constructor(props)
 {
   super(props);
   this.state={
        id:null,
        email:null,
        username:null,
        phoneno:null,
        city:null,
        address:null,
              }
    }
    componentDidMount(){
        const { data } = this.props.location
        if(data){
        this.setState({
            id: data.id,
            email: data.email,
            username: data.username,
            phoneno: data.phoneno,
            city: data.city,
            address: data.address
         })
        }
    }
    
    insert = e =>
    {
    	e.preventDefault()
    	console.log(this.state)
    	const data = this.state;
    	axios({
    	   url:'http://localhost:4000/Adduser',
    	   method:'POST',
    	   data
        }).then((result) =>{
            alert("Created successfully")
        })
        
    }

    update = (e,id) =>
    {
    	e.preventDefault()
    	const data = this.state;
    	data.id = id
    	axios({
    	   url:'http://localhost:4000/updateUser',
    	   method:'POST',
    	   data
        }).then((result) =>{
            alert("updated successfully")
        })
    }
render() {
  return (
   <div>
    <div className="App">
      <div  className="main_div container mt-5">
    	<Card className="center_div">
    	<br/>
    	<h1 className="Title">Add User</h1>
        <div className="container">   	
        <Form method="post">
             <Form.Group controlId="formBasicEmail">
             <Form.Label className="label_text">Email address</Form.Label>
             <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={(event)=>{this.setState({email: event.target.value})}}/>
             </Form.Group>
              
             <Form.Group controlId="formBasicText">
             <Form.Label className="label_text">User Name</Form.Label>
             <Form.Control type="text" placeholder="Enter text" value={this.state.username} onChange={(event)=>{this.setState({username: event.target.value})}}/>
             </Form.Group>
              
             <Form.Group controlId="formBasicText">
             <Form.Label className="label_text">Phone No</Form.Label>
             <Form.Control type="text" placeholder="Enter Phone Number" value={this.state.phoneno} onChange={(event)=>{this.setState({phoneno: event.target.value})}} />
             </Form.Group>
             <Form.Group controlId="formBasicText">
             <Form.Label className="label_text">City</Form.Label>
             <Form.Control type="text" placeholder="Enter Phone Number" value={this.state.city} onChange={(event)=>{this.setState({city: event.target.value})}}/>
             </Form.Group>

             <Form.Group controlId="exampleForm.ControlTextarea1">
             <Form.Label className="label_text">Address</Form.Label>
             <Form.Control as="textarea" rows="3" value={this.state.address} onChange={(event)=>{this.setState({address: event.target.value})}} />
             </Form.Group>
             {this.props.location.data ? (
                <Button variant="info" onClick={(e)=>{this.update(e,this.state.id)}}> Update
             </Button>
             ) : (
                <Button variant="primary" onClick={(e)=>{this.insert(e)}}> Submit
             </Button>
             )} 	
       </Form>
       </div>
      </Card>
    </div>
   </div>
 </div>
)
}
}
export default Adduser;