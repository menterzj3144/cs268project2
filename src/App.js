import React from 'react';
import './App.css';
import {Piano} from './piano.js'
import {Staff} from './staff.js'
import { useSelector } from 'react-redux';
import {Action, isWaiting} from './actions';

function App() {
  const isWaiting = useSelector(state => state.isWaiting);
  return (
    <div className="App">
      {isWaiting && <div className="spinner" />}
      <Staff />
      <Piano />
    </div>
  );
}

export default App;
