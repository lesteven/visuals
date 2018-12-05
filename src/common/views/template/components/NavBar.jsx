import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/navbar.css';


class NavBar extends Component {
  render() {
    return (
      <nav className = 'nav-bar'>
        <Link to = '/'> Home </Link>
        <Link to = '/photography'> Photography </Link>
        <Link to = '/about'> About </Link>
        <Link to = '/contact'> Contact </Link>
      </nav>
    )
  }
}

export default NavBar;
