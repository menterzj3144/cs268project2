import React, {useEffect} from 'react';
import './App.css';
import {Piano} from './piano.js'
import {Staff} from './staff.js'
import Vex from 'vexflow';
import {useDispatch} from 'react-redux';
import {drawStaff} from './actions';

const VF = Vex.Flow;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(drawStaff([], [[
      new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
      new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
      new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
      new VF.StaveNote({keys: ["b/4"],  duration: "qr"})
  ]]));
}, [dispatch]);

  return (
    <div className="App">
      <Staff />
      <Piano />
    </div>
  );
}

export default App;
