import React from 'react';
import '../FooterComponents/Footer.css';

class Footer extends React.Component {
    constructor(props){
        super(props);
        
    }
   
  
    render(){
        return (
            <div className="footer">
            <i class="far fa-comment"></i>
            <i class="fas fa-retweet" onClick={this.IncrementItem}></i>
            <i class="far fa-heart"></i>
            <i class="far fa-envelope"></i>
          </div>
        );
    }
}

  
  export default Footer;