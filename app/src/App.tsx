import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
