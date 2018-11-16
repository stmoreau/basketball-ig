import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png';

const Header = () => (
  <nav>
    <div className="nav-wrapper container">
      <Link to='/' className="brand-logo left"><img style={{width: '70px'}} src={logo} alt="logo"/></Link>
      <ul className="right">
        <li><Link to='/'>Home</Link></li>
      </ul>
    </div>
  </nav>
    
)

export default Header
