import React, { Component } from 'react';
import Styled from 'styled-components';
import Title from './Title';

const StyledPanel = Styled.div`
  width: 100%;
  margin: 16px 0;  
`;

export default class Panel extends Component {
  render() {
    const { data } = this.props;
    return (
      <StyledPanel>        
        <Title title={data.title} type="secondary" />
        {data.text.map(function(name, index){
          return <p key={ index }>{name}</p>;
        })}
      </StyledPanel>
    );
  }
}