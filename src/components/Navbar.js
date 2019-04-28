import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = ()=>{
	return (
			<div>
	<nav className="navbar mt-5 navbar-expand-md bg-dark navbar-dark">
  
  <h1 style = {{color: 'white'}}>Todos App</h1>
   
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

 
  <div className="collapse navbar-collapse text-center" id="collapsibleNavbar">
    <ul className="navbar-nav ">
      <li className="nav-item pl-5">
       <Link className = "nav-link h3 text-white" to = '/'>All</Link>
      </li>
      <li className="nav-item pl-5">
        <Link className = "nav-link h3 text-white" to = '/active'>Active</Link>
      </li>
      <li className="nav-item pl-5">
       <Link className = "nav-link h3 text-white" to = '/completed'>Completed</Link>
      </li> 
    </ul>
  </div> 
</nav>
			 

			</div>
		)
}
export default Navbar