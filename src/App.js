import React, { Component } from 'react';
import './App.css';
import './component/SideBar/Sidebar.css'
import Nav from './component/Nav/Nav'
import Container from './component/Main-Container/Container'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }
  handleclick = () => {
    console.log('hey listen '+ this.state.active)
    this.setState(prevState => ({
      active: !prevState.active
    }));
  };
  render() {
    return (
    
      <div className="App">
        <Nav onClick={this.handleclick.bind(this)}/>
        <Container toggled={this.state.active}/>       
      </div>
 
    );
  }
}

export default App;
