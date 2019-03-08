import React, { Component } from 'react';
import Styled from 'styled-components';

import Banner from './Banner';
import Intro from './Intro';
import Contact from './Contact';
import Panel from './Panel';
import Map from './Map';
import Content from './styleComponents/Content';


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
        <Content>
          <Intro data={data.about[0]} />        
        </Content>
        <Content>
          <StyledMain>
            <Panel data={data.visit[0]} />
            <Panel data={data.darshan[0]} />            
            <Contact data={data.contact[0]} />          
          </StyledMain>
          <Map />
        </Content>
      </div>
    );
  }
}