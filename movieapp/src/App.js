import logo from './logo.svg';
import {Route,Switch} from 'react-router-dom';

import './App.css';

import NavBar from './components/navBar';
import Movies from './components/movies';
import React from 'react';
import Customers from "./components/customers";
import Rentals from './components/rental';

function App() {
  return (
   <React.Fragment>
     <NavBar />
      <main role="main" class="container">
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/" component={Movies} />

        </Switch>
      </main>
   </React.Fragment>
  );
}

export default App;
