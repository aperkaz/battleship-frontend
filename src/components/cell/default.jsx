import React from 'react';
import styled from 'styled-components';

const BaseCell = styled.div`
    width: 20px;
    height: 20px;
    text-align: center;
    margin: 2px;
`;

const CoordinateCell = BaseCell.extend`
   display: table-cell;
   vertical-align: middle; 
`;

const Div = BaseCell.extend`
    background-color: lightgrey;
`;

const EmptyCell = ({row,col,callback}) => (
    <Div onClick={() => callback(row,col)} />
);

const MissCell = BaseCell.extend`   
    background-color: lightblue;
`;

const HitCell = BaseCell.extend`
    background-color: red;
`;

const BoatCell = BaseCell.extend`
    background-color: black;
`;

// -- Cell codes --
// -1 : missed
// 0 : default
// 1 : hit
// 2-5 : boat
const Cell = ({
                  code,
                  children,
                  row,
                  col,
                  callback
}) => {
    switch (code){
        case -1:
            return <MissCell/>;
        case 0:
            return <EmptyCell row={row} col={col} callback={callback} />;
        case 1:
            return <HitCell/>;
        case 2:
            return <BoatCell/>;
        case 3:
            return <BoatCell/>;
        case 4:
            return <BoatCell/>;
        case 5:
            return <BoatCell/>;
        default:
            return <CoordinateCell>{children}</CoordinateCell>;
    }
};

export default Cell;