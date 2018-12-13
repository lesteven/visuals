import React, { Component } from 'react';
import carouselStyles from "../../../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from '../css/swiper.css';

class Swipe extends Component {

  render() {
  const { data } = this.props;
    if (data) {
      return (
        <Carousel useKeyboardArrows = { true } emulateTouch = { true }>
          { data.map((each, index) =>
            <div key = { index } id = 'swipe-images'> 
              <img src = { `/${each}` }/> 
            </div>) }
        </Carousel>

      )
    } else {
      return <div></div>
    }
  }
}

export default Swipe;


