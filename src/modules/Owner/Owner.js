import React, { Component } from "react";
import Owners from "../../config/owner";
import Modal from "../../component/Modal/Modal";
import Pagination from "../../component/Pagination/Pagination";
import {
  BootstrapTable,
  TableHeaderColumn,
  InsertModalHeader
} from "react-bootstrap-table";

class Owner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      currPage: 1
    };
  }
  beforeClose(e) {
    alert(`[Custom Event]: Before modal close event triggered!`);
  }

  handleModalClose(closeModal) {
    // Custom your onCloseModal event here,
    // it's not necessary to implement this function if you have no any process before modal close
    console.log("This is my custom function for modal close event");
    closeModal();
  }
  createCustomModalHeader = (closeModal, save) => {
    return (
      <InsertModalHeader
        className="my-custom-class"
        title="This is my custom title"
        beforeClose={this.beforeClose}
        onModalClose={() => this.handleModalClose(closeModal)}
      />
      // hideClose={ true } to hide the close button
    );
  };

  handleDeleteButtonClick = onClick => {
    // Custom your onClick event here,
    // it's not necessary to implement this function if you have no any process before onClick
    console.log("This is my custom function for DeleteButton click event");
    onClick();
  };

  createCustomDeleteButton = onClick => {
    return (
      <button
        type="button"
        className="btn btn-danger react-bs-table-del-btn my-custom-class"
        onClick={e => this.handleDeleteButtonClick(onClick)}
      >
        <span>
          <i className="glyphicon glyphicon-remove" /> Delete
        </span>
      </button>
    );
  };
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
      sortOrder: "asc",
      insertModalHeader: this.createCustomModalHeader,
      deleteBtn: this.createCustomDeleteButton
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
          insertRow //insert add button
          deleteRow //delete row
          search
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
