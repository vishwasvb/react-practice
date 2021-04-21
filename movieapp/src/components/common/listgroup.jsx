const ListGroup = (props) => {
    return ( 
        <div>
            <ul class="list-group">
                {props.items.map(item =>
                <li 
                    key={item._id} 
                    className={(item===props.selectedItem) ? "list-group-item active" : "list-group-item"}
                    onClick={() => props.onGenreSelect(item)}
                >{item.name}</li>)}
            </ul>
        </div>
     );
}
 
export default ListGroup;