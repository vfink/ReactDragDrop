import React, { Component, PropTypes } from 'react';
import Square from './Square';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';
import {moveCard, set_ID} from './Game'

class BoardSquare extends Component {
  render() {
      const { x, y, connectDropTarget, isOver } = this.props;
      const black = true;

      return connectDropTarget(
          <div style = {{
              position: 'relative',
              height: '100%',
              width: '100%',
          }}>
              <Square black={black}>
                  {this.props.children}
              </Square>
              {isOver &&
                  <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        zIndex: 1,
                        opacity: 0.5,
                        backgroundColor: '#333333',

                  }} />

              }

          </div>
      );
  }
}

const squareTarget = {
    drop(props, monitor) {
        console.log(props)
        moveCard(props.x, props.y);
        set_ID(null)
    }
};

function collect(connect, monitor) {
    return {
          connectDropTarget: connect.dropTarget(),
          isOver: monitor.isOver()
    };
}


BoardSquare.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.CARD, squareTarget, collect)(BoardSquare);