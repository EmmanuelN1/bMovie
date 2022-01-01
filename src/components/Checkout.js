import React from "react";
import "./Checkout.css";
import Nav from './Nav';
import { useSelector } from 'react-redux';
import { selectUser } from "../features/userSlice";
import { selectItems, } from "../features/basketSlice";



const Checkout =  () => {
    const items = useSelector(selectItems);
    const user = useSelector(selectUser);
    

    return(
        <div className="checkout">
             <Nav/>
             <div className="checkout__body">
                <h1>Checkout Page</h1>
                <div className="checkout__info">
                    <div className="checkout__details">
                        <h2>{user?.email}</h2>
                        <div className="checkout__plans">
                            <h3>Review Item(s) For Payment
                            </h3>
                        <div className="checkout__plans__details">

                            <div className="checkout__package">
                                <h5>
                                    Subscription Plan 
                                </h5>

                                <h5 className="">{items[0]?.plan}</h5>

                            </div>

                            <div className="checkout__package">
                                <h5>
                                    Price <br/> 
                                </h5>
                                
                                <h5 className="">${items[0]?.price}</h5>
                            </div>

                           
                            {console.log(items)}
                                                 
                           <button
                            onClick=""
                            className="checkout__signout">Pay Now</button> 


                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Checkout;
