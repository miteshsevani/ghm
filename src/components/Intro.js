import React, { Component } from 'react';
import Styled from 'styled-components';


const StyledIntro = Styled.div`
  width: 100%;    
`;
export default class Intro extends Component {
  render() {
    const { data } = this.props;
    return (
      <StyledIntro>
        <p>{ data.text[0] }</p>        
      </StyledIntro>
    )
  }
}