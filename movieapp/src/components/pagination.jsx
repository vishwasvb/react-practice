const Pagination = (props) => {
    const pageCount = Math.ceil(props.itemsCount / props.pageSize);
    return ( 
        <nav>
            <ul className='pagination nav justify-content-center'>
                <li className="page-item"><a href="" className="page-link">1</a></li>
                <li className="page-item"><a href="" className="page-link">2</a></li>
                <li className="page-item"><a href="" className="page-link">3</a></li>
            </ul>
        </nav>
     );
}
 
export default Pagination;