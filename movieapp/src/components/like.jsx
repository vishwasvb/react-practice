//import React, {Component} from 'react'

const Like = (props) => {
    let classes = 'fa fa-heart';
    if(!props.likeStatus){
        classes+='-o';
    }
    return ( 
        <i className={classes} onClick={props.onLike} style={{cursor:"pointer"}}></i>
     );
}
 
export default Like;

//props/ class Like extends Component{
//     render() {
//         let classes = 'fa fa-heart';
//         if(!this.props.likeStatus){
//             classes+='-o';
//         }
//         else{
            
//         }
//     return (
//             <i className={classes} onClick={this.props.onLike} style={{cursor:"pointer"}}></i>
//         );
//     }
// }
       
// export default Like;