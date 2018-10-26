import React, { Component } from 'react';
import lock from '../../assets/lock.png';
import parallex from '../../assets/parallex.png';
import comming from '../../assets/comming.png';
import '../css/Features.scss';

export default class Features extends Component {
  render() {
    return (
      <div className="features-page">
        <div className="container item-page">
            <div className="row">
                <div className="feature-item col-md-3 col-12">
                    <img src={lock} className="feature-icon" />
                    <div className="text-medium">
                        Security
                    </div>
                    <div className="text-small">
                        State of the art security to safe gaurd all your data all the time
                    </div>
                </div>
                <div className="feature-item col-md-3 col-12">
                    <img src={parallex} className="feature-icon" />
                    <div className="text-medium">
                        Parallax Effect
                    </div>
                    <div className="text-small">
                        Intuitive user interface to make tracking and trading across multiple exchanges simple
                    </div>
                </div>
                <div className="feature-item col-md-6 col-12">
                    <img src={comming} className="feature-icon" />
                    <div className="text-medium">
                        Advanced Capabilities (comming soon)
                    </div>
                    <div className="text-small">
                        Personalized insights and recommendations to maximize your returns<br/><br/>
                        Excute rules-based trades across multiple exchanges from one place
                    </div>
                </div>
            </div>

        </div>
      </div>
    )
  }
}
