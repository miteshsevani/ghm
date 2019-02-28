import React, { Component } from 'react';
import Styled from 'styled-components';
import Title from './Title';

const StyledCard = Styled.div`
  width: 100%;
  margin-bottom: 16px;
  @media (min-width: 700px) {
    &.full {
      width: 100%;
    }
    &.half {
      width: 48%;
    }
  }
`;
export default class Card extends Component {
  render() {
    const { data, type } = this.props;
    return (
      <StyledCard className= { type }>
        { data.title === 'About' ? '' : <Title title={ data.title } /> }
        <p>{ data.text[0] }</p>        
        { data.title === 'Services' ? <p><a href="#/services">Find out more</a></p> : '' }
      </StyledCard>
    )
  }
}