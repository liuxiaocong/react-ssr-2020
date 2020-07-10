import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './container/home';
import About from './container/about';
import './App.css';

function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/about" component={About} />
        <Route
          exact
          path="/"
          render={props => <Home />}
        />
      </Switch>
    </div>
  );
}

export default App;
