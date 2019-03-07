import React, { Component } from 'react';
import { NavLink, HashRouter} from "react-router-dom";
import styled from 'styled-components';
import Nav from './Nav';
import Image from './Image';


const StyledHeader = styled.div`
  header {                
    .header-wrapper {      
      display: flex;
      align-items: center;      
      max-width: 1000px;
      margin: 0 auto;  
      padding: 12px;    
    }
    .logo {
      width: 60px;
    }
    .title {
      white-space: nowrap;
      margin-left: 12px;
      font-size: 15px;
      line-height: normal;
    }
    
    @media all and (min-width: 768px) {
      .header-wrapper {
        padding: 16px;
      }
      .logo {
        width: 100px;
      }
      .title {        
        margin-left: 16px;
        font-size: 1em;
      }            
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