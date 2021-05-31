import React, { Component } from 'react';
import "../scss/App.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import {
    ArrRight,Dashed,Icon_1,Icon_2,Icon_3,Icon_4,
    Star,
  } from "../assets/svg_icon";
import Feature_1 from "../assets/feature1.png";
import Feature_2 from "../assets/feature2.png";
import Feature_3 from "../assets/feature3.png";
import Feature_4 from "../assets/feature4.png";
import Feature_5 from "../assets/feature5.png";
import Feature_6 from "../assets/feature6.png";
import Feature_7 from "../assets/feature7.png";
import Phone from "../assets/Phone.png";

const cards = [
    {
      icon: Feature_1,
      heading: "Hourly Home Care",
      text:
        "4x higher coverage limit than it is in traditional policies for computers and home office equipment.",
    },
    {
      icon: Feature_2,
      heading: "Personal Care",
      text:
        "4x higher coverage limit than it is in traditional policies for computers and home office equipment.",
    },
    {
      icon: Feature_3,
      heading: "Private Nursing",
      text:
        "4x higher coverage limit than it is in traditional policies for computers and home office equipment.",
    },
    {
      icon: Feature_4,
      heading: "Respite Care",
      text:
        "4x higher coverage limit than it is in traditional policies for computers and home office equipment.",
    },
    {
      icon: Feature_5,
      heading: "Life-in Aid",
      text:
        "4x higher coverage limit than it is in traditional policies for computers and home office equipment.",
    },
    {
      icon: Feature_6,
      heading: "Memory Care",
      text:
        "4x higher coverage limit than it is in traditional policies for computers and home office equipment.",
    },
    {
      icon: Feature_7,
      heading: "Memory Care",
      text:
        "4x higher coverage limit than it is in traditional policies for computers and home office equipment.",
    },
  ];
  

class Contactus extends Component {
  render() {
    return (
        <>
        <div className="Cards-Area">
            <div className="Para-Section">
            <p>
                Your peace of mind is <br />
                <strong>our number one priority.</strong>
            </p>
            <hr />
            <p className="common-p">
                UniversaCare offers a range of services for in-home care. We are
                your partners in care, and work with you to come up with a plan of
                action.
            </p>
            </div>
            {cards.map((card) => {
            return (
                <div className="Cards">
                <img src={card.icon} alt="Card-Icon" />
                <p className="Card-Head">{card.heading}</p>
                <p className="Card-Text">{card.text}</p>
                <div className="Card-Button-Div ">
                    <button className="Card-Button">
                    <ArrRight />
                    </button>
                </div>
                </div>
            );
            })}
            <div className="Cards">
            <img src={Phone} alt="Card-Icon" className="card-phone"/>
            <p style={{ textAlign: "Center" }} className="Card-Head">
                Do you need support?
            </p>
            <p className="Card-Text">We got help!</p>

            <button className="foot-button contact-us-but">CONTACT US</button>
            </div>
        </div>
        <Splide
            className="splide"
            options={{
            rewind: true,
            perPage: 1,
            perMove: 1,
            }}
            onMoved={(splide, newIndex) => {
            console.log("moved", newIndex);
            }}
        >
            {cards.map((card) => {
            return (
                <SplideSlide key={card.heading}>
                <div className="Cards Cards2">
                    <img src={card.icon} alt="Card-Icon" />
                    <p className="Card-Head">{card.heading}</p>
                    <p className="Card-Text">{card.text}</p>
                    <div className="Card-Button-Div splide__arrows">
                    <button className="Card-Button splide_main">
                    <ArrRight />
                    </button>
                    </div>
                </div>
                </SplideSlide>
            );
            })}
        </Splide>

        <div className="Cards feature-sec">
            <img src={Phone} alt="Card-Icon" />

            <p style={{ textAlign: "Center" }} className="Card-Head">
            Do you need support?
            </p>
            <p className="Card-Text">We got help!</p>

            <button className="foot-button contact-us-but">CONTACT US</button>
        </div>
        </>
    );
  }
}
 
export default Contactus