import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './container/home';
import About from './container/about';
import appStyle from './App.css';
import logo from './logo.svg';
//import pg from './ic_add_alert_black_18dp.png';
import style from './style.css';

function App() {
  return (
    <div className={appStyle['container']}>
      <img src={ logo } className={ appStyle['App-logo'] }/>
      <ul className={ appStyle['list'] }>
        <li className={style.li}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
      </ul>
      <div className={ appStyle['wrap'] }>
        <Switch>
          <Route path="/about" component={ About }/>
          <Route
            exact
            path="/"
            render={ props => <Home/> }
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
