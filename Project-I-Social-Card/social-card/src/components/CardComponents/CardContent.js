import React from 'react';
import './Card.css';

const content = {
  text: 'Get Started with React',
  text2: 'React makes it painless to create interactive UIs. Design simple view for each state in your application.',
  text3: 'reactjs.org'
}
const CardContent = () => {
    return (
      <div className="cardcontent">
           <h5>{content.text}</h5>
          <p className="paragraph">{content.text2}</p>
          <p className="paragraph1">{content.text3}</p>
          
      </div>
    );
  };
  
  export default CardContent;