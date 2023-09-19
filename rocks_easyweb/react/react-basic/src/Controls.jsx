import React, { Component } from 'react'

export default class Controls extends Component {
  render() {
    console.log('Controls.js 실행됨');

    const { onChangePage } = this.props;

    return (
      <ul className='controls'>
        <li>
          <a
            href='/create'
            className='btn'
            onClick={function(e) {
              e.preventDefault();
              onChangePage('create');
            }}
          >create</a>
        </li>
        <li>
          <a 
            href='/update' 
            className='btn'
            onClick={function(e) {
              e.preventDefault();
              onChangePage('update');
            }}
          >update</a>
        </li>
        <li>
          <input 
            type='button' 
            value="delete"
            className='btn' 
            onClick={function(e) {
              e.preventDefault();
              onChangePage('delete');
            }}
          />
        </li>
      </ul>
    )
  }
}
