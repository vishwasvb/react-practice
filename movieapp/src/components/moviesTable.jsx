 import React, {Component} from 'react';
 import Like from './like' 
 
class MoviesTable extends Component {
    riseSort = (path) => {
        //console.log(path);

        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc')? 'desc' : 'asc';
        else{
            sortColumn.path=path;
            sortColumn.order='asc';
        }
        this.props.onSort(sortColumn);
    }
    render(){
        const {movies,onDelete,onLike,sortColumn}=this.props;
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={() => this.riseSort('title')}>Title</th>
                        <th onClick={() => this.riseSort('genre.name')}>Genre</th>
                        <th onClick={() => this.riseSort('numberInStock')}>Stock</th>
                        <th onClick={() => this.riseSort('dailyRentalRate')}>Rate</th>
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
                            <td>
                                <Like 
                                    likeStatus={movie.liked} 
                                    onLike={() => onLike(movie)}
                                />
                            </td>
                            <td><button onClick={() => onDelete(movie)} class="btn btn-danger">Delete</button></td>
                        </tr>
            
                        ))}
                        
                    </tbody>
                </table>
                 );
        
    }
}

export default MoviesTable;

// const MoviesTable = (props) => {
//     const {movies,onLike,onDelete,onSort}=props;
//     return ( 
//         <table className="table">
//         <thead>
//             <tr>
//                 <th onClick={() => onSort('title')}>Title</th>
//                 <th onClick={() => onSort('genre.name')}>Genre</th>
//                 <th onClick={() => onSort('numberInStock')}>Stock</th>
//                 <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
//                 <th>Like</th>
//                 <th>Action</th>
//             </tr>
//         </thead>
//         <tbody>
//             {movies.map(movie => (  //looping array of objects using map function 
//                 <tr key={movie._id}>
//                 <td>{movie.title}</td>
//                 <td>{movie.genre.name}</td>    {/*this is comment*/}
//                 <td>{movie.numberInStock}</td>
//                 <td>{movie.dailyRentalRate}</td>
//                 <td>
//                     <Like 
//                         likeStatus={movie.liked} 
//                         onLike={() => onLike(movie)}
//                     />
//                 </td>
//                 <td><button onClick={() => onDelete(movie)} class="btn btn-danger">Delete</button></td>
//             </tr>

//             ))}
            
//         </tbody>
//     </table>
//      );
// }
 
// export default MoviesTable;