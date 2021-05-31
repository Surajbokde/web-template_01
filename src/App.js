import "./scss/App.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import Header from './components/Header';
import Copy from './components/Copy';
import Footer from './components/Footer';
import Appointment from './components/Appointment';
import Review from './components/Review';
import Contactus from './components/Contactus';
import Care from './components/Care';

import {
  ArrRight,Dashed,Icon_1,Icon_2,Icon_3,Icon_4,
  Star,
} from "./assets/svg_icon";
import { useEffect } from "react";
import Phone from "./assets/Phone.png";

import Standard from "./assets/Standard.png";


import Feature_1 from "./assets/feature1.png";
import Feature_2 from "./assets/feature2.png";
import Feature_3 from "./assets/feature3.png";
import Feature_4 from "./assets/feature4.png";
import Feature_5 from "./assets/feature5.png";
import Feature_6 from "./assets/feature6.png";
import Feature_7 from "./assets/feature7.png";
import React from "react";



function App() {
  useEffect(() => {
    document.querySelector(".Tog").addEventListener("click", () => {
      console.log("clicked");
      document
        .querySelector(".Bar-Options.Bo-mobile")
        .classList.toggle("toggler");
    });
  }, []);

  return (
    <div className="App">
      <Header/>
      <Contactus/>
      <Care/>
      <Review/>
      <Appointment/>
      <Footer/>  
      <Copy/>
    </div>
  );
}

export default App;
