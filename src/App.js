import React, { Component } from 'react';
import { Route, HashRouter } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Donations from './components/Donations';
import Footer from './components/Footer';

const data = require('./content/content.json');

class App extends Component {
  render() {
    return (
      <div>
        <Header data={ data.header } />
        <div className="wrapper">                      
          <HashRouter>
            <div>              
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
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



        