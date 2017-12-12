import React, { Component } from "react";
import Owners from "../../config/owner";
import Modal from "../../component/Modal/Modal";
import Pagination from "../../component/Pagination/Pagination";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";



class Owner extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={Owners} striped hover>
          <TableHeaderColumn isKey dataField="id">
            Product ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="first_name">Nombre</TableHeaderColumn>
          <TableHeaderColumn dataField="last_name">Apellido</TableHeaderColumn>
          <TableHeaderColumn dataField="email">Email</TableHeaderColumn>
          <TableHeaderColumn dataField="phone">telefono</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Owner;
