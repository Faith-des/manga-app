import React, { Component } from 'react';

import './picture.css'
import img from './img/img-1.jpg'

export default class Picture extends Component {

  state = {
    x: 0,
    y: 0,
    x1: 0,
    y1: 0
  };

  onPictureClick = (e) => {
    const bounding = e.target.getBoundingClientRect();
    const xCoords = Math.floor(e.clientX - bounding.left);
    const yCoords = Math.floor(e.clientY - bounding.top);

    if (e.type === 'mousedown') {
      this.setState({
        x: xCoords,
        y: yCoords
      });
    }

    if (e.type === 'mouseup') {
      this.setState({
        x1: xCoords,
        y1: yCoords
      });
    }

  };

  render() {
    const { x, y, x1, y1 } = this.state;

    if (x !== 0 && y !== 0 && x1 !== 0 && y1 !== 0) {
      //fetch('https://httpbin.org/post', {
      fetch('http://localhost:8081/api/v1/area', {
        method: 'POST',
        cors: "no-cors",
//        headers: {
//          'Content-Type': 'application/json',
//          'Access-Control-Allow-Origin': '*'
//        },
        body: JSON.stringify({ 'dot1': [x, y], 'dot2': [x1, y1], 'path': img })
      })
        .then(response => response.json())
        .then(json_object => console.log(json_object));
    }

    return (
      <div className="picture">
        <img className="img"
             src={ img }
             alt="manga page 1"
             onMouseDown={ this.onPictureClick }
             onMouseUp={ this.onPictureClick }
        />
      </div>
    )
  }
}

// onClick={ fetch('https://httpbin.org/post', {
//   method: 'POST',
//     cors: "no-cors",
//     headers: {
//     'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*'
//   },
//   body: JSON.stringify({ 'X': x, 'Y': y, 'path': img })
// })
// .then(response => response.json())
//   .then(json_object => console.log(json_object))
// }