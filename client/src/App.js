import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Body from './components/Body';
import NavBar from './components/NavBar';
import Home from './screens/Home';
import SignIn from './screens/SignIn';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/sign_in" component={SignIn} />
      </BrowserRouter>
    </div>
  );
}


export default App;
