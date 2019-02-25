import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`  
  h2 {
    color: #d27c21;  
    margin: 0 0 16px 0;
    
  }
`;

export default class Title extends Component {
  render() {
    const { title } = this.props
    return (
      <StyledTitle>
        <h2>{ title }</h2>
      </StyledTitle>
    )
  }
}