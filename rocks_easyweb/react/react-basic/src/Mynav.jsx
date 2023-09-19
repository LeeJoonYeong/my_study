import React, { Component } from 'react'

export default class Mynav extends Component {

  // 성능 향상을 위해 조건 호출
  shouldComponentUpdate(newProps, newState) {
    if (newProps.data === this.props.data) {
      return false;
    }
    return true;
  }

  render() {
    console.log('Mynav.js 실행됨');

    const { data, onChangePage } = this.props; // 구조분해
    let lists = [];
    let i = 0;

    while(i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a 
            href='#'
            data-id={data[i].id}
            onClick={function(e) {
              e.preventDefault();
              onChangePage(e.target.dataset.id);
            }.bind(this)}
          >{data[i].title}</a>
        </li>
      );
      i++;
    }

    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}
