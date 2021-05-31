import React, { Component } from 'react';
import "../scss/App.scss";



class Copy extends Component {
  render() {
    return (
        
    <div className="copy">
        <p className="common-p">
          Copyright 2020{" "}
          <strong>
            <span style={{ color: "#ff8b08" }}>Universacare </span>
          </strong>
          - All rights reserved.
        </p>
    </div>
    );
  }
}
 
export default Copy