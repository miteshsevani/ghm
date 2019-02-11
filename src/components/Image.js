import React, { Component } from 'react';
import styled from 'styled-components';

const StyledImage = styled.div`
  max-width: 100%;
`;


class Image extends Component {
  render() {
    return (
      <StyledImage>
        <img className={this.props.className} src={ this.props.src } alt={ this.props.title } title={ this.props.title }/>
      </StyledImage>
    );
  }
}

export default Image;