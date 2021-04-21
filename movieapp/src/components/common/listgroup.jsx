const ListGroup = (props) => {
    const {items, valueProperty, selectedItem, onGenreSelect, textProperty} = props;
    return ( 
        <div>
            <ul class="list-group">
                {items.map(item =>
                <li 
                    key={item[valueProperty]} 
                    className={(item===selectedItem) ? "list-group-item active" : "list-group-item"}
                    onClick={() => onGenreSelect(item)}
                >{item[textProperty]}</li>)}
            </ul>
        </div>
     );
}
 
export default ListGroup;