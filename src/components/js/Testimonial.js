import React, { Component } from 'react';
import openIcon from '../../assets/quotation-left.png';
import closeIcon from '../../assets/quotation-right.png';
import '../css/Testimonial.scss';

export default class Testimonial extends Component {
  render() {
    return (
      <div className="testimonial-page">
       <div className="container">
        <div className="testimonial-title text-extra-big">
            Testimonials
        </div>
        <div className="row">
            <div className="testimonial-item col-md-6">
                <img src={openIcon} className="quotation-icon"/>
                <div className="text-regular">
                    Lorem ipsum dolor sit amet, consectetur adipiscig elit, sed do eiusmod...<br/><br/>
                </div>
                <div className="footer-part">
                    <div className="writer text-small">
                        John Updike
                    </div>
                    <img src={closeIcon} className="quotation-icon"/>
                </div>
            </div>
            <div className="testimonial-item col-md-6">
                <img src={openIcon} className="quotation-icon"/>
                <div className="text-regular">
                    Lorem ipsum dolor sit amet, consectetur adipiscig elit, sed do eiusmod...<br/><br/>
                </div>
                <div className="footer-part">
                    <div className="writer text-small">
                        John Updike
                    </div>
                    <img src={closeIcon} className="quotation-icon"/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="testimonial-item col-md-6">
                <img src={openIcon} className="quotation-icon"/>
                <div className="text-regular">
                    Lorem ipsum dolor sit amet, consectetur adipiscig elit, sed do eiusmod...<br/><br/>
                </div>
                <div className="footer-part">
                    <div className="writer text-small">
                        John Updike
                    </div>
                    <img src={closeIcon} className="quotation-icon"/>
                </div>
            </div>
            <div className="testimonial-item col-md-6">
                <img src={openIcon} className="quotation-icon"/>
                <div className="text-regular">
                    Lorem ipsum dolor sit amet, consectetur adipiscig elit, sed do eiusmod...<br/><br/>
                </div>
                <div className="footer-part">
                    <div className="writer text-small">
                        John Updike
                    </div>
                    <img src={closeIcon} className="quotation-icon"/>
                </div>
            </div>
        </div>
       </div>
      </div>
    )
  }
}
