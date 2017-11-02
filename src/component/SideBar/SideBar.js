import React, { Component } from "react";
import Content from '../Content/Content';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const menuOptions = [
    {   
        id: 1,
        icon: 'fa fa-bar-chart',
        name: 'Dashboard',
        path:'/dashboard'
    },
    {
        id: 2,
        icon: 'fa fa-address-card-o',
        name: 'Propietarios',
        path:'/owner'
    },
    {   
        id: 3,
        icon: 'fa fa-users',
        name: 'Inquilinos',
        path:'/householder'
    },
    {
        id: 4,
        icon: 'fa fa-building-o',
        name: 'Inmuebles',
        path:'/house'
    },
    {
        id: 5,
        icon: 'fa fa-suitcase',
        name: 'Contratos',
        path:'/contract'
    },
    {
        id: 6,
        icon: 'fa fa-file-text-o',
        name: 'Reportes',
        path:'/report'
    },
    {
        id: 7,
        icon: 'fa fa-money',
        name: 'Recibos',
        path:'/bill'
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
        <BrowserRouter>
        <Content toggled={this.props.toggled} />
        </BrowserRouter>
        </div>
    );
}
}

export default SideBar;