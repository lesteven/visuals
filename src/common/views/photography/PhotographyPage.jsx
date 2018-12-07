import React, { Component, Fragment } from 'react';
import SlideShow from './components/SlideShow';
import data from './data';

class PhotographyPage extends Component {
  render() {
    return (
      <Fragment>
        <SlideShow data = { data }/>
      </Fragment>
    )
  }
}




export default PhotographyPage;
