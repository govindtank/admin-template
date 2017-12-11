import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <li className="dropdown messages-menu">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          <i className="fa fa-envelope-o" />
          <span className="label label-success">4</span>
        </a>
        <ul className="dropdown-menu">
          <li className="header">notificaciones</li>
          <li>
            {/* inner menu: contains the actual data  */}
            <ul className="inner-menu">
              <li>
                <a href="#">
                  <i className="fa fa-users text-aqua" /> 5 new members joined today
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-users text-aqua" /> 5 new members joined today
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-users text-aqua" /> 5 new members joined today
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-users text-aqua" /> 5 new members joined today
                </a>
              </li>
            </ul>
          </li>
          <li className="footer">
            <a href="#">Ver todo</a>
          </li>
        </ul>
      </li>
    );
  }
}

export default Message;
