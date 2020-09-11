import React, { Component } from "react";
import "./App.css";
import {Switch, Route} from 'react-router-dom'
import Smurfs from './smurfs';


class App extends Component {
  render() {
    return (
      <div className="App">
           <>
      <Switch>
        <Route pathe = '/'  exact component ={Smurfs}/>
      </Switch>
      </>
      </div>
    );
  }
}


export default App;