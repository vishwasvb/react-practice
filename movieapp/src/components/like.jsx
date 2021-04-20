import React, {Component} from 'react'

class Like extends Component{
    render() {
    return (
            <i className='fa fa-heart-o' onClick={this.props.onClick}></i>
        );
    }
}
       
export default Like;