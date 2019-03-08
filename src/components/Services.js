
import React, { Component } from 'react';
import Title from './Title';

export default class Services extends Component {
  render() {
    const data = require('../content/content.json');
    return (
      <div>
        <Title title={data.services[0].title} />
        {data.services[0].text.map(function(name, index){
          return <p key={ index }>{name}</p>;
        })}
        <a href={ data.services[0].docs[0].poojas} rel="noopener noreferrer" target="_blank">Poojas</a>
      </div>
    );
  }
}