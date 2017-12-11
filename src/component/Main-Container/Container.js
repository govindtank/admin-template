import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar';
import Content from '../Content/Content';

class Container extends Component {
    render() {
        return (

               // <div id="wrapper" className={'toggled'} >
            <div id="wrapper" className={this.props.toggled ? 'toggled': 'reduced'} >  
             
         
                <SideBar toggled={this.props.toggled}/>
                <Content />
            </div>
        );
    }
}

export default Container;