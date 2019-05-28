import React from 'react';
import './Button.css';

const signs = {
    division: "/",
    multiplication: "X",
    subtraction: "-",
    addition: "+",
    Equalsto: "="
}

const ActionButton = () => {
    return (
      <div className="action">
        <button className="actionButton">{signs.division}</button>
        <button className="actionButton">{signs.multiplication}</button>
        <button className="actionButton">{signs.subtraction}</button>
        <button className="actionButton">{signs.addition}</button>
        <button className="actionButton">{signs.Equalsto}</button>
      </div>
    );
  };
  
  export default ActionButton