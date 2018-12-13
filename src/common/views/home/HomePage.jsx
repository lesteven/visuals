import React, { Component, Fragment } from 'react';
import style from './css/home.css';
import data from './data';

class HomePage extends Component {
  render() {
    return (
      <div className = 'home'>
        { data.map((each,index) => 
            <div key = { index }>
              <img src = { each } />
            </div> )}
      </div>
    )
  }
}




export default HomePage;
