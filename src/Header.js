import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png';

const Header = () => (
  <nav>
    <div className="nav-wrapper">
      <Link to='/' className="brand-logo center"><img style={{width: '70px'}} src={logo} alt="logo"/></Link>
      <ul className="left">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/info'>People's info</Link></li>
      </ul>
    </div>
  </nav>
    
)

export default Header
