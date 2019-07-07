import React, { Component } from 'react';

export default class Icon extends Component {
  render() {
    switch (this.props.name) {
      case 'close':
        return (
/* <svg version="1.1"
     baseProfile="full"
     width="150" height="100"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="blue" />

  <circle cx="75" cy="50" r="40" fill="green" />

  <text x="75" y="62.5" font-size="30" text-anchor="middle" fill="white">SVG</text>

</svg> */
          <svg
            x="0px"
            y="0px"
            width="14px"
            height="14px"
            viewBox="-8 -8 26 26"
            enableBackground="new 0 0 20 20"
          >

             <polyline points="-6,-6 16,16"
              style={{stroke: "black",
                strokeWidth: "4",
                fill: "none"}}
              />

             <polyline points="16,-6 -6,16"
              style={{stroke: "black",
                strokeWidth: "4",
                fill: "none"}}
              />

          </svg>
        )
      default:
          return null;
    }
  }
}