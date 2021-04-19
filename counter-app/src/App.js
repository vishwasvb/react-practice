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

// constructor(){
//   super();
//   console.log('App-Constructor')
// }



//below constructor is called only once when the instance of a class is created
//this is good for initialising the properties of the instance,
constructor(props){
  super(props);
  console.log('App-Constructor', this.props);
}


//this is called after the component is rendered into the DOM, this is perfect to make ajax calls to get the data 
//from the server
componentDidMount(){
  //Ajac calls
  console.log('App-Mounted')
}

 //componentDidUpdate() {
            //this method is updated after the component is updated 
            //compare old state with the new state, old props with the new props,
            //if there is a change we can make a ajax request to get the new data from the server
            //if there is no change, no request 
            //console.log('Counter - Updated');
        //}

        componentDidUpdate(prevProps,prevState) {
          console.log('prevProps',prevProps);
          console.log('prevState',prevState);
          //if(prevProps.counter.value !== this.props.counter.value){
              //Ajax call and get new data from the server
         // }
      }

      componentWillUnmount(){
          //to clean up, cleanup timers, or listeners. else we will endup with memory leaks
          console.log("Counter - UnMount");
      }

//react will schedule a call with the render once it sees setState, all the childern elements will also gets 
//rendered
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
