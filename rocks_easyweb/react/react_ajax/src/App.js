import React, { Component } from 'react'
import './App.css';

class Nav extends Component {

  render() {

    const { onClick, list } = this.props;

    return (
      <nav>
        <ul>
          {list.map(
            el => 
              <li key={el.id}>
                <a href={el.id} data-id={el.id} onClick={(e) => {
                  e.preventDefault();
                  onClick(e.target.dataset.id);
                }}>{el.title}</a>
              </li>
            )
          }
        </ul>
      </nav>
    )
  }
}

class Article extends Component {

  render() {

    const { title, desc } = this.props;

    return (
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
    )
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: 'welcome',
        desc: 'Hello, React & Ajax'
      },
      list: []
    };
  }

  componentDidMount() {
    fetch('data/list.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ 
          list: data 
        });
      }); 
  }

  render() {

    console.log('App 실행');

    const { article, list } = this.state;

    return (
      <div className="App">
        <h1>Web</h1>
        <Nav 
          list={list}
          onClick={(id) => {

            fetch(`data/${id}.json`)
              .then(res => res.json())
              .then(data => {
                this.setState({ 
                  article: {
                    title: data.title,
                    desc: data.desc
                  } 
                });
              }); 
          }}
        />
        <Article 
          title={article.title}
          desc={article.desc}
        />
      </div>
    );
  }

}

export default App;