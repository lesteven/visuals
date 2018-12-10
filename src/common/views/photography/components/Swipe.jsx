import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from '../css/swiper.css';

class Swipe extends Component {

  render() {
  const { data } = this.props;
    return (
      <Carousel useKeyboardArrows = { true } emulateTouch = { true }>
        { data.map((each, index) =>
          <div key = { index } id = 'swipe-images'> 
            <img src = { each }/> 
          </div>) }
      </Carousel>

    )
  }
}

export default Swipe;


