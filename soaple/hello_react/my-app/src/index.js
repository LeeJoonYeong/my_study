import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 현재 시간 나타내보기
// function tick() {
//   const element = (
//     <div>
//       <h2>clock</h2>
//       <h3>It is {new Date().toLocaleTimeString()}.</h3>
//     </div>
//   );

//   root.render(
//     <React.StrictMode>
//       {element}
//       <App />
//     </React.StrictMode>
//   );

// }

// setInterval(tick, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
