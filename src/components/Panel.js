import React, { Component } from 'react';
import Styled from 'styled-components';
import Title from './Title';

const StyledPanel = Styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export default class Panel extends Component {
  render() {
    const { data } = this.props;
    return (
      <StyledPanel>        
        <Title title={data.title} type="secondary" />
        <p>
        {data.text.map(function(name, index){
          return <span key={ index }>{name}<br /></span>;
        })}
        </p>
      </StyledPanel>
    );
  }
}