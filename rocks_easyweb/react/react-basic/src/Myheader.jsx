import React, { Component } from 'react'

export default class Myheader extends Component {

  render() {
    console.log('Myheader.js 실행됨');

    const { title, desc, onChangePage } = this.props; // 구조분해

    return (
      <header>
        <h1 className='logo'>
          <a href="#" onClick={function(e) {
            e.preventDefault();
            onChangePage();
          }.bind(this)}>
            {title}
          </a>
        </h1>
        <p>{desc}</p>
      </header>
    );
  }
}