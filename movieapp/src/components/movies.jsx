import React, {Component} from 'react'
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService'
import Like from './like' 
import Pagination from './common/pagination'
import { Paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';

class Movies extends Component {
    state = {
        // count: 0
        //movies: getMovies(), //storing array of object to movies by calling getMovies

        movies:[],
        genres:[],
        currentPage:1,
        pageSize: 4
    };

    handleGenreSelect = (genre) =>{
        this.setState({selectedGenre:genre,
        currentPage:1
    })

    }

    componentDidMount(){
        const genres = [{_id:"",name: " All Genres"},...getGenres()]
        this.setState({
            movies:getMovies(),
            genres
        })
    }

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

    handlePageChange = (page) =>{
        this.setState({
            currentPage: page
        })
    }
    render () {
     const {length:count} = this.state.movies
     const {pageSize, currentPage, movies: allMovies, selectedGenre } = this.state;
     const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies
     const movies = Paginate(filtered, currentPage, pageSize);

        if(this.state.movies.length === 0 ) return <p>There are no movies in the </p>;
        return (
            // <h1>Movie List</h1> normal h1 tag
            // <h1>{2*2}</h1> expression
            // <h1>{name} </h1> variables
            // <h1>{this.state.count}</h1> object value
            //  <h1>{`My Name is ${name}`} </h1> // using back tick
            // <//h1></h1>

        <div style={{marginTop:20}}> 
            <div className='row'>
                <div className='col-3'>
                <ListGroup 
                    items={this.state.genres} 
                    textProperty = "name"
                    valueProperty = "_id"
                    onGenreSelect={this.handleGenreSelect}
                    selectedItem={selectedGenre}
                />
                </div>
            <div className='col'>
            <h3>Showing {filtered.length} movies in the database</h3>
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
                    {movies.map(movie => (  //looping array of objects using map function 
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
            </div>
            </div>
            <Pagination
                itemCount={filtered.length} 
                //itemCount='abc' //this is to check propType Error
                currentPage={currentPage}
                pageSize={pageSize} 
                onPageChange={this.handlePageChange}
            />
        </div> 
            
        );
    }
}

export default Movies;