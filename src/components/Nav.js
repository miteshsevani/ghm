import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

import Image from './Image';

const StyledNav = styled.div`
  display:flex;
  justify-content: flex-end;      
  width: 100%;  
  nav {        
    ul {
      display: block;      
      list-style: none;
      justify-content: space-between;
      padding: 0;      
      li {
        margin-left: 20px;
      }
      a {
        
      }
      a:hover {
        text-decoration: none;        
        font-weight: bold;
        color: #3a3838;
        transition: font-weight 0.2s;
      }
    }    
    @media all and (min-width: 768px) {             
      ul {
        display: flex;
      }
    }    
  }

  .menu-toggle {       
    position: absolute;
    right: 8px;
    top: -40px;
    img {
      width: 32px;
      height: 32px;
    }
  }
  @media all and (min-width: 768px) {
    .menu-toggle {
      display: none;
    }
  }
  @media all and (max-width: 767px) {
    position: absolute;
    text-align: center;
    background: #f7f7f7;
    top: 70px;
    left: 0;
    nav {
      width: 100%;
      display: none;
      &.active {
        display: block;
      }
      ul {
        margin-top: 0;              
        li {
          padding: 3px 0;
        }
      }
    }
  }
`;

export default class Nav extends Component {    
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
    const { items } = this.props;
    return(
      <StyledNav>
        <span className="menu-toggle" onClick={this.menuToggle.bind(this)}>            
          <Image src="img/menu.svg" />
        </span>
        <HashRouter>          
        <nav id="nav" className={this.state.menuState} >
          <ul>
          {items.navigation.map((nav,key) => {
            return (              
              <li key={key} onClick={this.closeMenu}><NavLink to={nav.link}>{nav.text}</NavLink></li>
            );
          })}
          </ul>          
        </nav>        
        </HashRouter>
      </StyledNav>
    )
  }
}