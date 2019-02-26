import React, { Component } from 'react';
import Banner from './Banner';
import Card from './Card';
import Panel from './Panel';

export default class Home extends Component {  
  render() {    
    const data = require('../content/content.json');
    return (
      <div className="content">
        <Banner />
        <div className="main">
          <Card data={data.about[0]} type="full" />
          <Card data={data.services[0]} type="half" />
          <Card data={data.donations[0]} type="half" />         
        </div>
        <div className="side-panel">
          <Panel data={data.visit[0]} />
          <Panel data={data.darshan[0]} />
          <Panel data={data.contact[0]} />
        </div>
      </div>
    );
  }
}