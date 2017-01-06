import React, { Component, PropTypes } from 'react';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';
import {set_ID} from './Game'

class Card extends Component {
  render() {
    const { connectDragSource, isDragging, id } = this.props;
    //console.log(id , cardSource)
    return connectDragSource(
        <div style={{
            opacity: isDragging ? 0.5 : 1,
            backgroundColor: 'white',
            cursor: 'move',
            height: '100%',
            width: '100%'
        }}>
            <h2 style={{
                margin: "0px",
                color:  '#553282'
            }}>Demographics</h2>
            <hr/>
            <p><strong>Name </strong>Billy</p>
            <p><strong>Gender </strong>Shemale</p>
        </div>

    );
  }
}
const cardSource = {
        beginDrag(props) {
        //console.log(props.id)
        set_ID(props.id)
        const item = {id:props.id};
        return item ;
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
  }
}

Card.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired

};

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);