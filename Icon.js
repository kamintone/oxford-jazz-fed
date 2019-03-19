import React, { Component } from 'react';

export default class Icon extends Component {
  static defaultProps = {
    color: 'white'
  }
  
  render() {
    switch (this.props.name) {
      case 'close':
        return (
          <svg
            x="0px"
            y="0px"
            width="16px"
            height="16px"
            viewBox="0 0 20 20"
            enableBackground="new 0 0 20 20"
          >
            <polygon
              fill="{this.props.color}"
              points="20,1.5
              18.5,0
              10,8.5
              1.5,0
              0,1.5
              8.5,10
              0,18.5
              1.5,20
              10,11.5
              18.5,20
              20,18.5
              11.5,10 "
            />
          </svg>
        )
      default:
          return null;
    }
  }
}