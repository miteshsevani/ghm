import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`  
  h2 {
    color: #d27c21;  
    margin: 0 0 8px 0; 
    &.secondary {
      color: #0075BC;
      font-size: 1em;
    }   
  }
`;

export default class Title extends Component {
  render() {
    const { title, type } = this.props
    return (
      <StyledTitle>
        <h2 className={ type }>{ title }</h2>
      </StyledTitle>
    )
  }
}