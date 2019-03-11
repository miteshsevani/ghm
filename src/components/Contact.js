import React, { Component } from 'react';
import Styled from 'styled-components';
import Title from './Title';

const StyledContact = Styled.div`
  margin-bottom: 20px;
  @media all and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;
export default class Contact extends Component {  
  render() {
    const { data } = this.props;
    return (
      <StyledContact>
        <Title title={data.title} />
        Tel: { data.phone } <br />
        Email: <a href={"mailto:" + data.email }>{data.email}</a>
      </StyledContact>
    );
  }
}