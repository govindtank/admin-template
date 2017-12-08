import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar';
import Content from '../Content/Content';

class Container extends Component {
    render() {
        return (
            // <div id="wrapper" className={this.props.toggled ? 'toggled': 'reduced'} >  
             
            <div id="wrapper" className={'toggled'} >
                <SideBar />
                <Content />
            </div>
        );
    }
}

export default Container;