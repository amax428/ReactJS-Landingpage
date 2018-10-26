import React, { Component } from 'react';
import logo from '../../assets/top-logo.png';
import '../css/Footer.scss';

export default class Footer extends Component {
  scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }

  render() {
    return (
      <div className="footer-page">
        <div className="container">
            <div className="upper-part">
                <img src={logo} className="footer-logo" />
                <div className="row text-regular">
                    <div className="menu-item">
                        <a href="#">Features</a>
                    </div>
                    <div className="menu-item">
                        <a href="#">Login</a>
                    </div>
                    <div className="menu-item">
                        <a href="#">Signup</a>
                    </div>
                </div>
            </div>
            <div className="footer-part text-smaller">
                Copyright 2018 (c) Cryptalizer.com
            </div>
        </div>
        <div className="scrollToTop" onClick={()=>this.scrollTop()}>
            <i className="fa fa-angle-up arrow-up-icon"></i>
        </div>
      </div>
    )
  }
}
