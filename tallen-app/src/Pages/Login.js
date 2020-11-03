import React from 'react'
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import '../App.css';
import './Login.css';

const Login = props => {

    const { register, handleSubmit, errors } = useForm();
    // submit button collects the data and displays it in the console.
    // After you are redirected to the dashboard page.
    const onSubmit = data => {
        console.log(data);
        props.history.push("./dashboard");
    }

    return (    
        // Simple form component with no validation
        <div className="componentContainer">
            <div className="navStyle"></div>
            <h2 style={{color: "#3f51b5"}}>Register</h2>
            <form className="formStyle" onSubmit={handleSubmit(onSubmit)}>
                <TextField 
                    label="First Name"
                    name="firstname"
                    inputRef={register}
                    className="inputStyle"  
                    variant="outlined"         
                    fullWidth
                    required
                />
                <TextField 
                    label="Last Name"
                    name="lastname"
                    inputRef={register}
                    className="inputStyle"
                    variant="outlined" 
                    fullWidth
                    required
                />
                <Button 
                    className="buttonStyle" 
                    color="primary" 
                    type="submit" 
                    variant="contained"
                    fullWidth
                    >
                    Join
                </Button>
            </form>
        </div>
    )
}

export default withRouter(Login);