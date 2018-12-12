import React, { Component } from 'react';
import Swipe from '../components/Swipe';
import data from '../data';

let currentData = null;

class SwipeContainer extends Component {
/*
  static fetchData({ store, params }, url) {
    console.log('static fetched data!');
    console.log('params', params);
    console.log('url', url);
    currentData = data[params.slide];
    console.log('static current', currentData);
  }
*/
  render() {
  const { data } = this.props;
  console.log('data in swipe container ', data);
    return (
      <>
        <Swipe data = { data } />
      </>
    )
  }
}




export default SwipeContainer;
