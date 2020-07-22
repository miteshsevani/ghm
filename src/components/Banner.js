import React, { Component } from 'react';
import Styled from 'styled-components';
import ContentWrapper from './styleComponents/ContentWrapper';

const StyledBanner = Styled.div`
  background-image: url('img/temple-reopening.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 1200px;
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
