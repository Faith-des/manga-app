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

  saveCoordinates = (e) => {
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

  sendCoordinates = () => {
    const { x, y, x1, y1 } = this.state;

    //fetch('https://httpbin.org/post', {
    fetch('http://localhost:8081/api/v1/area', {
      method: 'POST',
      cors: "no-cors",
      body: JSON.stringify({ 'dot1': [x, y], 'dot2': [x1, y1], 'path': img })
    })
      .then(response => response.json())
      .then(json_object => console.log(json_object));
  };

  render() {

    return (
      <div className="picture">
        <img className="img"
             src={ img }
             alt="manga page 1"
             onMouseDown={ this.saveCoordinates }
             onMouseUp={ this.saveCoordinates }
             onClick={ this.sendCoordinates }
        />
      </div>
    )
  }
}