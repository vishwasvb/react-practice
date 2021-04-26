import React, {Component} from 'react'

import Input from './common/input'

class LoginForm extends Component {
    
    // username = React.createRef();//this will create a ref object

    state ={
        account: {username:'',password:''}
        //account: {password:''} // will get an controlled error
        // account: {username: null,password: ''} //will get an null error
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
        const {account} = this.state; 
        return ( 
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                        <Input
                            name="username"
                            value={account.username}
                            label="User Name"
                            onChange={this.handleChange}
                        />
                        <Input 
                            name="password"
                            value={account.password}
                            label="Password"
                            onChange={this.handleChange}
                        />
                       
                    <button className='btn btn-primary'>Submit</button>
                </form>

            </div>
            
         );
    }
}
 
export default LoginForm;
