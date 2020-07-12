import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './container/home';
import About from './container/about';
import './App.css';
import logo from './logo.svg';
import style from './style.css';

function App() {
  return (
    <div className={'container'}>
      <img src={ logo } className={ 'App-logo' }/>
      <ul className={ 'list' }>
        <li className={style.li}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
      </ul>
      <div className={ 'wrap' }>
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
