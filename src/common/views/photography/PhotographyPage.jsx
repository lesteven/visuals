import React, { Component } from 'react';
import SlideShow from './components/SlideShow';
import data from './data';

class PhotographyPage extends Component {
  render() {
    return (
      <>
        <SlideShow data = { data }/>
      </>
    )
  }
}




export default PhotographyPage;
