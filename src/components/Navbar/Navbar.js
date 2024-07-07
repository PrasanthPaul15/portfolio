import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar=()=>{
    return(
        <nav className='nav-container'>
            <div>
                <h1 className='logo'>P.</h1>
            </div>
            <ul className='nav-items'>
              <Link className="link-item" to="/resume"> <li className='nav-item'>Resume</li></Link> 
              <Link className="link-item" to="/projects"><li className='nav-item'>Projects</li></Link>
              <Link className="link-item" to="/about"><li className='nav-item'>About</li></Link>
              <li className='nav-item'><a className="hyper-link" href="https://github.com/PrasanthPaul15">Github</a></li>
              <li className='nav-item'><a className="hyper-link" href="https://www.linkedin.com/in/prasanth-paul/">LinkedIn</a></li>
              <Link className="link-item" to="/contact"><li className='nav-item'>Contact</li></Link>
            </ul>
        </nav>
    )
}


export default Navbar