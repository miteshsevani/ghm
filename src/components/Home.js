import React, { Component } from 'react';
import Banner from './Banner';
import Intro from './Intro';
import Contact from './Contact';
import Panel from './Panel';
import Map from './Map';

export default class Home extends Component {  
  render() {    
    const data = require('../content/content.json');
    return (
      <div className="content">
        <Banner />
        <Intro data={data.about[0]} />        
        <section className="main-wrap">
          <div className="main">
            <Panel data={data.visit[0]} />
            <Panel data={data.darshan[0]} />            
            <Contact data={data.contact[0]} />          
          </div>
          <div className="map">
            <Map />
          </div>
        </section>        
      </div>
    );
  }
}