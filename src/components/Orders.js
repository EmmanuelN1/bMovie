import React, { useEffect, useState} from 'react';
import "./Orders.css";
import {db} from "./firebase"

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        db.collections['users']
    }, [])
    return (
        <div className="orders">
            <h1>Your Orders</h1>

        </div>
    )
}

export default Orders
