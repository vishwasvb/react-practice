import Like from './like'  

const MoviesTable = (props) => {
    const {movies,onLike,onDelete,onSort}=props;
    return ( 
        <table className="table">
        <thead>
            <tr>
                <th onClick={onSort}>Title</th>
                <th onClick={onSort}>Genre</th>
                <th onClick={onSort}>Stock</th>
                <th onClick={onSort}>Rate</th>
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
 
export default MoviesTable;