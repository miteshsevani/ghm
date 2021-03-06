import React from 'react';
import { Route, HashRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import Theme from './components/styleComponents/Theme';
import Body from './components/styleComponents/Body';
import Wrapper from './components/styleComponents/Wrapper';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import CurrentNews from './components/CurrentNews';
import Services from './components/Services';
import Calendar from './components/Calendar';
import Donations from './components/Donations';
import Volunteer from './components/Volunteer';
import Footer from './components/Footer';

const data = require('./content/content.json');

export default () => (
  <ThemeProvider theme={Theme}>
    <Body>
      <Header data={ data.header } />
      <HashRouter>
        <Wrapper>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/current-news" component={CurrentNews}/>
          <Route path="/services" component={Services}/>
          <Route path="/calendar" component={Calendar}/>
          <Route path="/donations" component={Donations}/>
          <Route path="/volunteer" component={Volunteer}/>
        </Wrapper>
      </HashRouter>
      <Footer data={ data.footer } />
    </Body>
  </ThemeProvider>
);
