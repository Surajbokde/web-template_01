import React, { Component } from 'react';
import "../scss/App.scss";
import {
    Info,Phone1,Pin,Ham
}from "../assets/svg_icon";
import UClogo from "../assets/UClogo.png";
import HomeHero from "../assets/home-hero.png";

const menubar = [
    "ABOUT",
    "SERVICES",
    "RESOURCES",
    "CAREERS",
    "HOME CARE HEROES",
    "CONTACT",
  ];
class Header extends Component {
  render() {
    return (
        <header className="App-header">
            <div className="navtop">
            <Info />
            <p>
                <strong>READ ABOUT OUR COVID-19 PRECAUTIONS</strong>
            </p>
            </div>

        <div className="Navbar">
          <img src={UClogo} alt="logo" />
          <div className="Bar-Options">
            {menubar.map((menu) => {
              return (
                <span className="Bar-Options-li">
                  <li><strong>{menu}</strong></li>
                </span>
              );
            })}
          </div>
          <div className="Bar-Contact-Div">
            <Phone1 />
            <p className="Bar-Contact"><strong>866-986-3356</strong></p>
          </div>
          <Ham />
        </div>
        <div className="Bar-Options Bo-mobile">
          {menubar.map((menu) => {
            return (
              <span className="Bar-Options-li Bo-mobile-li">
                <li>{menu}</li>
              </span>
            );
          })}
        </div>
        <div className="Ban">
          <div className="Ban-Text">
            <h1>The Future of Health Care is Home Care</h1>
            <p>Over a Decade of Trusted Care.</p>
            <button>REQUEST AN APPOINTMENT</button>
          </div>
          <div className="Ban-Image">
            <img src={HomeHero} alt="home-image" />
          </div>
        </div>
        <div className=" Banner_Bottom">
          <Pin />
          <p>
            <strong>UNIVERSACARE AREAS OF COVERAGE</strong>
          </p>
        </div>
      </header>
      
    );
  }
}
 
export default Header