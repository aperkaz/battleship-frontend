import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin: auto 40px
`;

const ShipPlacement = ({count, size}) => (
    <Div>
        Place {count} ships of size {size}
    </Div>
);

export default ShipPlacement;