import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import styles from '../css/swiper.css';


class Swiper extends Component {

  render() {
  const { data } = this.props;
  let reactSwipeEl;
    return (
      <div className = 'carousel-wrapper'>
        <ReactSwipe
          className = 'carousel'
          swipeOptions = {{ continuous: false }}
          ref = { el => (reactSwipeEl = el) }
          > 
          { data.map((each, index) =>
            <div key = { index } className = 'swipe-images'> 
              <img src = { each }/> 
            </div>) }
        </ReactSwipe>
      </div>
    )
  }
}

export default Swiper;
