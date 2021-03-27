import React, {Component} from 'react'

class Movies extends Component {
    state = {
        count: 0
     }
    render () {
        let name='Vishwas';
        return (
            // <h1>Movie List</h1> normal h1 tag
            // <h1>{2*2}</h1> expression
            // <h1>{name} </h1> variables
            // <h1>{this.state.count}</h1> object value
             <h1>{`My Name is ${name}`} </h1> // using back tick

            // <//h1></h1>
        );
    }
}

export default Movies;