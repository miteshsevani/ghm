import React, { Component } from 'react';
import Image from './Image';

export default class About extends Component {  
  render() {
    const { data } = this.props;
    return (
      <div>      
      <Image src='img/mandir.png' />
        {data[0].text.map(function(name, index){
          return <p key={ index }>{name}</p>;
        })}            
      </div>
    );
  }
}