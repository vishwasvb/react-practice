import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0
    };
    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() { 
        return (

            <div>
                <button onClick={this.handleDecrement} className = "btn btn-danger">Decrement</button>
                <span style={{ fontSize:100 }} > {this.formatCount()} </span>
                <button onClick={this.handleIncrement} className = "btn btn-primary">Increment</button>
            </div>
        );

    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

             // To avoid the inclusion of div below the root, we wrap inbetween <React.Fragment> tag
        // React.createElement('h1');
        // React.createElement('div');

          // below statement gives error, because Createelement accepts only one parameter
        // React.createElement('h1');

        // return <h1>Hellow world</h1><Button>Increment</Button>;  // this statment gives error, because you cannot have 
        // multiple elements as a react element

                     // To avoid the above error, we wrap inbetween <div> tag
        // <div>
        //     <h1>Hello World</h1>
        //     <button>Increment</button>
        // </div>
}
 
export default Counter;