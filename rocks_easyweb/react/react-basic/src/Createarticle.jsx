import React, { Component } from 'react'

export default class Createarticle extends Component {
  render() {
    console.log('Createarticle.js 실행됨');

    const { onSubmit } = this.props;

    return (
      <section>
        <article>
          <h2>Create Article</h2>
          <form 
            action='/create_process' 
            method='post'
            onSubmit={function(e) {
              e.preventDefault();
              onSubmit(e.target.title.value, e.target.desc.value);
            }.bind(this)}
          >
            <p>
              <input type="text" name="title" placeholder='title' />
            </p>
            <p>
              <textarea name="desc" placeholder='description'></textarea>
            </p>
            <p>
              <input type="submit" value="전송" />
            </p>
          </form>
        </article>
      </section>
    );
  }
}
