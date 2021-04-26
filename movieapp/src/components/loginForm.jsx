import React, {Component} from 'react'

class LoginForm extends Component {
    
    // username = React.createRef();//this will create a ref object

    state ={
        account: {username:'',password:''}
    }

    handleSubmit = obj =>{
        obj.preventDefault();
        console.log("Form Submitted");
        console.log(this.state.account);
        
        // const username=document.getElementById('username').value; //this should not be used in react we should only work on virtual DOM, we Should not directly access real DOM
        // const username=this.username.current.value;
        // console.log(username); 
    }

    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    }

    // componentDidMount() {
    //     this.username.current.focus();
    // }

    render() { 
        return ( 
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <lable htmlFor="username">User Name</lable>
                        {/* <input ref={this.username} type="text" id="username" className="form-control"/> */}
                        <input autoFocus onChange={this.handleChange} type="text" name='username' id="username" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <lable htmlFor="password">Password</lable>
                        <input onChange={this.handleChange} type="text" name='password' id="password" className="form-control"/>
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>

            </div>
            
         );
    }
}
 
export default LoginForm;
