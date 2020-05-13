import React, {useEffect} from 'react';
import './App.css';
import {Piano} from './piano.js'
import {Staff} from './staff.js'
import Vex from 'vexflow';
import {useDispatch} from 'react-redux';
import {createStaff} from './actions';

const VF = Vex.Flow;

function App() {
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(createStaff());
}, [dispatch]);

  return (
    <div className="App">
      <Staff />
      <Piano />
    </div>
  );
}

export default App;
