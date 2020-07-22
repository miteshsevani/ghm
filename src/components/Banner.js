import React, { Component } from 'react';
import Styled from 'styled-components';
import ContentWrapper from './styleComponents/ContentWrapper';

const StyledBanner = Styled.div`
  background-image: url('img/mandir.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
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
