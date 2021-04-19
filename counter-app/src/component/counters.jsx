// import React, { Component } from 'react';
// import Counter  from './counter'

// class Counters extends Component {
//     state = {
//         counters : [
//             {id:1, value: 10},
//             {id:2, value: 0},
//             {id:3, value: 20},
//             {id:4, value: 0}
//         ]
//     }
//     render() {
//         return (
//             // <div>
//             //     {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value}/>)}
//             // </div>
//             <div>
//                 {this.state.counters.map(counter =>
//                 <Counter key={counter.id} countervalue={counter.value}>
//                     <h1>Counter #{counter.id}</h1>
//                 </Counter>)}
//             </div>
//         );
//     }
// }

// export default Counters;

import React, { Component } from 'react';

import Counter from './counter';

class Counters extends Component {
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
    render() { 
        
        return ( 
        <div>
            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">
                Reset
            </button>
            { this.state.counters.map(counter => 
            // <Counter 
            //     key={counter.id} // key attribute is used internally by React, we cannot access in counter component 
            //     value={counter.value} 
            //     onDelete={this.handleDelete} 
            //     id={counter.id} 
            // />
            <Counter 
                key={counter.id} // key attribute is used internally by React, we cannot access in counter component 
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                counter = {counter}
            />
            )}
            
        </div> );
    }
}
 
export default Counters;
