import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeeklySongListItem from './components/WeeklySongListItem'

class App extends Component {
  render(){
  return (
    <div className="App">
      <WeeklySongListItem
        order = {1}
        title={"Anh se khong on"}
        singer={"Anh Tú"}
        view={20}
      />
    </div>
  );
}
}

export default App;
