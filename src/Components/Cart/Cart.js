import React from 'react';
import './Cart.css'
const Cart = (props) => {
    let totalPrice = 0;
    for (let i = 0; i < props.cart.length; i++) {
        const singleCourse = props.cart[i].price;
        totalPrice = totalPrice + singleCourse;
    }
    return (
        <div className='cart-cantainer'>
            <h3>Order Summary</h3>
            <p className='cost'>Course odered : {props.cart.length}</p>
            <p className='cost'>Total Price:${totalPrice.toFixed(2)}</p>
        </div>
    );
};

export default Cart;