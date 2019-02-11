import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  background: #262626;
  color: #ccc;
  footer {    
    max-width: 964px;
    margin: 0 auto;
    padding: 16px;
    .footer-meta {
      display:flex;
      justify-content: space-between;
      font-size: 14px;
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