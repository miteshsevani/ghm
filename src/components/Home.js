import React, { Component } from 'react';
import Image from './Image';

export default class Home extends Component {  
  render() {    
    const data = require('../content/content.json');
    return (
      <div className="content">
      <Image src='img/mandir.png' />
      {data.about[0].text.map(function(name, index){
        return <p key={ index }>{name}</p>;
      })}            
      </div>
    );
  }
}