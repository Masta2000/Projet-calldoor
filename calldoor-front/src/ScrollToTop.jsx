import { Component } from 'react';

class ScrollToTop extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default ScrollToTop;
