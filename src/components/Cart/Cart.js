import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((acc, curr)=>acc + curr.price,0);
    let shiping = 0;
    if (total > 35) {
        shiping = 0;
    }else if (total > 15) {
        shiping = 5;
    }else if (total > 0) {
        shiping = 10;
    };

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shiping + Number(tax)).toFixed(2);
    
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Item Ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p><small>shiping Cost: {shiping}</small></p>
            <p><small>tax + vat: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;