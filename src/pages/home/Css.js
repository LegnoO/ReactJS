import React from 'react';
import styled from 'styled-components'

const Css = () => {
    const Pararaph = styled.p`
    display: inline;
    color: ${props => props.primary ? 'palevioletred' : 'gray'};
    background: ${props => props.primary ? 'gray' : 'palevioletred'};
`;

    return (
        <div>
          <Pararaph>Test</Pararaph>
            <br/>
          <Pararaph primary>Test</Pararaph>
        </div>
    );
};

export default Css;