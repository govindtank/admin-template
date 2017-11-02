import React, { Component } from "react";
import { Link } from "react-router-dom";
import Content from '../Content/Content'

class SideBar extends Component {
    render() {
       
      return (
          <div>
        <div id="wrapper" className={this.props.toggled ? 'toggled': 'reduced'} >  
        <div id="sidebar-wrapper">
        
            <ul className="sidebar-nav">
             
            
                <li onClick={this.handleclick}>
                    <a ui-sref="dashboard"><i className="fa fa-bar-chart" ></i> Dashboard</a>
                </li>
                <li>
                    <a ui-sref="calculator" ><i className="fa fa-calculator"></i> Propietarios</a>
                </li>
                <li>
                    <a ui-sref="search"><i className="fa fa-search"></i> Inquilinos</a>
                </li>
                <li>
                    <a ui-sref="company"><i className="fa fa-building-o"></i> Inmuebles</a>
                </li>
                <li>
                    <a ui-sref="supplier"><i className="fa fa-suitcase"></i> Contratos</a>
                </li>
                <li>
                    <a ui-sref="dashboard"><i className="fa fa-file-text-o"></i> Reportes</a>
                </li>
                <li>
                    <a ui-sref="dashboard"><i className="fa fa-clipboard"></i> Recibos</a>
                </li>
            </ul>
        </div>

        </div>
        <Content toggled={this.props.toggled} />
        </div>
    );
}
}

export default SideBar;