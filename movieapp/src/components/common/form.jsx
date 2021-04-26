import React, { Component } from 'react';

import Joi from 'joi-browser';

class Form extends Component {
    state = { 
        data: {},
        errors: {}
     };


     validate = () => {
        const options = {abortEarly:false}
        const {error} = Joi.validate(this.state.data,this.schema, options)

        const errors = {};
        const {data} = this.state;

        if(!error) return null;

        for(let item of error.details)
            errors[item.path[0]]=item.message;

        return errors;
    }

    validateProperty = ({name, value}) => {
        
        const obj = {[name]:value} //[name] is a computed property in Es6
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);

        return error ? error.details[0].message:null;

    }


    handleSubmit = obj =>{
        obj.preventDefault();
        const errors = this.validate();
        console.log(errors)

        this.setState({errors: errors || {}});
        
        if(errors) return;

        console.log("Form Submitted");
    
    }

    handleChange = ({currentTarget: input}) => {

        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data,errors});
    }



 
}
 
export default Form;