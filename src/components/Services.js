
import React, { Component } from 'react';

export default class Services extends Component {
  render() {
    const data = require('../content/content.json');
    return (
      <div className="content">
        <h2>{data.services[0].title}</h2>
        {data.services[0].text.map(function(name, index){
          return <p key={ index }>{name}</p>;
        })}

        <a href={ data.services[0].docs[0].poojas} rel="noopener noreferrer" target="_blank">Poojas</a>
      </div>
    );
  }
}