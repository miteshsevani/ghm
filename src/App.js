import React, { Component } from 'react';
import { Route, HashRouter } from "react-router-dom";
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
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
          <HashRouter>        
            <div>
              <Nav items={navItems} />          
              <Route exact path="/" component={Home}/>
              <Route path="/services" component={Services}/>
              <Route path="/donations" component={Donations}/>          
            </div>        
          </HashRouter>      
        </div>
        <Footer data={ data.footer } />
      </div>
    );
  }
}

export default App;



        