import React, { Component } from 'react'

export default class Myarticle extends Component {
  render() {
    console.log('Myarticle.js 실행됨');

    const { title, desc } = this.props;

    return (
      <section>
        <article>
          <h2>{title}</h2>
          <p>{desc}</p>
          {/* <p>난이도: {this.props.rate}</p> */}
        </article>
      </section>
    );
  }
}
