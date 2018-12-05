import React, { Component } from 'react';
import styles from '../css/banner.css';

class Banner extends Component {

  render() {
    return (
      <div className = 'banner'>
        <div className = 'profile'>
          <img src = 'profile.jpg' />
        </div>
        <div className = 'name'>
          <h1> Steven Le </h1>
          <h3> Entry Level Developer </h3>
        </div>
        <div className = 'external-links'>
          <a href = 'https://www.github.com/lesteven'>
            <img src = 'github.svg' />
          </a>
          <a href = 'https://www.linkedin.com/in/stevennle'>
            <img src = 'linkedin.svg' />
          </a>
        </div>
      </div>
    )
  }  
}

export default Banner;
