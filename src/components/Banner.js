import React, { Component } from 'react';
import Styled from 'styled-components';
import ContentWrapper from './styleComponents/ContentWrapper';

const StyledBanner = Styled.div`  
  background-image: url('img/mandir.png');  
  background-size: cover;  
  background-position: center;
  width: 100%;
  height: 300px;
`;
export default class Banner extends Component {
  render() {
    return(      
      <ContentWrapper>
        <StyledBanner />
      </ContentWrapper>
    );
  }
}