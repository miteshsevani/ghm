
import React, { Component } from 'react';
import Title from './Title';

export default class About extends Component {
  render() {
    const data = require('../content/content.json');
    return (
      <div className="content">        
        <Title title={data.about[0].title} />
        {data.about[0].text.map(function(name, index){
          return <p key={ index }>{name}</p>;
        })}
      </div>
    );
  }
}