import _ from 'lodash';

const Pagination = (props) => {
    const pageCount = Math.ceil(props.itemCount / props.pageSize);
    console.log(pageCount);
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);//this returns an array
    console.log(pages);

    return ( 
        <nav>
            <ul className='pagination nav justify-content-center'>
                {pages.map(page => (
                    <li 
                        key={page} 
                         className={page === props.currentPage ? "page-item active" : "page-item"}>
                             <a 
                                onClick={()=>props.onPageChange(page)}
                                className="page-link">
                                    {page}
                            </a>
                    </li>
                ))}
            </ul>
        </nav>
     );
}
 
export default Pagination;