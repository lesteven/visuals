import React, { Component } from 'react';
import { connect } from 'react-redux';
import headerData from './headerData';
import SlideNav from './components/SlideNav';
import Swipe from './components/Swipe';
import { updateCurrent } from '../../redux/slideModule/slideModule';


class PhotographyPage extends Component {
  static fetchData({ store, params }, url) {
    return store.dispatch(updateCurrent(params));
  }
  componentDidUpdate(prevProps) {
    const { location, updateCurrent } = this.props;
    const { pathname } = location;
    const split = pathname.split('/');
    const newUrl = split.length > 2;
    if (prevProps.location != location && newUrl) {
      const data = {
        current: split[2],
      }
      updateCurrent(data);
    }
  }
  render() {
    const prefix = '/photography';
    const { slide } = this.props;
    const data = slide[slide.current];
    return (
      <>
        <SlideNav data = { headerData } prefix = { prefix }/>
        <Swipe data = { data } />
      </>
    )
  }
}

const mapState = ({ slide }) => ({
  slide,
});

const mapDispatch = {
  updateCurrent,
}

export default connect(mapState, mapDispatch)(PhotographyPage);
