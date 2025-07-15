import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./Forgot.css"

function ForgotPassword(){
    const history = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(database,emalVal).then(data=>{
            alert("Check your gmail")
            history("/")
        }).catch(err=>{
            alert(err.code)
        })
    }
    return(
       
        <div id='login-sing'>
        <div className='wrapperrr'>
        
        
        <h1>Forgot Password</h1>
        <h5>Enter Registered Email Address </h5>        
             <form onSubmit={(e)=>handleSubmit(e)}>
             <div id="Forgot-password">
                 <input name="email" placeholder="Enter Your Email"/><br/><br/></div>
                 <button>Reset</button>
                 </form>
        </div>
      </div>
    )
}
export default ForgotPassword;

