const ListGroup = (props) => {
    return ( 
        <div>
            <ul class="list-group">
                {props.items.map(item =><li class="list-group-item ">{item.name}</li>)}
            </ul>
        </div>
     );
}
 
export default ListGroup;