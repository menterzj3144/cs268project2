import React, {useEffect} from 'react';
import './App.css';
import {Piano} from './piano.js'
import {Staff} from './staff.js'
import Vex from 'vexflow';
import {useSelector, useDispatch} from 'react-redux';
import {drawStaff} from './actions';

const VF = Vex.Flow;

function App() {

  const staves = useSelector(state => state.staves);
  const notes = useSelector(state => state.notes);
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
      <Staff staves={staves} notes={notes}/>
      <Piano staves={staves} notes={notes}/>
    </div>
  );
}

export default App;
