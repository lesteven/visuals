import React, { Component, Fragment } from 'react';
import styles from '../css/slideshow.css';



class SlideShow extends Component {
  left = () => {
    const div = document.getElementsByClassName('slideshow')[0];
    div.scrollBy(-500, 0);
  }
  right = () => {
    const div = document.getElementsByClassName('slideshow')[0];
    div.scrollBy(500, 0);
  }
  render() {
  const { data } = this.props;
    if (data) {
      return (
        <section className = 'slideshow-wrapper'>
          <div className = 'slide-left' onClick = { this.left }>
            <div className = 'left-arrow'></div>
          </div>
          <section className = 'slideshow'>
            { data.map((each,index) =>
              <div key = { each } className = 'slide-image' 
                id = { index }>
                <img src = { each } />
              </div> )}
          </section>
          <div className = 'slide-right' onClick = { this.right }>
            <div className = 'right-arrow'></div>
          </div>
        </section>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}




export default SlideShow;
