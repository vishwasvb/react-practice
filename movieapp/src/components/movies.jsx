import React, {Component} from 'react'
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        // count: 0
        movies: getMovies()
     }
    render () {
        let name='Vishwas';
        return (
            // <h1>Movie List</h1> normal h1 tag
            // <h1>{2*2}</h1> expression
            // <h1>{name} </h1> variables
            // <h1>{this.state.count}</h1> object value
            //  <h1>{`My Name is ${name}`} </h1> // using back tick
            // <//h1></h1>


            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => (
                        <tr>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        );
    }
}

export default Movies;