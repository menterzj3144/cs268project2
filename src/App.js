import React from 'react';
import './App.css';
import {Piano} from './piano.js'
import {Staff} from './staff.js'



function App() {
  return (
    <div className="App">
      <Staff />
      <Piano />
    </div>
  );
}

export default App;

/**
 * Need array of staves. Add notes to individual staves on click of key.
 */