import React, { Component } from 'react'

export default class Updatearticle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.data.title,
      desc: this.props.data.desc,
    }
  }

  render() {
    console.log('Updatearticle.js 실행됨');

    const { onSubmit } = this.props;
    const { title, desc } = this.state;

    return (
      <section>
        <article>
          <h2>Update Article</h2>
          <form 
            action='/update_process' 
            method='post'
            onSubmit={function(e) {
              e.preventDefault();
              onSubmit(e.target.title.value, e.target.desc.value);
            }.bind(this)}
          >
            <p>
              <input 
                type="text" 
                name="title" 
                placeholder='title' 
                onChange={(e) => this.setState({title: e.target.value})} 
                value={title} />
            </p>
            <p>
              <textarea 
                name="desc" 
                placeholder='description' 
                onChange={(e) => this.setState({desc: e.target.value})} 
                value={desc}
              >
              </textarea>
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
