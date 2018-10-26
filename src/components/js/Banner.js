import React, { Component } from 'react';
import logo from '../../assets/top-logo.png';
import '../css/Banner.scss';

export default class Banner extends Component {
  scrollToBottom() {
    window.scroll({
      top: 1000,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div className="banner-page">
       <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-no header-page text-medium ">
            <a className="navbar-brand text-normal" href="/">
              <img src={logo} className="logo-icon"/>
            </a>
            <button className="navbar-toggler text-right" type="button" data-toggle="collapse" data-target="#myNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end text-right" id="myNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/skilled" className="nav-link nav-active">Features</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Login</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Signup</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="banner-text col-lg-6 col-md-12 col-12">
          <div className="banner-title text-biggest ">
            Track and and analyze your cryptocurrency trades automatically.
          </div>
          <div className="banner-content text-regular">
            <br/>Get insights on how you can maximize your returns. <br/><br/>
            Coming soon: Trade on multiple cryptocurrency exchanges from one sigle location
          </div>
          <div className="banner-signup-btn text-bigger">
            Sign up Now!
          </div>
        </div> 
        <div className="scroll-area">
          <div className="scorllToBottom" onClick={()=>this.scrollToBottom()}>
            <i className="fa fa-angle-down arrow-down-icon"></i>
          </div>        
        </div>
       </div>
      </div>
    )
  }
}
