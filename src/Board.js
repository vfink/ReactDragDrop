import React, { Component, PropTypes } from 'react';
import Card from './Card';
import Square from './Square';
import {moveCard} from './Game'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare'
import {makeCard} from './Game'


/*
export var BoardCreater = (wGiven, hGiven) => {

    constructor(props){
        super(props);
    };

    render() {
            <Board cardPosition={cardPosition} h={hGiven} w={wGiven} />,
    };

}
*/

class Board extends Component {

    renderSquare(a) {
    const x = a%this.props.w;
    const y = Math.floor(a/this.props.w);
    //for (let j = 0; j<this.props.cardPosition.length; j++){
    //    if (this.props.cardPosition[j] == [x,y]){
    //        var id = j;
    //        break;}}
    return (
        <div key={a}
            style={{ width: (100/this.props.w).toString() + '%', height: (100/this.props.h).toString() + '%' }}>
                <BoardSquare x={x} y={y}>
                    {this.renderCard(x, y)}
                </BoardSquare>
    </div>
    )

    }

    renderCard(x,y){
        for(let n = 0; n<this.props.cardPosition.length;n++) {
            const [cardX, cardY] = this.props.cardPosition[n];
            if (x === cardX && y === cardY) {
                return <Card id = {n} />;
            }
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
            <button onClick = {makeCard}> New Card</button>
        </div>
    );
    }
}

Board.propTypes = {
    w: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired,
    cardPosition: PropTypes.arrayOf(
        PropTypes.array.isRequired
    ).isRequired


};

export default DragDropContext(HTML5Backend)(Board);
