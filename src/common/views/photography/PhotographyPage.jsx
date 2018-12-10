import React, { Component } from 'react';
import Swipe from './components/Swipe';
import data from './data';

class PhotographyPage extends Component {
  render() {
    return (
      <>
        <Swipe data = { data } />
      </>
    )
  }
}




export default PhotographyPage;
