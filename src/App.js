import React from 'react';
import './App.css';
import {Piano} from './piano.js'
import {Staff} from './staff.js'
import Vex from 'vexflow';

const VF = Vex.Flow;

const staves = [];
var notes = [[
  new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
  new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
  new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
  new VF.StaveNote({keys: ["b/4"],  duration: "qr"})
]];

function App() {
  return (
    <div className="App">
      <Staff staves={staves} notes={notes}/>
      <Piano staves={staves} notes={notes}/>
    </div>
  );
}

export default App;
