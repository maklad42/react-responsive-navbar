import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  setOpen() {
    console.log('Opened!');
  }
  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="nav-logo" onClick={() => this.setOpen()}>
          Logo
        </Link>
        <ul className={'nav-links'}>
          {/* <ul className={props.state.open ? 'nav-links active' : 'nav-links'}> */}
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => this.setOpen()}>
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link"
              onClick={() => this.setOpen()}
            >
              About
            </Link>
            <Link
              to="/shop"
              className="nav-link"
              onClick={() => this.setOpen()}
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => this.setOpen()}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
