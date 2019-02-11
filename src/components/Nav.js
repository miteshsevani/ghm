import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledNav = styled.div`
  nav {
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 16px;
    ul {
      display: flex;
      list-style: none;
      justify-content: space-between;
      padding: 0;
      
      a {
        color: #3a3838;
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
        <nav>  
          <ul>
          {items.navigation.map((nav,key) => {
            return (              
              <li key={key}><NavLink to={nav.link}>{nav.text}</NavLink></li>
            );
          })}
          </ul>
        </nav>
      </StyledNav>
    )
  }
}