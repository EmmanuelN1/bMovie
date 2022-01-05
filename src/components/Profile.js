import React from 'react'
import Nav from './Nav'
import "./Profile.css"
import avatar2 from "../asset/Image/avatar2.png"
import { selectUser } from '../features/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase';
import { addToBasket, selectSubscribe, onSubscribe, selectItems } from '../features/basketSlice';

function Profile() {

    const user = useSelector(selectUser);
    const history = useHistory();
    const dispatch = useDispatch();
    const items = useSelector(selectItems);
    const subscribe = useSelector(selectSubscribe); 

    const signout = () => {
         auth.signOut()
    }

    const addStandardToBasket = () => {
        dispatch(addToBasket({
            plan:"Standard",
            price:20,
        }))
        
        history.push('/checkout')
    }

    const addCommonToBasket = () => {
        dispatch(addToBasket({
            plan:"Common",
        }));
        dispatch(onSubscribe({
            subscribe: true
         }))
        history.push('/')
    }

    const addPremiumToBasket = () => {
        dispatch(addToBasket({
            plan:"Premium",
            price:40,
        }));
        history.push('/checkout')
    }
     return (
        <div className="profile">
                <Nav/>

            <div className="profile__body">
                <h1>My Profile</h1>
                <div className="profile__info">
                    <img src={avatar2} alt="" />
                    <div className="profile__details">
                        <h2>{user?.email}</h2>
                        <div className="profile__plans">
                            <h3>Current Plan: <span>{items[0]?.plan}</span> 

                            </h3>
                        <div className="profile__plans__details">
                            <h4> Renewal date: 04/03/2021  </h4>

                            <div className="profile__package">
                                <h5>
                                    Bookflix Common : Free <br/> <h6>580p</h6>
                                </h5>

                               <button  onClick={addCommonToBasket} disabled={subscribe[1] ? true : false}
                               className={subscribe[1] ? "alreadySubscribe" : "subscribe"}>
                                   {subscribe[1] ? "Already Subscribed" : "Subscribe"}
                                </button>

                            </div>

                            <div className="profile__package">
                                <h5>
                                    Bookflix Standard : $20/month <br/> <h6>780p</h6>
                                </h5>

                                <button  onClick={addStandardToBasket} disabled={subscribe[1] ? true : false}
                               className={subscribe[1] ? "alreadySubscribe" : "subscribe"}>
                                   {subscribe[1] ? "Already Subscribed" : "Subscribe"}
                                </button>
                            </div>

                            <div className="profile__package">
                                <h5>
                                    Bookflix Premium : $40/month <br/> <h6>1080p</h6>
                                </h5>

                                <button  onClick={addPremiumToBasket} disabled={subscribe[1] ? true : false}
                               className={subscribe[1] ? "alreadySubscribe" : "subscribe"}>
                                   {subscribe[1] ? "Already Subscribed" : "Subscribe"}
                                </button>
                            </div>


                                                
                           <button
                            onClick={signout}
                            className="profile__signout">Sign Out</button> 


                        </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Profile;
