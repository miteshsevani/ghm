import React, { Component } from 'react';
import Styled from 'styled-components';
import Content from './styleComponents/Content';

import Banner from './Banner';
import Intro from './Intro';
import Contact from './Contact';
import Panel from './Panel';
import Map from './Map';

const StyledMainWrapper = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const StyledMain = Styled.div`
  display: flex;  
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 24px;
  @media all and (min-width: 768px) {
    width: 49%;
    margin-bottom: 0px;
  }
`;

export default class Home extends Component {  
  render() {    
    const data = require('../content/content.json');
    return (
      <div>        
        <Banner />        
        <Intro data={data.about[0]} />                
        <StyledMainWrapper>
          <StyledMain>
            <Panel data={data.visit[0]} />
            <Panel data={data.darshan[0]} />            
            <Contact data={data.contact[0]} />          
          </StyledMain>
          <Map />
        </StyledMainWrapper>
      </div>
    );
  }
}