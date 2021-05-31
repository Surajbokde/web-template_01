


import React, { Component } from 'react';
import "../scss/App.scss";
import {
    Linkedin,Twitter,Facebook,Instagram,
  } from "../assets/svg_icon";
import Pic1 from "../assets/chap-foot.png";
import Pic2 from "../assets/MWBE.png";
import UClogo from "../assets/UClogo.png";

class Footer extends Component {
  render() {
    return (
        <>
        <div className="Standard-Div Footer">
        <div className="Foo_col_01">
          <div className="col-1">
            <p>
              HEADQUARTER
              <p className="border-reducer"></p>
            </p>
            <p className="para">
              246-50 57th Drive Douglaston, NY 11362 hello@universacare.com P:
              (718) 224-3758 Fax: 8777999065
            </p>
            <img src={UClogo} alt="logo" id="Foo_logo"/>
          </div>
          <div className="col-2">
            <div className="col-21 ">
              <p className="common-h">
                SERVICES
                <p className="border-reducer"></p>
              </p>
              <ul className="common-p">
                <li>Hourly Care</li>
                <li>Daily Care</li>
                <li>Hospital care</li>
                <li>Respite care</li>
                <li>Respite care</li>
              </ul>
            </div>
            <div className="col-22">
              <p className="common-h">
                COMPANY
                <p className="border-reducer"></p>
              </p>
              <ul className="common-p">
                <li>About Us</li>
                <li>Location</li>
                <li>Caregiver</li>
                <li>News & Blogs</li>
                <li>Contact Us</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Foo_col_02">
          <p className="common-p">Sign up to receive the latest articles</p>
          <input className="input_box" type="text" placeholder="Your Email Address" />
          <button className="foot-button">SUBMIT</button>
          <div className="Pics">
            <img src={Pic1} alt="Image" />
            <img src={Pic2} alt="Image" />
          </div>
          <div className="social">
            <p className="common-p followus">Follow Us</p>
            <Facebook />
            <Instagram />
            <Linkedin />
            <Twitter />
          </div>
        </div>
      </div>
      <hr />
      </>
    );
  }
}
 
export default Footer