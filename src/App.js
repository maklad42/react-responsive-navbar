import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Shop from './components/Shop.js';
import About from './components/About.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Router exact path="/" component={Home} />
          <Router exact path="/about" component={About} />
          <Router exact path="/shop" component={Shop} />
          <Router exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
