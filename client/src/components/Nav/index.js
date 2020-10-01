import React from 'react';
import './style.css';
// import Navbar from 'react-bootstrap/Navbar';
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-nav" href="/">Login</a>
      <a className="navbar-nav" href="/signup">Sign up</a>
      <a className="navbar-nav" href="/browsing">Browsing</a>
      <a className="navbar-nav" href="/profile">Profile</a>
    </nav>
  )
}
export default Nav;