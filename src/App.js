import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Hello from './components/Hello';
import BeastList from './components/BeastList';

function App() {
  return (
    <div id="App" className="App">
      <Greeting message="Greetings" namae="Miako"/>
      <Hello namae="Miako"/>
      <BeastList />
    </div>
  );
}

export default App;
