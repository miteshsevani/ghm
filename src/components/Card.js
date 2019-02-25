import React, { Component } from 'react';
import Styled from 'styled-components';
import Title from './Title';

const StyledCard = Styled.div`
  width: 100%;
  margin: 16px 0;
  @media (min-width: 700px) {
    width: 48%;    
  }
`;
export default class Card extends Component {
  render() {
    const { data } = this.props;
    return(
      <StyledCard>
        <Title title={ data.title } />
        <p>{ data.text[0] }</p>        
      </StyledCard>
    )
  }
}