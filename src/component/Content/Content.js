import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from  '../Dashboard/Dashboard'
import House from '../House/House'
import HouseHolder from '../HouseHolder/HouseHolder'
import Owner from '../Owner/Owner'
import Contract from '../Contract/Contract'

class Content extends Component {
    render() {
        console.log(this.props.toggled)
      return (
        <div id="page-content-wrapper" className={this.props.toggled ? 'toggled': 'reduced'}>
            <Switch>
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/owner' component={Owner} />
                <Route path='/householder' component={HouseHolder} />
                <Route path='/house' component={House} />
                <Route path='/contract' component={Contract} />
               
            </Switch>
        </div> 
    );
}
}

export default Content;
