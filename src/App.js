import React from 'react';
import logo from './logo.svg';
import './App.css';
import SequenceManager from "./seq/SequenceManager";
import Item1 from "./seq/items/Item1";
import Item2 from "./seq/items/Item2";

function App() {
  return (
    <div className="App">
      <SequenceManager items={[Item1, Item2]} />
    </div>
  );
}

export default App;
