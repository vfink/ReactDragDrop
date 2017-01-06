import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import { observe } from './Game'

const rootEl = document.getElementById('root');
observe(knightPosition =>ReactDOM.render(
    <Board knightPosition={knightPosition} h={7} w={5} />,
    rootEl
    )
);

