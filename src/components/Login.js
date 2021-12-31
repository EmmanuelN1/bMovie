import React, { useState } from "react";
import "./Login.css";
import avatar from "../asset/Image/avatar.png"
import SignInCom from "./SignInCom";

function Login ()  {

    const [signIn, setSignIn] = useState(false);
    

    return (
        <div className="login">

            <div className="login__background">
                <img className="login__img" src={avatar} alt=""/>
                <button
                className="login__button"
                //This says when we click the signIn button set signIn = true
                onClick={() => setSignIn(true)}
                > Sign In</button>
                
                <div className="login__gradient"/>     
            </div>
            <div className="login__body">
                {signIn ? (<SignInCom/> )
                    : 
                    (
                        <>
                        <h6>For Portfolio Purpose Only</h6>
                        <h1>Infinite Movies, Talk shows and lots more</h1>
                        <h3>Watch Infinite Movies Trailer, Anytime Anywhere</h3>
                        <h3>Ready to watch?? Enter your email to create or re-subscribe your membership
                        </h3>

                        <div className="login__input"> 
                        <form>
                            <input type="email" placeholder="Email Address"/>
                            <button 
                            onClick = {() => setSignIn(true)}
                            className="login__getStarted">
                                GET STARTED
                            </button>
                        </form>
                    </div>      
                    </>

                    )
                     }
                </div>       
            </div>
    )

}

export default Login;



