import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from  '../../modules/Dashboard/Dashboard'
import House from '../../modules/House/House'
import HouseHolder from '../../modules/HouseHolder/HouseHolder'
import Owner from '../../modules/Owner/Owner'
import Contract from '../../modules/Contract/Contract'

class Content extends Component {
    render() {
     
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
