import React, { Component } from 'react';
import DisplayNumber from './DisplayNumber';

export default class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h2>DisplayNumber Root</h2>
        <DisplayNumber />
      </div>
    )
  }
}