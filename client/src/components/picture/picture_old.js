import React, { Component } from 'react';

import './picture.css'
import img from './img/img-1.jpg'

export default class Picture extends Component {

  showCoords = (e) => {
    const bounding = e.target.getBoundingClientRect();
    let x = (e.clientX - bounding.left).toFixed(1);
    let y = (e.clientY - bounding.top).toFixed(1);

  }
};
    doPost = (e) => {
    //fetch('https://httpbin.org/post', {
    fetch('http://localhost:8081/api/v1/area', {
      method: 'POST',
      cors: "no-cors",
//      headers: {
//        'Content-Type': 'application/json',
//        //'Content-Type': 'text/plain',
//        'Access-Control-Allow-Origin': '*'
//        },
      body: JSON.stringify({ 'X': x, 'Y': y , 'path': img})
    })
      .then(response => response.json())
      .then(json_object => console.log(json_object));



  render() {
    return (
      <div className="picture">
        <img className="img"
             onMouseDown={ this.showCoords }
             onMouseUp={ this.showCoords }
             src={ img }
             alt="manga page 1"
        />
      </div>
    )
  }
}
