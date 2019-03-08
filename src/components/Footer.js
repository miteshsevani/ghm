import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`  
  footer {    
    background: #262626;
    color: #ccc;
    max-width: 1000px;
    margin: 0 auto;
    padding: 16px;
    .footer-meta {       
      font-size: 14px;
    }
  }
  @media all and (min-width: 768px) {
    footer {          
      .footer-meta {
        display:flex;
        justify-content: space-between;
      }
    } 
  }
`;
export default class Footer extends Component {
  render() {
    const {data} = this.props;
    return (
      <StyledFooter>
        <footer>          
          <div className="footer-meta">
            <div>&copy; {new Date().getFullYear()} Greenwich Hindu Mandir</div>
            <div>Registered charity number: {data[0].charity}</div>
          </div>
        </footer>
      </StyledFooter>
    );
  }
}