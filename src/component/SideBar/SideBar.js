import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component {
    render() {
      return (
        <div id="wrapper" class="toggled" >  
        <div id="sidebar-wrapper">
        
            <ul class="sidebar-nav">
             
            
                <li>
                    <a ui-sref="dashboard"><i class="fa fa-bar-chart"></i> Dashboard</a>
                </li>
                <li>
                    <a ui-sref="calculator" ><i class="fa fa-calculator"></i> Calculadora</a>
                </li>
                <li>
                    <a ui-sref="search"><i class="fa fa-search"></i> Busqueda</a>
                </li>
                <li>
                    <a ui-sref="company"><i class="fa fa-building-o"></i> Compañia</a>
                </li>
                <li>
                    <a ui-sref="supplier"><i class="fa fa-suitcase"></i> Suplidores</a>
                </li>
                <li>
                    <a ui-sref="dashboard"><i class="fa fa-file-text-o"></i> Reportes</a>
                </li>
                <li>
                    <a ui-sref="dashboard"><i class="fa fa-clipboard"></i> Recibos</a>
                </li>
            </ul>
        </div>

        </div>
    );
}
}

export default SideBar;