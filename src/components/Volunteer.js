import React, { Component } from 'react';
import Content from './styleComponents/Content';

import Title from './Title';
import Download from './Download';

export default class About extends Component {
  render() {
    const data = require('../content/content.json');
    return (
      <Content>
        <Title title={data.volunteer[0].title} />
        {data.volunteer[0].text.map(function(name, index){
          return <p key={ index }>{name}</p>;
        })}
        <Download link={ data.volunteer[0].docs[0].link } name={ data.volunteer[0].docs[0].name }/>        
      </Content>
    );
  }
}