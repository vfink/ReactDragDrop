import React, { Component, PropTypes } from 'react';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

class Knight extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
        <div style={{
            opacity: isDragging ? 0.5 : 1,
            backgroundColor: 'white',
            cursor: 'move',
            height: '100%',
            width: '100%'
        }}>
            {this.props.children}
        </div>
    );
  }
}
const knightSource = {
        beginDrag(props) {
        return {};
    }
};
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
  }
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);