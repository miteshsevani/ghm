import React, { Component } from 'react';
import styled from 'styled-components';
import Image from './Image';


const StyledHeader = styled.div`
  header {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    .logo {
      width: 100px;
      margin-right: 16px;
    }  
  }
`;

export default class Header extends Component {
  render() {
    const { data } = this.props;
    return (
      <StyledHeader>
        <header>  
          <Image className="logo" src='img/logo.png' />          
          <div>
            <div>{data[0].title[0]}</div>
            <div>{data[0].title[1]}</div>
          </div>
        </header>
      </StyledHeader>
    );
  }
}