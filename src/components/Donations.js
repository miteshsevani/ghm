
import React, { Component } from 'react';
import Title from './Title';
export default class Services extends Component {
  render() {
    const data = require('../content/content.json');
    return (
      <div id="#donations"className="content">        
        <Title title={data.donations[0].title} />
        {data.donations[0].text.map(function(name, index){
          return <p key={ index }>{name}</p>;
        })}            
      </div>
    );
  }
}