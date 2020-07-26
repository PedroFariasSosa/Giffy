import React from 'react';
import './App.css';
import { Link, Route } from "wouter"

import ListOfGifs from './components/ListOfGifs';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Api Fech de Giphy</h1>
        <Link to='/gif/love'>Gif de Amor</Link>
        <Link to='/gif/panda'>Gifs de Panda</Link>
        <Link to='/gif/bucle'>Gif de Bucles</Link>
        <Route
        path="/gif/:keyword"
        component={ ListOfGifs } 
        />
        
      </section>
    </div>
  );
} 

export default App;
