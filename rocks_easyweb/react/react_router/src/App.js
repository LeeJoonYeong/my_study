import React, { Component } from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Topics from './components/Topics';
import Contact from './components/Contact';

export default function App() {
  return (
    <div>
      <h1>React Router</h1>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/topics"}>Topics</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/topics/*' element={<Topics />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}