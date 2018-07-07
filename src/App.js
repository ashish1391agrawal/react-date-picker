import React, { Component } from 'react';
import './App.css';
import { DatePicker } from './components/DatePicker';

class App extends Component {

    selectedDate = (value) => {
      console.log('selected date====', value);
    };

  render() {
      const nowDate = new Date();
      const disabledValue = [new Date('12/1/2018'), new Date('11/5/2018'), new Date('12/7/2018'), new Date('6/6/2018')];
    return (
      <div className="App">
        <DatePicker onChange={this.selectedDate} value={new Date('12/31/2018')} disabledDays={disabledValue} />
      </div>
    );
  }
}

export default App;
