import React, { Component } from 'react';
import "../scss/App.scss";

import {
    ArrRight,Dashed,Icon_1,
    Star,
  } from "../assets/svg_icon";
const cards_2 = [
    {
      icon: Icon_1,
      heading: "1. Initial   Consultation",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.",
    },
    {
      icon: Icon_1,
      heading: "2. Customized Care Plan",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.",
    },
    {
      icon: Icon_1,
      heading: "3. Caregiver Matching",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.",
    },
    {
      icon: Icon_1,
      heading: "4. Ongoing Support & Supervision",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.",
    },
  ];

class Care extends Component {
  render() {
    return (   
    <>
    <div className="Carevider">
        <p className="Cv-head">
          How We Find <span style={{ color: "#FF8400" }}>Best Careviger </span>
          For You
        </p>
        <div className="Cv-box">
          <Dashed />
          {cards_2.map((card) => {
            return (
              <div className="Cv-card">
                {React.createElement(card.icon)}
                <div className="Cv-Text">
                  <p>{card.heading}</p>
                  <p>{card.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
    );
  }
}
 
export default Care