import React, { Component, Fragment } from 'react';
import SlideShow from './components/SlideShow';
import data from './data';

class PhotographyPage extends Component {
  render() {
    return (
      <Fragment>
        <h1> Photography! </h1>
        <SlideShow data = { data }/>
      </Fragment>
    )
  }
}




export default PhotographyPage;
