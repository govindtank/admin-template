import React, { Component } from "react";
import Owners from "../../config/owner";
// import Modal from "../../component/Modal/Modal";
import Pagination from "../../component/Pagination/Pagination";
import ReactTable from 'react-table'
import "react-table/react-table.css";



class Owner extends Component {
  render() {
    return (
      <div className="">
        <div className="row">
        <ReactTable
          data={Owners}
          columns={[
            {
              Header: "Propietarios",
              columns: [
                {
                  Header: "Nombre",
                  accessor: "first_name"
                },
                {
                  Header: "Apellido",
                  id: "lastName",
                  accessor: d => d.last_name
                },{
                  Header: "Email",
                  accessor: "email"
                },{
                  Header: "Telefono",
                  accessor: "phone"
                },
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        </div>
      </div>
    );
  }
}

export default Owner;
