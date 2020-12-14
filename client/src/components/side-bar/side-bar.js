import React, { Component } from 'react';

import './side-bar.css'
import ListItem from "../list-item";

export default class SideBar extends Component {

  render() {
    return (
        <aside className="side-bar">
          <ul className="side-bar__list">
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
          </ul>
        </aside>
    )
  }
}
