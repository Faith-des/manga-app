import React, { Component } from 'react';
import './app.css';
import Header from "../header";
import Picture from "../picture";


export default class App extends Component {

  render() {

    return (
      <div className="main-container">
        <Header/>
        <main className="content">
          <Picture/>
        </main>
      </div>
    );
  }
}


