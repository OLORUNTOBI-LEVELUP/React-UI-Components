import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor(props) {

    super(props);

   

  

  render() {
    return (
      <div>
        <div className="app">
          <Display total={this.state.total} />
          <div className="keys">
            <NumberButton press={this.press} />
            <ActionButton />
          </div>
        </div>
      </div>
    );
  }
};

export default App;