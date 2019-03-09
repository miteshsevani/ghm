import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`  
  width: 100%;
  h2 {
    font-family: ${props => props.theme.fontHeaderFamily};
    color: ${props => props.theme.fontHeaderColor};
    margin: 0 0 8px 0; 
    font-weight: normal;
    letter-spacing: 0.5px;        
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