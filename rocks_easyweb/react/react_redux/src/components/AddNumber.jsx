import React, { Component } from 'react';
import store from '../store';

export default class AddNumber extends Component {

  constructor(props) {
    super(props);
    this.state = {
      size: 0,
    };
  }

  render() {

    const { size } = this.state;

    return (
      <div>
        <h2>AddNumber</h2>
        <input 
          type='text' 
          value={size}
          onChange={(e) => {
            this.setState({ size: e.target.value });
          }}
        />
        <input 
          type='button' 
          value="+"
          onClick={
            () => store.dispatch({ type: 'INCREMENT', size: size })
          }
        />
      </div>
    )
  }
}