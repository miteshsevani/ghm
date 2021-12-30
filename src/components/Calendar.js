
import React, { Component } from 'react';
import ContentWrapper from './styleComponents/ContentWrapper';
import Image from './Image';
import Title from './Title';
import Download from './Download';

export default class Services extends Component {
  render() {
    const data = require('../content/content.json');
    return (
      <ContentWrapper>
        {/*<Title title={ data.calendar[0].title } /> */}
        <Download link={ data.calendar[0].docs[0].link } name={ data.calendar[0].docs[0].name } />
        <Image src= { data.calendar[0].docs[0].image } />
      </ContentWrapper>
    );
  }
}
