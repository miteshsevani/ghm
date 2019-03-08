import React, { Component } from 'react';
import Styled from 'styled-components';
import Title from './Title';

const StyledPanel = Styled.div`  
  margin-bottom: 16px;
  width: 49%;  
  @media all and (min-width: 1000px) {
    width: 45%;  
  }
`;

export default class Panel extends Component {
  render() {
    const { data } = this.props;
    return (
      <StyledPanel>        
        <Title title={data.title} />
        <p>
        {data.text.map(function(name, index){
          return <span key={ index }>{name}<br /></span>;
        })}
        </p>
      </StyledPanel>
    );
  }
}