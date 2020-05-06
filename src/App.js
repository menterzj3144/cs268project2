import React from 'react';
import './App.css';
import {Piano} from './piano.js'
import {Staff} from './staff.js'

const staves = [];

function App() {
  return (
    <div className="App">
      <Staff staves={staves}/>
      <Piano staves={staves}/>
    </div>
  );
}

export default App;
