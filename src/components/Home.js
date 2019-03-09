import React, { Component } from 'react';
import Styled from 'styled-components';
import ContentWrapper from './styleComponents/ContentWrapper';

import Banner from './Banner';
import Intro from './Intro';
import Activities from './Activities';
import Contact from './Contact';
import Panel from './Panel';
import Map from './Map';



const StyledMain = Styled.div`
  display: flex;  
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;  
  @media all and (min-width: 768px) {
    width: 49%;    
  }
`;

export default class Home extends Component {  
  render() {    
    const data = require('../content/content.json');
    return (
      <div>
        <Activities data={data.activities} />                
        <Banner />
        <Intro data={data.about[0]} />        
        <ContentWrapper>
          <StyledMain>
            <Panel data={data.visit[0]} />
            <Panel data={data.darshan[0]} />            
            <Contact data={data.contact[0]} />          
          </StyledMain>
          <Map />
        </ContentWrapper>
      </div>
    );
  }
}