import React, { Component } from 'react';
import ContentWrapper from './styleComponents/ContentWrapper';
import Image from './Image';
import Title from './Title';

export default class CurrentNews extends Component {
  render() {
    const data = require('../content/content.json');
    return (
      <ContentWrapper>
        <Title title={data.currentnews[0].title} />
        {data.currentnews[0].docs.map(function(item, index){
          return <Image key={ index } src= { item.image } />
        })}
      </ContentWrapper>
    );
  }
}
