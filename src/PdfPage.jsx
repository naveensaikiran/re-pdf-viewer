import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';

export default class PdfPage extends Component {

  static propTypes = {
    page: PropTypes.number,
    scale: PropTypes.number,
    rotate: PropTypes.number,
    className: PropTypes.string,
    pdf: PropTypes.object,
    setPage: PropTypes.func,
  };

  componentDidMount() {
    this.props.pdf.getPage(this.props.page).then(this.renderPage);
  }
  componentDidUpdate() {
    this.props.pdf.getPage(this.props.page).then(this.renderPage);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.scale === nextProps.scale) { return false; }
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    return true;
  }

  renderPage = (pdfPage) => {
    if (pdfPage) {
      const canvasContext = this.canvas.getContext('2d');
      const { scale, rotate } = this.props;
      const viewport = pdfPage.getViewport(scale, rotate);
      this.canvas.height = viewport.height;
      this.canvas.width = viewport.width;
      pdfPage.render({ canvasContext, viewport });
    }
  }

  render() {
    return (
      <InView
        as="div" onChange={(inView) => {
          if (inView === true) { this.props.setPage(this.props.page); }
        }} className={this.props.className}
      >
        <canvas ref={(canvas) => { this.canvas = canvas; }} />
      </InView>
    );
  }

}
