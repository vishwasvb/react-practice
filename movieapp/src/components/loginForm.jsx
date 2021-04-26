import React, {Component} from 'react'

import Joi from 'joi-browser';
import Input from './common/input'
import Form from './common/form'


class LoginForm extends Form {
    
    // username = React.createRef();//this will create a ref object

    state = {
        data: {username:'',password:''},

        errors:{}
        //account: {password:''} // will get an controlled error
        // account: {username: null,password: ''} //will get an null error
    }

    schema={
        username:Joi.string().required().label('Username'),
        password:Joi.string().required().label('Password')
    }

    // validate = () => {
    //     const options = {abortEarly:false}
    //     //const result = Joi.validate(this.state.account, this.schema, options)
    //     const {error} = Joi.validate(this.state.account,this.schema, options)
    //     // console.log(result);


    //     const errors = {};
    //     const {account} = this.state;

    //     if(!error) return null;

    //     for(let item of error.details)
    //         errors[item.path[0]]=item.message;

    //     return errors;

    //     // if(account.username.trim() === '')
    //     //     errors.username='Username is required';
        
    //     // if(account.password.trim() === '')
    //     //     errors.password='Password is required';
        
    //     // return Object.keys(errors).length === 0? null : errors; //Object.keys will return array of all keys
    // }

    // validateProperty = ({name, value}) => {
    //     // if(name === {name}){
    //     //     if(value.trim() === '') return `${name} is required`;
    //     // }

    //     // if(name === 'username'){
    //     //     if(value.trim() === '') return `Username is required`;
    //     // }
    //     // if(name === 'password'){
    //     //     if(value.trim() === '') return `Password is required`;
    //     // }

    //     const obj = {[name]:value} //[name] is a computed property in Es6
    //     const schema = {[name]: this.schema[name]};
    //     const {error} = Joi.validate(obj, schema);

    //     return error ? error.details[0].message:null;

    // }


    // handleSubmit = obj =>{
    //     obj.preventDefault();
    //     const errors = this.validate();
    //     console.log(errors)

    //     // to resolve the error, errors property should always set to an  object, it should never be null

    //     this.setState({errors: errors || {}});
        
    //     if(errors) return;

    //     console.log("Form Submitted");
    //     // console.log(this.state.account);
        
    //     // const username=document.getElementById('username').value; //this should not be used in react we should only work on virtual DOM, we Should not directly access real DOM
    //     // const username=this.username.current.value;
    //     // console.log(username); 
    // }

    // handleChange = ({currentTarget: input}) => {

    //     const errors = {...this.state.errors};
    //     const errorMessage = this.validateProperty(input);
    //     if(errorMessage) errors[input.name] = errorMessage;
    //     else delete errors[input.name];

    //     const account = {...this.state.account};
    //     account[input.name] = input.value;
    //     this.setState({account,errors});
    // }

    // componentDidMount() {
    //     this.username.current.focus();
    // }


    render() {
        const {data,errors} = this.state; 
        return ( 
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                        <Input
                            name="username"
                            value={data.username}
                            label="User Name"
                            onChange={this.handleChange}
                            error={errors.username}
                        />
                        <Input 
                            name="password"
                            value={data.password}
                            label="Password"
                            onChange={this.handleChange}
                            error={errors.password}
                        />
                       
                    <button 
                        disabled={this.validate()}
                        className='btn btn-primary'>Submit</button>
                </form>

            </div>
            
         );
    }
}
 
export default LoginForm;
