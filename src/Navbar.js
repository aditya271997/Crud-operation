import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './Style.css'
import Adduser from './Adduser';
import Dashboard from './Dashboard';
export default class Navbar extends React.Component{
	render()
	{
	   return(
       <div>
         <Router>
         <div class="overlay">
		    <nav class="navbar">
		    	<h3>Crud Operations</h3>
			<ul>
				<Link to="/" className="a">Add User</Link>
			    <Link to="/dashboard" className=" a">Dashborad</Link>
			</ul>
			</nav>
		</div>
		<Route exact path="/" component={Adduser} /> 
		<Route exact path="/Dashboard" component={Dashboard} /> 
		<Route exact path="/Adduser" component={Adduser} /> 

	</Router>
	   
      </div>
	 )
}
}
