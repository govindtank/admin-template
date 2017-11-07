import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import Message from '../Message/Message'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  handleclick = () => {
    console.log('hey listen '+ this.state.active)
    this.setState(prevState => ({
      active: !prevState.active
    }));
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse" style={{ marginBottom: 0 }}>
          <div className="navbar-header" style={{ width: 200 }}>
            <a className="navbar-brand" href="#">
              WebSiteName
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li onClick={this.handleclick}>
              <a>
                <span className="glyphicon glyphicon-menu-hamburger" />
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
         
            <Message />
      
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-log-in" /> Login
              </a>
            </li>
          </ul>
        </nav>
        <SideBar toggled={this.state.active}/>
      </div>
    );
  }
}

export default Nav;
