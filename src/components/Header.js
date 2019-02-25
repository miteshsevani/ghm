import React, { Component } from 'react';
import { NavLink, HashRouter} from "react-router-dom";
import styled from 'styled-components';
import Nav from './Nav';
import Image from './Image';


const StyledHeader = styled.div`
  header {        
    padding: 12px 0;
    .header-wrapper {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 16px;
      background: #262626;    
      color: #fff;      
    }
    .logo {
      width: 100px;      
    }
    .title {
      white-space: nowrap;
      margin-left: 16px;
    }
  }
`;

const navItems = require('../content/nav.json');
export default class Header extends Component {
  render() {
    const { data } = this.props;
    return (
      <StyledHeader>
        <header>            
          <div className="header-wrapper">
            <HashRouter>
              <NavLink to="/">
                <Image className="logo" src='img/logo.png' />          
              </NavLink>
            </HashRouter>
            <div className="title">
              <div>{data[0].title[0]}</div>
              <div>{data[0].title[1]}</div>
            </div>
            <Nav items={navItems} />
          </div>          
        </header>
      </StyledHeader>
    );
  }
}