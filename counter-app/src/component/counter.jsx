import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (
             // To avoid the inclusion of div below the root, we wrap inbetween <React.Fragment> tag
            <React.Fragment>
                <h1>Hello World</h1>
                <button>Increment</button>
            </React.Fragment>)


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
}
 
export default Counter;