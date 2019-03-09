import React, { Component } from 'react';
import ContentWrapper from './styleComponents/ContentWrapper';

import Title from './Title';

export default class About extends Component {
  render() {
    const data = require('../content/content.json');
    return (
      <ContentWrapper>        
        <Title title={data.about[0].title} />
        {data.about[0].text.map(function(name, index){
          return <p key={ index }>{name}</p>;
        })}
      </ContentWrapper>
    );
  }
}