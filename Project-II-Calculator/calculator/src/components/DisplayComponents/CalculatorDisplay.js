import React from 'react';
import './Display.css';




const Display = (data) => {
    return (
      <div className="display">
        <div className="numberDisplay">{data.total}</div>
      </div>
    );
  };
  
  export default Display;