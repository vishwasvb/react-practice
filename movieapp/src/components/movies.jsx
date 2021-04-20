import React, {Component} from 'react'
import {getMovies} from '../services/fakeMovieService';
import Like from './like' 
import Pagination from './pagination'

class Movies extends Component {
    state = {
        // count: 0
        movies: getMovies(), //storing array of object to movies by calling getMovies
        pageSize: 4
    };

     handleDelete = (movie) => {
         const movies = this.state.movies.filter(m => m._id !== movie._id)
         this.setState({
             movies: movies
         })
     };

     handleLike = (movie) => {
        //  console.log("like clicked");
        const movies =[...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    }

    handlePageChange = () =>{

    }
    render () {
     const {length:count} = this.state.movies

        if(this.state.movies.length === 0 ) return <p>There are no movies in the </p>;
        return (
            // <h1>Movie List</h1> normal h1 tag
            // <h1>{2*2}</h1> expression
            // <h1>{name} </h1> variables
            // <h1>{this.state.count}</h1> object value
            //  <h1>{`My Name is ${name}`} </h1> // using back tick
            // <//h1></h1>

        <div> 
            <h3>Showing {this.state.movies.length} movies in the database</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th>Like</th>
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
                        <td><Like likeStatus={movie.liked} onLike={() => this.handleLike(movie)}/></td>
                        <td><button onClick={() => this.handleDelete(movie)} class="btn btn-danger">Delete</button></td>
                    </tr>

                    ))}
                    
                </tbody>
            </table>
            <Pagination itemCount={count} pageSize={this.state.pageSize} onPageChange={this.handlePageChange}/>
        </div> 
            
        );
    }
}

export default Movies;