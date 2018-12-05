import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar';


class Template extends Component {

  render() {
    return (
      <Fragment>
        <div className = 'max-width'>
          <NavBar />
          <div className = 'page-wrapper'>
            { this.props.children }
          </div>
        </div>
        <div className = 'bottom'></div>
      </Fragment>
    )
  }  
}

export default Template;
