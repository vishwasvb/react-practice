import React, {Component} from 'react'
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        // count: 0
        movies: getMovies() //storing array of object to movies by calling getMovies
     }

     handleDelete = (movie) => {
         const movies = this.state.movies.filter(m => m._id !== movie._id)
         this.setState({
             movies: movies
         })
     };

    render () {
        let name='Vishwas';

        if(this.state.movies.length === 0 ) return <p>There are no movies in the </p>;
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => (  //looping array of objects using map function 
                        <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>    {/*this is comment*/}
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><button onClick={() => this.handleDelete(movie)} class="btn btn-danger">Delete</button></td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        );
    }
}

export default Movies;