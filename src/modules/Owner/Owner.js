import React, { Component } from "react";
import Owners from "../../config/owner";

class Owner extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <h4>Propietarios</h4>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group pull-right" style={{ width: 300 }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar Propietarios..."
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table
                  id="mytable"
                  className="table table-bordred table-striped"
                >
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" id="checkall" />
                      </th>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Email</th>
                      <th>Contact</th>
                      <th>Edit</th>

                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Owners.map(owner => (
                      <tr key={owner.id}>
                        <td>
                          <input type="checkbox" className="checkthis" />
                        </td>
                        <td>{owner.first_name}</td>
                        <td>{owner.last_name}</td>
                        <td>{owner.email}</td>
                        <td>{owner.phone}</td>
                        <td>
                          <p
                            data-placement="top"
                            data-toggle="tooltip"
                            title="Edit"
                          >
                            <button
                              className="btn btn-primary btn-xs"
                              data-title="Edit"
                              data-toggle="modal"
                              data-target="#edit"
                            >
                              <span className="glyphicon glyphicon-pencil" />
                            </button>
                          </p>
                        </td>
                        <td>
                          <p
                            data-placement="top"
                            data-toggle="tooltip"
                            title="Delete"
                          >
                            <button
                              className="btn btn-danger btn-xs"
                              data-title="Delete"
                              data-toggle="modal"
                              data-target="#delete"
                            >
                              <span className="glyphicon glyphicon-trash" />
                            </button>
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="clearfix" />
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
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Owner;
