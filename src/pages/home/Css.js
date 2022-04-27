import React from 'react';
import styled from 'styled-components'
import style from './../../assets/css/style.css'
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
            <br/>
          <p className={style.module}>Text</p>
        </div>
    );
};

export default Css;
