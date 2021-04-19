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
    render(){
        return ( 
        <div>
            <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">
                Reset
            </button>
            { this.props.counters.map(counter => 
            // <Counter 
            //     key={counter.id} // key attribute is used internally by React, we cannot access in counter component 
            //     value={counter.value} 
            //     onDelete={this.handleDelete} 
            //     id={counter.id} 
            // />
            <Counter 
                key={counter.id} // key attribute is used internally by React, we cannot access in counter component 
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                counter = {counter}
            />
            )}
            
        </div> );
    }
    
}
 
export default Counters;
