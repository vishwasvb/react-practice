import logo from './logo.svg';
import {Route,Switch,Redirect} from 'react-router-dom';

import './App.css';

import NavBar from './components/navBar';
import Movies from './components/movies';
import React from 'react';
import Customers from "./components/customers";
import Rentals from './components/rental';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';

function App() {
  return (
   <React.Fragment>
     <NavBar />
      <main role="main" class="container">
        <Switch>
          <Route path='/login-form' component={LoginForm} />
          <Route path='/movies/:id' component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path='/not-found' component={NotFound} />
          <Route path="/" exact component={Movies} />
          <Redirect to='/not-found'/>
        </Switch>
      </main>
   </React.Fragment>
  );
}

export default App;
