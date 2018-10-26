import React, { Component } from 'react';
import coloredLogo from '../../assets/color-logo.png';
import bridge from '../../assets/bridge.png';
import slide from '../../assets/slide-dots.png';
import '../css/Contents.scss';

export default class Contents extends Component {
  render() {
    return (
      <div className="container content-page">
       <div className="contents">
        <img src={coloredLogo} className="content-logo"/>
        <img src={bridge} className="content-bridge"/>
        <div className="content-item text-medium">
            <img src={slide} className="slide-icon"/>
            <div>
                Securely and Automatically sync your trades from popular exchanges such as:<br/>
                Coinbase Pro, Binance, Bitfinex, Bittrex and more. More exchanges being added continuously.
            </div>
        </div>
        <div className="content-item text-medium">
            <img src={slide} className="slide-icon"/>
            <div>
                Analyze your portfolio risk and get insights into how you can maximize your returns.
            </div>
        </div>
        <div className="content-item text-medium">
            <img src={slide} className="slide-icon"/>
            <div>
                Execute trades on multiple exchanges using one easy-to-use interface.
            </div>
            <div className="text-thin">  
                <i>(Coming soon)</i>
            </div>
        </div>
       </div>
      </div>
    )
  }
}
