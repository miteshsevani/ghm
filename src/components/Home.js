import React, { Component } from 'react';
import Banner from './Banner';
import Intro from './Intro';
import Card from './Card';
import Panel from './Panel';

export default class Home extends Component {  
  render() {    
    const data = require('../content/content.json');
    return (
      <div className="content">
        <Banner />
        <section className="main">
          <Intro data={data.about[0]} />
          <Card data={data.services[0]} type="half" />
          <Card data={data.donations[0]} type="half" />         
        </section>
        <section className="side-panel">
          <Panel data={data.visit[0]} />
          <Panel data={data.darshan[0]} />
          <Panel data={data.contact[0]} />
        </section>
      </div>
    );
  }
}