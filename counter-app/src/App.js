import React, { Component } from 'react';
import './App.css';

import  Counters from './component/counters';
import NavBar from './component/navbar';


class App extends Component {

  state = { 
    counters: [
        { id: 1, value: 4 }, // suppose if we change the state to 4 this won't change
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
    ]
 };
 handleIncrement = counter => {
    //  console.log('Inside handleIncrement');
 const counters = [...this.state.counters];
 const index = counters.indexOf(counter);
 counters[index] ={...counter};
 counters[index].value++;
 this.setState({counters});
 
    
}


handleDecrement = counter => {
    //  console.log('Inside handleIncrement');
 const counters = [...this.state.counters];
 const index = counters.indexOf(counter);
 counters[index] ={...counter};
 counters[index].value--;
 this.setState({counters});
 
    
}

 handleDelete = (counterId) => {
    // console.log('Event handler called', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters:counters})
 };
 handleReset = () => {
     const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
     });
     this.setState({ counters:counters});
 };
  render(){
    return (
      <React.StrictMode>
        <main className="container">
          {/* <NavBar totalCounters={this.state.counters.length} /> */}
          <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length} />
          <Counters 
            counters = {this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset = {this.handleReset}
            />
            
        </main>

      </React.StrictMode>
    );
  }
}

export default App;
