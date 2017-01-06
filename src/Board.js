import React, { Component, PropTypes } from 'react';
import Knight from './Knight';
import Square from './Square';
import {moveKnight} from './Game'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare'


/*
export var BoardCreater = (wGiven, hGiven) => {

    constructor(props){
        super(props);
    };

    render() {
            <Board knightPosition={knightPosition} h={hGiven} w={wGiven} />,
    };

}
*/

class Board extends Component {

    renderSquare(a) {
    const x = a%this.props.w;
    const y = Math.floor(a/this.props.w);
    return (
        <div key={a}
            style={{ width: (100/this.props.w).toString() + '%', height: (100/this.props.h).toString() + '%' }}>
                <BoardSquare x={x} y={y}>
                    {this.renderPiece(x, y)}
                </BoardSquare>
    </div>
    )

    }

    renderPiece(x,y){
        const [knightX,knightY] = this.props.knightPosition;
        if (x === knightX && y === knightY) {
            return <Knight /> ;
        }
    }
    render() {
        const squares = [];
        for(let i = 0; i<(this.props.h * this.props.w);i++){
                squares.push(this.renderSquare(i));
        }
        return (<div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            {squares}
        </div>
    );
    }
}

Board.propTypes = {
    w: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired,
    knightPosition: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired

};

export default DragDropContext(HTML5Backend)(Board);
