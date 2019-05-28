import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay'

const numbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
}
const App = () => {
  return (
    <div className="app">
      <Display name={numbers} />
    </div>
  );
};

export default App;
