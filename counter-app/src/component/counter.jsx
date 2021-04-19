// import React, { Component } from 'react';

// class Counter extends Component {

//     // state = {
//     //     // count: 0

//     //     count: this.props.countervalue
//     // };
//     // handleIncrement = () => {
//     //     this.setState({
//     //         count: this.state.count + 1
//     //     })
//     // };

//     // handleDecrement = () => {
//     //     this.setState({
//     //         count: this.state.count - 1
//     //     })
//     // }

//     render() { 
//         return (
//             //every react comopnent has the property colled props and it is a plain js object
//             <div>
//                 {this.props.children}
//                 <button onClick={this.handleDecrement} className = "btn btn-danger">Decrement</button>
//                 <span style={{ fontSize:50 }} > {this.formatCount()} </span>
//                 <button onClick={this.handleIncrement} className = "btn btn-primary">Increment</button>
//             </div>
//         );

//     }
//     formatCount() {
//         const { count } = this.state;
//         return count === 0 ? 'Zero' : count;
//     }

//              // To avoid the inclusion of div below the root, we wrap inbetween <React.Fragment> tag
//         // React.createElement('h1');
//         // React.createElement('div');

//           // below statement gives error, because Createelement accepts only one parameter
//         // React.createElement('h1');

//         // return <h1>Hellow world</h1><Button>Increment</Button>;  // this statment gives error, because you cannot have 
//         // multiple elements as a react element

//                      // To avoid the above error, we wrap inbetween <div> tag
//         // <div>
//         //     <h1>Hello World</h1>
//         //     <button>Increment</button>
//         // </div>
// }
 
// export default Counter;

import React, { Component } from 'react'

class Counter extends Component {
    
    // state = {
    //     value: this.props.counter.value
    // };

    
    
    render() {
        // console.log("props",this.props) // every react component has the property called props and it is a plain JS object
        return (
            <div>
                {/* {this.props.children} */}
                <h4>{this.props.id}</h4>

                <button onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm">
                    Decrement
                </button>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
                    Increment
                </button>

                {/* <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">
                    Delete
                </button> */}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
               
            </div>
                );
    }
    formatCount() {
        const { value } = this.props.counter;
        const x = <h1>Zero</h1>; 
        return value === 0 ? x : value;
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}
export default Counter;
