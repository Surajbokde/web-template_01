import React, { Component } from 'react';
import "../scss/App.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Standard from "../assets/Standard.png";
import {
    
    Star
  } from "../assets/svg_icon";

  const cards = [
    {
      
        name: "Alvin Stanley",
        text:
          "Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help.",
    },
    {
      
        name: "Alvin Stanley",
        text:
          "Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help.",
    },
    {
      
        name: "Alvin Stanley",
        text:
          "Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help.",
    },
    {
      
        name: "Alvin Stanley",
        text:
          "Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help.",
    },
    {
      
        name: "Alvin Stanley",
        text:
          "Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help.",
    },
    {
      
        name: "Alvin Stanley",
        text:
          "Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help.",
    },

    
  ];
  
class Review extends Component {
  render() {
    return (
        <>
        <div className="Standard-Div">
            <div className="Standard">
            <div className="Standard-img">
                <img src={Standard} alt="Image" />
            </div>
            <div className="Standard-Text">
                <p>CHAP Accreditation and this line can be about this big</p>
                <p>
                UniversaCare, LLC will provide the following home health care
                programs at flexible schedules and cost-friendly service rates.{" "}
                </p>
            </div>
            </div>
        </div>
        <div className="Standard-Div Review-Div">
            <div className="Standard Reviews">
            <div className=" Review-rating">
                <p>5.0</p>
                <Star />
                <p>2,054 verified customers reviews by <strong>Google.</strong></p>
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
                    <SplideSlide key={card.name}>
                    <div className="Cards Cards2 review-card">
                        <p>{card.name}</p>
                        <Star />
                        <p>{card.text}</p>
                      
                    </div>
                    </SplideSlide>
                );
                })}
            </Splide>
            
            </div>
            <div className="see_msg">
              <pq>SEE ALL REVIEWS  -></pq>
            </div>
        </div>

        </>
    );
  }
}
 
export default Review