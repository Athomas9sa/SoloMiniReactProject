import React, { Component } from 'react';
// import { Container } from "bloomer";
// import "bulma/css/bulma.css";
import './App.css';
import Board from './components/Board';

class App extends Component {
  state = { 
    type: '',
    text: "",
    error:false,
    errorMessage: "errorMessage"
  };
  render() 
  {
    return (
      <div className="App">
        <Board />
      </div>
    )
  };
}

export default App;