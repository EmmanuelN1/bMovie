import React from 'react'
import Nav from './Nav'
import "./Profile.css"
import avatar2 from "../asset/Image/avatar2.png"
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'
import { auth } from './firebase'
function Profile() {

    const user = useSelector(selectUser);

    const signout = () => {
         auth.signOut()
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
                            <h3>Plans (Current Plan: Premium)

                            </h3>
                        <div className="profile__plans__details">
                            <h4> Renewal date: 04/03/2021  </h4>

                            <div className="profile__package">
                                <h5>
                                    Bookflix Standard <br/> <h6>1080p</h6>
                                </h5>

                                <button className="subscribe">
                                    Subscribe
                                </button>

                            </div>

                            <div className="profile__package">
                                <h5>
                                    Bookflix Basic <br/> <h6>1080p</h6>
                                </h5>

                                <button className="subscribe">
                                    Subscribe
                                </button>
                            </div>

                            <div className="profile__package">
                                <h5>
                                    Bookflix Premium <br/> <h6>1080p</h6>
                                </h5>

                                <button className="subscribe">
                                    Subscribe
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

export default Profile
