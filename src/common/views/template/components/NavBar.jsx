import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/navbar.css';


class NavBar extends Component {
  render() {
    return (
      <nav className = 'nav-bar'>
        <Link to = '/'> Home </Link>
        <Link to = '/projects'> Projects </Link>
        <Link to = '/about'> About </Link>
      </nav>
    )
  }
}

export default NavBar;
