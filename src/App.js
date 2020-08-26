import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuAppBar from './components/Header/header'
import RecipeReviewCard from './components/Card/card'
import loginImage from '../src/utilities/images/login.jpg'
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom'
import Home from './components/Home/home'
import Cart from './components/Cart/cart'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    
     
      {/* <RecipeReviewCard/> */}
      <Router>
          <Switch>
            <Route exact path='/' component={RecipeReviewCard} />
            <Route path='/home' component={Home} />
            <Route path='/cart' component={Cart}/>
            {/* <Route path="/contact" component={Contact} /> */}
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
