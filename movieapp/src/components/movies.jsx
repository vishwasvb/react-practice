import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

import {Link} from 'react-router-dom';
import Pagination from './common/pagination';
import {Paginate} from '../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import SearchBox from './common/searchBox';

class Movies extends Component {
    state = { 
        // movies: getMovies(),
        movies:[],
        genres:[],
        currentPage: 1,
        pageSize: 4,
        searchQuery: '',
        sortColumn: {path: 'title', order: 'asc'}
     };

     componentDidMount() {
         const genres = [{_id:"",name: "All Genres"}, ...getGenres()]
         this.setState({
             movies: getMovies(),
             genres: genres
         })
     };

    handleGenreSelect = (genre) => {
        // console.log(genre);
        this.setState({
            selectedGenre: genre,
            searchQuery: '',
            currentPage: 1,

        })
    }

    handleDelete = (movie) => {
        // console.log(movie);
        const movies = this.state.movies.filter( m => m._id !== movie._id);
        // this.setState({movies: movies})

        // in modern js we can use the below
        this.setState({movies})
    };
    handleLiked = (movie) =>{
        // console.log('like clicked');
        const movies=[...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    };
    handlePageChange = (page) => {
        // console.log('page changed')
        this.setState({
            currentPage: page
        })
    };

    handleSearch = query => {
        this.setState({searchQuery: query, selectedGenre: null, currentPage: 1})
    }
    
    handleSort = (sortColumn) => {
        this.setState({
            sortColumn
        })
    }

    getPagedData = () => {
        // const {length: count} = this.state.movies
        const {pageSize, searchQuery, currentPage, movies: allMovies,selectedGenre, sortColumn  } = this.state;
        // const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id): allMovies;
        let filtered = allMovies;
        if(searchQuery)
            filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        else if(selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id)
        const sorted= _.orderBy(filtered,[sortColumn.path], [sortColumn.order]);
        const movies = Paginate(sorted, currentPage, pageSize);
        console.log("totalCount of movies:",filtered.length)

        return {totalCount: filtered.length, data: movies}

        
    }
    
    render() { 
        
        if (this.state.movies.length === 0) return <p>There are no movies in the database</p>;

        const { 
            pageSize, 
            currentPage, 
            // selectedGenre,
            sortColumn,
            searchQuery,
            // movies: allMovies 
            } = this.state;
        
        // console.log(this.state.generes);
        const {totalCount, data: movies} = this.getPagedData();
        console.log("totalCount in render",totalCount)
         
        return (
            
            <React.Fragment>
                
                <div className="row">
                    <div className="col-3">
                        <ListGroup 
                            items={this.state.genres}
                            // textProperty = "name"
                            // valueProperty = "_id"
                            onGenreSelect={this.handleGenreSelect}
                            selectedItem={this.state.selectedGenre}
                        />
                    </div>
                    <div className="col">
                        <Link 
                            to='/movies/new'
                            className="btn btn-primary"
                            style={{marginBottom: 20 }}>
                                New Movie
                        </Link>
                        <SearchBox value={searchQuery} onSearch={this.handleSearch}/>
                        <p>Showing {totalCount} movies in the database </p>
                        <MoviesTable 
                            movies={movies} 
                            onLike={this.handleLiked} 
                            onDelete={this.handleDelete}
                            sortColumn={this.state.sortColumn}
                            onSort = {this.handleSort}
                        />
                    </div>
                </div>
                <div style={{marginLeft:"45%"}}>
                <Pagination 
                            itemCount={totalCount}
                            // itemsCount="abc" // this is to check propType Error
                            pageSize={pageSize}  
                            currentPage={currentPage} 
                            onPageChange={this.handlePageChange} 
                        />
                        {console.log("totalCount:",totalCount)}

                </div>
                
        
            </React.Fragment>
        ); 
        
            
    }
}
 
export default Movies;
































































































































































// // import React, {Component} from 'react'
// // import {getMovies} from '../services/fakeMovieService';
// // import {getGenres} from '../services/fakeGenreService'
// // import Pagination from './common/pagination'
// // import { Paginate } from '../utils/paginate';
// // import ListGroup from './common/listGroup';
// // import MoviesTable from './moviesTable'
// // import {Link} from 'react-router-dom';
// // import _ from 'lodash';

// // class Movies extends Component {
// //     state = {
// //         // count: 0
// //         //movies: getMovies(), //storing array of object to movies by calling getMovies

// //         movies:[],
// //         genres:[],
// //         currentPage:1,
// //         pageSize: 4,
// //         sortColumn:{path:'title', order:'asc'}
// //     };

// //     handleGenreSelect = (genre) =>{
// //         this.setState({selectedGenre:genre,
// //         currentPage:1
// //         })  
// //     }

// //     handleSort = (sortColumn) =>{
// //         // console.log(path);
// //         this.setState({
// //             sortColumn
// //         });
// //     }

// //     componentDidMount(){
// //         const genres = [{_id:"",name: " All Genres"},...getGenres()]
// //         this.setState({
// //             movies:getMovies(),
// //             genres
// //         })
// //     }

// //      handleDelete = (movie) => {
// //          const movies = this.state.movies.filter(m => m._id !== movie._id)
// //          this.setState({
// //              movies: movies
// //          })
// //      };

// //      handleLike = (movie) => {
// //         //  console.log("like clicked");
// //         const movies =[...this.state.movies];
// //         const index = movies.indexOf(movie);
// //         movies[index] = {...movies[index]};
// //         movies[index].liked = !movies[index].liked;
// //         this.setState({movies});
// //     }

// //     handlePageChange = (page) =>{
// //         this.setState({
// //             currentPage: page
// //         })
// //     }

// //     getPagedData = () => {
// //         // const {length:count} = this.state.movies
// //         const {pageSize, currentPage, movies: allMovies, selectedGenre, sortColumn } = this.state;
// //         const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies
// //         const sorted = _.orderBy(filtered,[sortColumn.path],[sortColumn.order]);
// //         const movies = Paginate(sorted, currentPage, pageSize);

// //         return {totalCount: filtered.length, data:movies, pageSize, currentPage, selectedGenre}
// //     }
// //     render () {
// //         if(this.state.movies.length === 0 ) return <p>There are no movies in the </p>;

// //         const {totalCount, data, pageSize, currentPage, selectedGenre} = this.getPagedData();
// //         return (
// //             // <h1>Movie List</h1> normal h1 tag
// //             // <h1>{2*2}</h1> expression
// //             // <h1>{name} </h1> variables
// //             // <h1>{this.state.count}</h1> object value
// //             //  <h1>{`My Name is ${name}`} </h1> // using back tick
// //             // <//h1></h1>

// //         <div style={{marginTop:20}}> 
// //             <div className='row'>
// //                 <div className='col-3' style={{marginTop:40}}>
// //                 <ListGroup 
// //                     items={this.state.genres} 
// //                     textProperty = "name"
// //                     valueProperty = "_id"
// //                     onGenreSelect={this.handleGenreSelect}
// //                     selectedItem={selectedGenre}
// //                 />
// //                 </div>
// //                 <div className='col'>
// //                     <Link to='/movies/new' 
// //                     className='btn btn-primary'
// //                     style={{marginBottom:10}}>New Movie</Link>
// //                     <h3>Showing  {totalCount} movies in the database</h3>
// //                     <MoviesTable
// //                         movies={data}
// //                         onLike={this.handleLike} 
// //                         onDelete={this.handleDelete}
// //                         onSort={this.handleSort}
// //                         sortColumn={this.state.sortColumn}
// //                     />
// //                 </div>
// //             </div>
// //             <Pagination
// //                 itemCount= {totalCount}
// //                 //itemCount='abc' //this is to check propType Error
// //                 currentPage={currentPage}
// //                 pageSize={pageSize} 
// //                 onPageChange={this.handlePageChange}
// //             />
// //         </div> 
            
// //         );
// //     }
// // }

// // export default Movies;