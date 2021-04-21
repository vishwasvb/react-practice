const ListGroup = (props) => {
    return ( 
        <div>
            <ul class="list-group">
                {props.items.map(item =>
                <li key={item._id} class="list-group-item " onClick={props.onGenreSelect}>
                    {item.name}</li>)}
            </ul>
        </div>
     );
}
 
export default ListGroup;