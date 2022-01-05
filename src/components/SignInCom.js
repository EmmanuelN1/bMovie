import React, { useRef } from 'react';
import './SignInCom.css';
import {auth} from "../firebase";

function SignInCom() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signIn = (e) => {
        e.preventDefault();

        //SignIn with email and password `
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((data) => {
            console.log(data)
                    
        }).catch(error => {
          alert(error.message);
        } )
    }


    const register = (e) => {
        e.preventDefault();


        //creating an account with the user email and password
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((data) => {
            console.log(data)
        }).catch(error => {
          alert(error.message);
        } )

    }
    return (
        <div className="signInCom">
           {
                    (
                        <form>
                                <h1>Have an account</h1>
                                <input type="email" placeholder="Email"
                                ref = {emailRef} />

                                <input type="password" placeholder="Password"
                                ref={passwordRef}
                                />

                                <button  type="submit" onClick={signIn}> Sign In</button>

                                <button type="submit" className="btn__signUp" onClick={register}>Register</button>

                                

                                <h5>
                                    <span className="signIn__gray">Dont Have An Account??{" "}  {" "}</span> 
                                    <span className="signUp__link" onClick={register}> {" "} Sign Up now!!!</span>  
                                </h5>
    
                            </form>
                    )
           }
            
        </div>
    )
}

export default SignInCom;

