import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Donations from './components/Donations';
import Footer from './components/Footer';

const data = require('./content/content.json');
const navItems = require('./content/nav.json');
class App extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header data={ data.header } />
          <Nav items={navItems} />          
          <div className="main">
            <About data={ data.about } />
            <Services data={ data.services } />
            <Donations data={ data.donations } />        
          </div>
        </div>
        <Footer data={ data.footer } />
        </div>
    );
  }
}

export default App;
