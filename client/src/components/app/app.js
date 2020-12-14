import React, { Component } from 'react';
import './app.css';
import Header from "../header";
import Footer from "../footer";
import Picture from "../picture";
import SideBar from "../side-bar";


export default class App extends Component {

  render() {

    return (
      <div className="main-container">
        <Header/>
        <div className="content">
          <Picture/>
          <SideBar/>
        </div>
        <Footer/>
      </div>
    );
  }
}


