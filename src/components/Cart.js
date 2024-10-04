import React, { useState, useEffect } from 'react';
import '../style/Cart.css';

function Cart({ cart, updateCart }) {
    const monSteraPrice = 15;
    const ivyPrice = 10;
    const flowerPrice = 12;
    const [isOpen, setIsOpen] = useState(true);

    // Calculate total price using cart items
    const total = cart ? cart.reduce((acc, plantType) => acc + (plantType.amount * plantType.price), 0) : 0;

    useEffect(() => {
        alert(`Your total purchases are $${total}`);
    }, [total]);

    return (isOpen ?
        (<div className='jh-cont'>
            <button className='jh-cart-toggle-button' onClick={() => setIsOpen(false)}>Close</button>
            {cart && cart.length > 0 ? (
                <div>
                    <h2>Cart</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <li key={`${name}-${index}`}>{name} {price} £ * {amount}</li>
                        ))}
                    </ul>
                    <h3>Total : {total} £</h3>
                    <button onClick={() => updateCart([])}>Clear Basket</button>
                </div>
            ) : (
                <div>Your basket is empty</div>
            )}
        </div>)
        :
        <div className='jh-cart-closed' >

            <button className='jh-cart-toggle-button' onClick={() => setIsOpen(true)}>Open</button>
        </div>)
}

export default Cart;
