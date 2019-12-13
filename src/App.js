import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeeklySongListItem from './components/WeeklySongListItem'

class App extends Component {
  render(){
  return (
    <div className="App">
      <WeeklySongListItem
         order="01"
         title="Em Không Thể"
         singer="Tiên Tiên, Touliver"
         view={3000}
      />
    </div>
  );
}
}

export default App;
