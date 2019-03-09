import React, { Component } from 'react';
import ContentWrapper from './styleComponents/ContentWrapper';
import Card from './styleComponents/Card';

import Title from './Title';


export default class Activities extends Component {  
  render() {
    const { data } = this.props;
    return(
      <ContentWrapper>        
        {data.map((item, key) => {
          return(
            <Card key={ key }>
              <Title title={ item.title } /> 
              <p>{ item.day }<br/>
              { item.time }</p>
            </Card>
          )          
        })}
      </ContentWrapper>
    );
  }
}