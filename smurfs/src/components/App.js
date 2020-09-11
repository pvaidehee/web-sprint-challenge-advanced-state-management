import React, { Component } from "react";
import "./App.css";
import {Switch, Route} from 'react-router-dom'
import Smurfs from './smurfs';

class App extends Component {
  render() {
    return (
      <>
      <Switch>
        <Route pathe = '/'  exact component ={Smurfs}/>
      </Switch>
      </>
      // <div className="App">
      //   <Smurfs/>
      //   <SmurfForm/>
      // </div>
    );
  }
}
export default App;