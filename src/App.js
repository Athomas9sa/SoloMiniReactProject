import React, { Component } from 'react';
import Board from './components/Board';

class App extends Component {
  state = { 
    type: '',
    text: "",
    error:false,
    errorMessage: "errorMessage"
  };
  render() 
  { return (
        <Board />
    )
  };
}
export default App;
