// import React, { Component } from 'react'

const NavBar = ({totalCounters}) => {
    return ( 
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Total Count
                <span class="badge badge-primary">{totalCounters}</span></a>
            </div>
        </nav>
     );
}
 
// export default ;



// class NavBar extends Component{
//     render(){
//         return(
//             <nav class="navbar navbar-light bg-light">
//                 <div class="container-fluid">
//                     <a class="navbar-brand" href="#">Total Count
//                     <span class="badge badge-primary">{this.props.totalCounters}</span></a>
//                 </div>
//             </nav>
//         );
//     }
// }

export default NavBar;