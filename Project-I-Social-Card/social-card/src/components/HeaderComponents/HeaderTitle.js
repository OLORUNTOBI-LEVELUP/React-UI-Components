import React from "react";
import "./Header.css";
import moment from 'moment';


const text = {
  text: 'Lambda School',
  text1: '@LambdaSchool'
}
const HeaderTitle = () => {
  return (
 
      <div className="content">
        <h5>{text.text}</h5>
        <h6>{text.text1} . {moment().format("MMM Do YY")}</h6>
      </div>
      
    
  );
};

export default HeaderTitle;
