import React, { Component } from 'react';
import Banner from './components/js/Banner';
import Contents from './components/js/Contents';
import Features from './components/js/Features';
import Testimonial from './components/js/Testimonial';
import Footer from './components/js/Footer';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Contents />
        <Features />
        <Testimonial />
        <Footer />
      </div>
    );
  }
}

export default App;
