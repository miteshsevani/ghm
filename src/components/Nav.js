import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

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
        color: #fff;
      }
      a:hover {
        text-decoration: none;
        font-weight: bold;
        transition: font-weight 0.2s;
        color: #d27c21;
      }
    }
    @media all and (min-width: 768px) {       
      ul {
        display: flex;
      }
    }    
  }
  @media all and (max-width: 767px) {
    position: absolute;
    text-align: center;
    background: #262626;
    top: 80px;
    left: 0;
    nav {
      width: 100%;
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
  render() {    
    const { items } = this.props;
    return(
      <StyledNav>
        <HashRouter>
        <nav>  
          <ul>
          {items.navigation.map((nav,key) => {
            return (              
              <li key={key}><NavLink to={nav.link}>{nav.text}</NavLink></li>
            );
          })}
          </ul>          
        </nav>
        </HashRouter>
      </StyledNav>
    )
  }
}