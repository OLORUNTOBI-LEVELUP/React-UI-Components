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
          <button  className="clearButton">{numbers.clear}</button>
          <button  className="numberButton">{numbers.one}</button>
          <button  className="numberButton">{numbers.two}</button>
          <button  className="numberButton">{numbers.three}</button>
          <button  className="numberButton">{numbers.four}</button>
          <button  className="numberButton">{numbers.five}</button>
          <button  className="numberButton">{numbers.six}</button>
          <button  className="numberButton">{numbers.seven}</button>
          <button  className="numberButton">{numbers.eight}</button>
          <button  className="numberButton">{numbers.nine}</button>
          <button  className="zeroButton">{numbers.zero}</button>
      </div>
    );
  };
