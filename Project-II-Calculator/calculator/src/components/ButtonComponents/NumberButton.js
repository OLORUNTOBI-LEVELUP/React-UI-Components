import React from 'react';
import './Button.css';


const numbers = {
    clear: "clear",
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
export default function WeaponSelector(props) {
    return (
      <div className="keyPad">
          <button onClick={() => props.press(0)} className="clearButton">{numbers.clear}</button>
          <button onClick={() => props.press(1)} className="numberButton">{numbers.one}</button>
          <button onClick={() => props.press(2)} className="numberButton">{numbers.two}</button>
          <button onClick={() => props.press(3)} className="numberButton">{numbers.three}</button>
          <button onClick={() => props.press(4)} className="numberButton">{numbers.four}</button>
          <button onClick={() => props.press(5)} className="numberButton">{numbers.five}</button>
          <button onClick={() => props.press(6)} className="numberButton">{numbers.six}</button>
          <button onClick={() => props.press(7)} className="numberButton">{numbers.seven}</button>
          <button onClick={() => props.press(8)} className="numberButton">{numbers.eight}</button>
          <button onClick={() => props.press(9)} className="numberButton">{numbers.nine}</button>
          <button onClick={() => props.press(0)} className="zeroButton">{numbers.zero}</button>
      </div>
    );
  };
