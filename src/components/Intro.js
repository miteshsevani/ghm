import React, { Component } from 'react';
import Styled from 'styled-components';

const StyledIntro = Styled.div`
  text-align: center;  
  margin: 20px 0;
  @media all and (min-width: 768px) {
    text-align: left;
    margin: 40px 0;
  }  
`;
export default class Intro extends Component {
  render() {
    const { data } = this.props;
    return (
      <StyledIntro>
        <p>{ data.text[0] }</p>
        <p>{ data.text[1] }</p>
      </StyledIntro>
    )
  }
}