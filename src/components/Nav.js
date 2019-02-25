import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledNav = styled.div`
  display:flex;
  width: 100%;
  justify-content: flex-end;
  nav {    
    ul {
      display: flex;
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