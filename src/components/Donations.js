
import React, { Component } from 'react';

export default class Services extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h2>{data[0].title}</h2>
        {data[0].text.map(function(name, index){
          return <p key={ index }>{name}</p>;
        })}            
      </div>
    );
  }
}