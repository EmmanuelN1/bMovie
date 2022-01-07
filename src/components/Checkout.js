import React, {useState, useEffect} from "react";
import "./Checkout.css";
import Nav from './Nav';
import { useSelector } from 'react-redux';
import { selectUser } from "../features/userSlice";
import { selectItems, onSubscribe, emptyBasket } from "../features/basketSlice";
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom";
import {CardElement, useStripe, useElement, useElements} from "@stripe/react-stripe-js"
import { useHistory } from 'react-router-dom'
import axios from "axios"

const Checkout =  () => {
    const items = useSelector(selectItems);
    const elements = useElements();
    const user = useSelector(selectUser);
    const stripe = useStripe();
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() => {
        //generates the special stripe secret which allows us to charge the customer, but whenever the basket changes it gets a new customer

        const getClientSecret = async() => {
            const res = await axios({
                method : 'post',
                url: `.../payments/create?total=${items[0]?.price * 100 }`
            });
            setClientSecret(res.data.clientSecret);
        }

        getClientSecret();
    }, [items])

    const handleSubmit = e => {
        e.preventDefault();

        // do all the fancy stripe stuff....
        setProcessing(true);
        const payload = stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch(onSubscribe({
                subscribe: true
             }))

             dispatch(emptyBasket({
                //  items: []
             }))
             history.replace('/order')
        })

    }

    const handleChange = e => {
        /*Listen for changes in the CardElement and display any errors as the customer type the card card details */
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "");
    }

   

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

                            <div className="checkout__payment">
                                <div className="checkout__paymentTitle">
                                    <h5>
                                        Payment Method: <br/> 
                                    </h5>
                                </div>

                                <div className="checkout__paymentDetails">
                                    <form onSubmit={handleSubmit}>
                                        <CardElement onChange={handleChange} />


                                        <div    className="checkout__priceDetails">
                                            <h5>Order Total: ${items[0]?.price}</h5>
                                        </div>
                                    </form>
                                </div>
                                    
                            </div>

                                                 
                           <button
                            disabled={processing || disabled || succeeded}
                            onClick
                            className="checkout__signout">
                                <span> {processing ? <p>Processing</p> : "Subscribe Now"} </span>
                            </button> 

                            {/*Error Handling */}
                                {error && <div> {error} </div>}
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Checkout;
