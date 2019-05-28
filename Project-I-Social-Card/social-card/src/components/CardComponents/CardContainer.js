import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => {
    return (
      <div className="cardcontainer">
            <a href="https://www.w3schools.com/howto/howto_css_cards.asp"><CardBanner /><CardContent /></a>
            
      </div>
    );
  };
  
  export default CardContainer;