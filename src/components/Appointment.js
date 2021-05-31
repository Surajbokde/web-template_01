import React, { Component } from 'react';
import "../scss/App.scss";
import {Health} from "../assets/svg_icon";
import Wall from "../assets/wall.png";

class Copy extends Component {
  render() {
    return (
    <>
    <div className="Img-slider">
      <img src={Wall} alt="image" />
    </div>
      <div className="Standard-Div appointment">
        <div className="Standard-Text appointment-text">
          <p>WE DO WHATEVER IT MAKES TO BRING YOU PEACE OF MIND</p>
          <button>REQUEST AN APPOINTMENT</button>
        </div>
        <div className="Health-Image">
          <Health />
        </div>
      </div>
    </>
    );
  }
}
 
export default Copy