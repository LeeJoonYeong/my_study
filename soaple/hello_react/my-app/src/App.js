import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';

// function MyInfo(props) {
//     return (<div> Age: {props.age} </div>);
// }

// 함수형 컴포넌트
// function App() {

//   // jsx 문법 사용해보기
//   const name = { firstName: 'lee', lastName: 'joonyeong' };
//   const element = <h1>hi react {name.firstName + name.lastName}!!</h1>;

//   return (
//     <>
//     {element}
//     <MyInfo age="29" /> {/* 컴포넌트 사용해보기 */}
//     <Comment author="lee" description="안녕 ?" />
//     <Comment author="min" description="안녕 !" />
//     </>
//   );
// }

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}


// 클래스형 컴포넌트
class App extends React.Component {

  // state로 변수 정의
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        { id: 1, author: 'lee', description: 28 },
        { id: 2, author: 'joon', description: 29 },
        { id: 3, author: 'yeong', description: 30 },
      ]
    };
  }

  componentDidMount() {
    console.log('componentDidMount() 호출');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate() 호출');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount() 호출');
  }

  render() {

    const { comments } = this.state; // 구조분해하여 사용하기

    return (
    <>
      {comments.map((comment) => 
        <Comment key={comment.id} author={comment.author} description={comment.description} />
      )}
      <Toggle />
    </>
    );
  }
}

export default App;
