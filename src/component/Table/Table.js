import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
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
                <Pagination />
              </div>
        );
    }
}

export default Table;