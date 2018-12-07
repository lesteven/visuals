import React, { Component, Fragment } from 'react';
import styles from '../css/slideshow.css';

class SlideShow extends Component {
  render() {
  const { data } = this.props;
    return (
      <section className = 'slideshow'>
        { data.map(each =>
          <div key = { each } className = 'slide-image'>
            <img src = { each } />
          </div> )}
      </section>
    )
  }
}




export default SlideShow;
