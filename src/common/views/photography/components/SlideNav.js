import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from '../css/slidenav.css';


class SlideNav extends Component {
  render() {
    const { data, prefix } = this.props;
    return (
      <nav className = 'slide-nav'>
      { data.map(each =>
          <Link to = { `${prefix}/${each.toLowerCase()}` } 
            key = { each }> 
            { each } 
          </Link> )} 
      </nav>
    )
  }
}




export default SlideNav;
