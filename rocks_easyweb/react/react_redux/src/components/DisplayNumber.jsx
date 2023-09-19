import React, { Component } from 'react';
import store from '../store';

export default class DisplayNumber extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: store.getState().number,
    };
  }

  componentDidMount() {
    store.subscribe(() => this.setState({ number: store.getState().number }));
  }

  render() {

    const { number } = this.state;

    return (
      <div>
        <h2>DisplayNumber</h2>
        <input type='text' value={number} readOnly></input>
      </div>
    )
  }
}