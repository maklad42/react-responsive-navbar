import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Shop from './components/Shop';
import About from './components/About';

class App extends React.Component {
  state = {
    menuopen: false,
  };
  setOpen = (op) => {
    const menuopen = op;
    this.setState({ menuopen });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar state={this.state} setOpen={this.setOpen} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
