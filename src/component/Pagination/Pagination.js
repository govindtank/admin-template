import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        return (
            <div>
                <ul className="pagination pull-right">
                  <li className="disabled">
                    <a href="#">
                      <span className="glyphicon glyphicon-chevron-left" />
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="glyphicon glyphicon-chevron-right" />
                    </a>
                  </li>
                </ul>
            </div>
        );
    }
}

export default Pagination;