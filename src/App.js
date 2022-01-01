import React, { useEffect } from 'react';
import Homescreen from './components/Homescreen';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
import { auth } from './firebase';
import  { useDispatch, useSelector} from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from './components/Profile';
import Checkout from './components/Checkout';


function App() {

  //pull out the 
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

//keeo the user signed in even on refresh

useEffect(() => {
  //setting up a listener that keeps track of any authenticated state change which firebase stores in a local memory (cache)
   const unsubscribe =  auth.onAuthStateChanged((userAuth) => {
       if (userAuth) {
          //Logged in 
          //Parsing a payload => which is what we will set the user to
          dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email,        
          }))

       } else{
         //Logged out
         dispatch(logout());
       }
    }) 
    

    return unsubscribe;
}, [dispatch])


  return (
    <Router className="app">
      {!user ? 
        (<Login/>) :
      
        ( <Switch>

            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path="/checkout">
              <Checkout/>
            </Route>
            <Route exact path="/">
                <Homescreen/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
         </Switch>
      )
        
      }
  </Router>
  ); 
}

export default App
