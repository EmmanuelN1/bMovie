import React from 'react';
import "./Order.css"
import Nav from './Nav'
import moment from "moment"
import Checkout from './Checkout';
import CurrencyFormat from "react-currency-format";

function Order() {
    return (
            <div className="order">
                <Nav/>
                <div className="order__body">
                    <h2>Your Orders</h2>
                    <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
                    <p className="order__id">
                        <small>{order.id}</small>
                    </p>
                        {order.data.basket?.map(item => (
                            <Checkout
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                                    <h3 className="order_total">Order Total: {value}</h3>
                                </>
                            )}

                            decimalScale={2}
                            value={order.data.amount / 100}
                            displayType={"text"}
                            thousandSeperator={true}
                            prefix={"#"}
                            
                        /> 
                    </div>
        </div>
    )
}