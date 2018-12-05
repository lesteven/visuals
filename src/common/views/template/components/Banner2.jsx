import React, { Component } from 'react';
import styles from '../css/banner2.css';

class Banner extends Component {

  render() {
    return (
      <div className = 'banner2 max-width'>
        <div className = 'banner-info'>
          <h1> Steven Le </h1>
          <h3> Entry Level Developer </h3>
          <div className = 'ext-links'>
            <a href = 'https://www.github.com/lesteven'>
              <img src = 'github.svg' />
            </a>
            <a href = 'https://www.linkedin.com/in/stevennle'>
              <img src = 'linkedin.svg' />
            </a>
          </div>
          <h4> Le_Steven@outlook.com </h4>
        </div>
        <div className = 'banner-image'>
        </div>
      </div>
    )
  }  
}

export default Banner;
