import React, { Component } from 'react';
import Styled from 'styled-components';
import ContentWrapper from './styleComponents/ContentWrapper';

const StyledIntro = Styled.div`
  text-align: center;    
  @media all and (min-width: 768px) {
    text-align: left;    
  }  
`;
export default class Intro extends Component {
  render() {
    const { data } = this.props;
    return (
      <ContentWrapper>
        <StyledIntro>
          <p>{ data.text[0] }</p>
          <p>{ data.text[1] }</p>
        </StyledIntro>
      </ContentWrapper>
    )
  }
}