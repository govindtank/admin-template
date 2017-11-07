import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

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
          <li className="dropdown messages-menu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-envelope-o" />
            <span className="label label-success">4</span>
          </a>
          <ul className="dropdown-menu">
            <li className="header">You have 4 messages</li>
            <li>
              <ul className="menu">
                <li>
                  <a href="#">
                    <div className="pull-left">
                      <img
                        src="dist/img/user2-160x160.jpg"
                        className="img-circle"
                        alt="User Image"
                      />
                    </div>
                    <h4>
                      Support Team
                      <small>
                        <i className="fa fa-clock-o" /> 5 mins
                      </small>
                    </h4>
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="pull-left">
                      <img
                        src="dist/img/user3-128x128.jpg"
                        className="img-circle"
                        alt="User Image"
                      />
                    </div>
                    <h4>
                      AdminLTE Design Team
                      <small>
                        <i className="fa fa-clock-o" /> 2 hours
                      </small>
                    </h4>
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="pull-left">
                      <img
                        src="dist/img/user4-128x128.jpg"
                        className="img-circle"
                        alt="User Image"
                      />
                    </div>
                    <h4>
                      Developers
                      <small>
                        <i className="fa fa-clock-o" /> Today
                      </small>
                    </h4>
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="pull-left">
                      <img
                        src="dist/img/user3-128x128.jpg"
                        className="img-circle"
                        alt="User Image"
                      />
                    </div>
                    <h4>
                      Sales Department
                      <small>
                        <i className="fa fa-clock-o" /> Yesterday
                      </small>
                    </h4>
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="pull-left">
                      <img
                        src="dist/img/user4-128x128.jpg"
                        className="img-circle"
                        alt="User Image"
                      />
                    </div>
                    <h4>
                      Reviewers
                      <small>
                        <i className="fa fa-clock-o" /> 2 days
                      </small>
                    </h4>
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer">
              <a href="#">See All Messages</a>
            </li>
          </ul>
          </li>
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
