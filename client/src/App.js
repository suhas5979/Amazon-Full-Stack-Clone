import React from 'react';
import Header from './components/header';
import './css/header.css';
import Body from './components/body';
import './css/body.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
