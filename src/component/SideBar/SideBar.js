import React, { Component } from "react";
import { Link } from "react-router-dom";
import Content from '../Content/Content'

const menuOptions = [
    {   
        id: 1,
        icon: 'fa fa-bar-chart',
        name: 'Dashboard'
    },
    {
        id: 2,
        icon: 'fa fa-address-card-o',
        name: 'Propietarios'
    },
    {   
        id: 3,
        icon: 'fa fa-users',
        name: 'Inquilinos'
    },
    {
        id: 4,
        icon: 'fa fa-building-o',
        name: 'Inmuebles'
    },
    {
        id: 5,
        icon: 'fa fa-suitcase',
        name: 'Contratos'
    },
    {
        id: 6,
        icon: 'fa fa-file-text-o',
        name: 'Reportes'
    },
    {
        id: 7,
        icon: 'fa fa-money',
        name: 'Recibos'
    }
];

class SideBar extends Component {

    render() {
  
      return (
          <div>
        <div id="wrapper" className={this.props.toggled ? 'toggled': 'reduced'} >  
        <div id="sidebar-wrapper">
        
            <ul className="sidebar-nav">
             {menuOptions.map(option =>(
                <li onClick={this.handleclick} key={option.id} >
                    <a>
                         <i className={option.icon} ></i> 
                         {/* modificar esta parte para poner iconos grandes en reduced */}
                         <span className="">   {option.name}</span>
                    </a>
                 </li>
             ))}            
            </ul>
        </div>

        </div>
        <Content toggled={this.props.toggled} />
        </div>
    );
}
}

export default SideBar;