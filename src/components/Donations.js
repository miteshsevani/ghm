
import React, { Component } from 'react';
import ContentWrapper from './styleComponents/ContentWrapper';
import Title from './Title';
import Download from './Download';

export default class Services extends Component {
  render() {
    const data = require('../content/content.json');
    return (
      <ContentWrapper>
        <Title title={data.donations[0].title} />
        {data.donations[0].text.map(function(name, index){
          return <p key={ index }>{name}</p>;
        })}    
        
        {data.donations[0].docs.map((item,key) => {
          return(
            <Download key={ key } link={ item.link } name={ item.name } />
          )
        })}        
      </ContentWrapper>
    );
  }
}