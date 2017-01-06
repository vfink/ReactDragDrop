import React, { Component, PropTypes } from 'react';

export default class Square extends Component {
  render() {
      const {black} = this.props;
      const fill = black ? '#f5f5f5' : 'black';
      const stroke = black ? 'black' : 'black';
      return <div style ={{
          backgroundColor: '#f5f5f5',
          //borderColor: fill  ,
          //borderWidth: 'thin',
          //borderStyle: 'solid',
          color: stroke,
          height: '100%',
          width: '100%'

      }}> {this.props.children}</div>;
  }
}

Square.propTypes = {
  black: PropTypes.bool
};

