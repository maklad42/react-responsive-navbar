import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="nav-logo" onClick={() => this.setOpen()}>
          Logo
        </Link>
        {/* <ul className={'nav-links'}> */}
        <ul
          className={
            this.props.state.menuopen ? 'nav-links active' : 'nav-links'
          }
        >
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              onClick={() => this.props.setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link"
              onClick={() => this.props.setOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/shop"
              className="nav-link"
              onClick={() => this.props.setOpen(false)}
            >
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => this.props.setOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div
          onClick={() => this.props.setOpen(!this.props.state.menuopen)}
          className="nav-icon"
        >
          {this.props.state.menuopen ? <FiX /> : <FiMenu />}
        </div>
      </nav>
    );
  }
}

export default Navbar;
