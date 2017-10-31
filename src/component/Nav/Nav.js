import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse" style={{marginBottom:0}}>
        <div class="navbar-header" style={{width:250}}>
          <a class="navbar-brand" href="#">
            WebSiteName
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
          <a>
          <span class="glyphicon glyphicon-menu-hamburger"/>
          </a>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contac</Link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#">
              <span class="glyphicon glyphicon-user" /> Sign Up
            </a>
          </li>
          <li>
            <a href="#">
              <span class="glyphicon glyphicon-log-in" /> Login
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
