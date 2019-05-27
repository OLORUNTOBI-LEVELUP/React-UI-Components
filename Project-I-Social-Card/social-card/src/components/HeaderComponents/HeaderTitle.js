import React from "react";
import "./Header.css";
import moment from 'moment';

const HeaderTitle = () => {
  return (
 
      <div className="content">
        <h5>Lambda School </h5>
        <h6>@lambdaschool . {moment().format("MMM Do YY")}</h6>
      </div>
      
    
  );
};

export default HeaderTitle;
