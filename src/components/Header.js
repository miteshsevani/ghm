import React, { Component } from 'react';
import { NavLink, HashRouter} from "react-router-dom";
import styled from 'styled-components';
import Nav from './Nav';
import Image from './Image';


const StyledHeader = styled.div`
  header {            
    background: #262626;    
    
    .header-wrapper {
      padding: 12px;
      display: flex;
      align-items: center;      
      max-width: 1000px;
      margin: 0 auto;      
      color: #fff;            
    }
    .logo {
      width: 60px;
    }
    .title {
      white-space: nowrap;
      margin-left: 12px;
      font-size: 15px;
    }
    .menu-toggle {       
      position: absolute;
      right: 8px;
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
      .menu-toggle {
        display: none;
      }
    }
  }
`;

const navItems = require('../content/nav.json');
export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {menuState: false }
  }


  menuToggle() {
    const currentState = this.state.menuState;
    this.setState({ 
      menuState: !currentState ? 'active' : false
    });
  }

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
            <Nav items={navItems} state={this.state.menuState} />
            <span className="menu-toggle" onClick={this.menuToggle.bind(this)}>            
              <Image src="img/menu.png" />
            </span>
          </div>          
        </header>
      </StyledHeader>
    );
  }
}