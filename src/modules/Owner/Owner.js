import React, { Component } from "react";
import Owners from "../../config/owner";
import Modal from "../../component/Modal/Modal";
import Pagination from "../../component/Pagination/Pagination";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class Owner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      currPage: 1
    };
  }
  render() {
    const { currPage } = this.state;
    const selectRowProp = {
      mode: "checkbox",
      bgColor: "pink",
      clickToSelect: true
    };
    const options = {
      sizePerPageList: [5, 10, 15, 20],
      sizePerPage: 10,
      page: currPage,
      sortName: "id",
      sortOrder: "asc"
    };
    return (
      <div>
        <h3>Propietarios</h3>
        <BootstrapTable
          data={Owners}
          selectRow={selectRowProp}
          striped
          hover
          pagination={true}
          options={options}
        >
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
