import React, {Component} from 'react'

class LoginForm extends Component {
    
    handleSubmit = obj =>{
        obj.preventDefault();
        console.log("Form Submitted");
    }

    render() { 
        return ( 
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <lable htmlFor="username">User Name</lable>
                        <input type="text" id="username" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <lable htmlFor="password">Password</lable>
                        <input type="text" id="password" className="form-control"/>
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>

            </div>
            
         );
    }
}
 
export default LoginForm;
