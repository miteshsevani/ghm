import React, { Component } from 'react';
import Styled from 'styled-components';

const StyledBanner = Styled.div`
  width: 100%;
  height: 300px;  
  background-image: url('img/mandir.png');  
  background-size: cover;  
  background-position: center;
  margin-bottom: 16px;
`;
export default class Banner extends Component {
  render() {
    return(
      <StyledBanner />      
    );
  }
}