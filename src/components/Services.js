
import React, { Component } from 'react';
import Content from './styleComponents/Content';
import Title from './Title';
import Download from './Download';

export default class Services extends Component {
  render() {
    const data = require('../content/content.json');
    return (
      <Content>
        <Title title={data.services[0].title} />
        {data.services[0].text.map(function(name, index){
          return <p key={ index }>{name}</p>;
        })}
        <Download link={ data.services[0].docs[0].link } name={ data.services[0].docs[0].name } />
      </Content>
    );
  }
}