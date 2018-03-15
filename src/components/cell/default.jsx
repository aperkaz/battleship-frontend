import React from 'react';
import styled from 'styled-components';

const BaseCell = styled.div`
    width: 20px;
    height: 20px;
    margin: 2px;
    text-align: center;
`;

const EmptyCell = BaseCell.extend`
    background-color: lightgrey;
`;

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
const Cell = ({ code, children }) => {
    switch (code){
        case -1:
            return <MissCell/>;
        case 0:
            return <EmptyCell/>;
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
            return <BaseCell style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                {children}
                </BaseCell>;
    }
};


export default Cell;