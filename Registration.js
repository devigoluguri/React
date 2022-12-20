import React, {useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import './App.css';

function Registration(){
    const [data,setData]=useState({
        email:"",
        password:"",
        confirmpassword:""
    })
    const {email,password,confirmpassword}=data;
    const handler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const SubmitHandler=()=>{
        if(password===confirmpassword){
            alert("Registered successfully")
        }
        else{
            alert("Passwords are not matched")
        }
    }
    const SubHandler=e=>{
        e.preventDefault();
        console.log(data);
    }
    return(
        <center>
            <form onSubmit={SubHandler}>
                <div className="container">
                   <h1>Register</h1>
                   <p>Please fill in this form to create an account.</p>
                   <div className="hr">
                   <label><b>Email</b></label>
                   <input className="i" type="text" name="email" value={email} onChange={handler} placeholder="Enter Email" required/>
                   <br></br>
                   <label><b>Password</b></label>
                   <input className="i" type="password" name="password" value={password} onChange={handler} placeholder="Enter Password" required/>
                   <br></br>
                   <label><b>Confirm Password</b></label>
                   <input className="i" type="password" name="confirmpassword" value={confirmpassword} onChange={handler} placeholder="Verify Password" required/>
                    </div>
                   <p>By creating an account you agree to our <a href="">Terms & Privacy</a>.</p>

                   <button type="submit" onClick={SubmitHandler} className="registerbtn">Register</button>
                </div>
                <div>
                    <p>Already have an account? <a href="/signin" onClick={()=><Navigate to='/signin'/>}>Sign in</a>.</p>
                    
                </div>
            </form>
            </center>
    )
}


export default Registration;