
import React, { Component } from 'react';
import Content from './styleComponents/Content';
import Title from './Title';
import Download from './Download';

export default class Services extends Component {
  render() {
    const data = require('../content/content.json');
    return (
      <Content>
        <Title title={data.donations[0].title} />
        {data.donations[0].text.map(function(name, index){
          return <p key={ index }>{name}</p>;
        })}    
        
        {data.donations[0].docs.map((item,key) => {
          return(
            <Download key={ key } link={ item.link } name={ item.name } />
          )
        })}
        
      </Content>
    );
  }
}