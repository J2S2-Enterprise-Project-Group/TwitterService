import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MainContainer } from './container/main-container/main-container';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <MainContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
