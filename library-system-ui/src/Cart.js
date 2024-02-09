import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import './Cart.css'; // Make sure the path is correct


const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [removedItem, setRemovedItem] = useState(null);
  const [cartItemCount, setCartItemCount] = useState(cartItems.length);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false); 


  useEffect(() => {
    let timer;
    if (removedItem) {
      timer = setTimeout(() => {
        setRemovedItem(null);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [removedItem]);


  useEffect(() => {
    setCartItemCount(cartItems.length);
  }, [cartItems]);


  const handleRemoveFromCart = (itemId) => {
    try {
      removeFromCart(itemId);
      setRemovedItem(itemId);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };


  const handleCheckOut = async () => {
    console.log('Initiating checkout process...');
    try {
      for (const item of cartItems) {
        // Check if item and item.type exist before accessing item.type.toUpperCase()
        if (item && item.type) {
          const reservationDto = {
            itemType: item.type.toUpperCase(),
            title: item.title,
            userId: 3,
            date: new Date().toISOString(),
          };
 
          console.log(`Sending API request to reserve ${item.type}: ${item.title}`);
 
          const response = await fetch('http://localhost:8080/reservations/reserve', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservationDto),
          });
 
          if (!response.ok) {
            throw new Error(`Failed to reserve ${item.type}: ${item.title}`);
          }
 
          console.log(`Successfully reserved ${item.type}: ${item.title}`);
        } else {
          console.error('Invalid item found in cart:', item);
        }
      }
 
      console.log('All items reserved successfully');
      clearCart(); 
      setCheckoutSuccess(true); 
    } catch (error) {
      console.error('Error reserving items:', error.message);
    }
  };

  if (checkoutSuccess) {
    return (
      <div className="checkout-success">
        <h2>Your Reservation Was Successful!</h2>
        <p>Your item(s) are reserved, you will receive an email with your order confirmation and pick up code. You can now return home to view any other products you may be interested in.</p>
        <div className="home-button-container">
        <button onClick={() => window.location.href = '/'} className="home-button">Return to Home</button>
      </div>
    </div>
    );
  }


  return (
    <div className="main-container">
      <div className="books-container">
        <h2 className="books-title">Cart</h2>
        <div className="books-list">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item-container">
                <img src={item.imgUrl} alt={`Cover of ${item.title}`} />
                <div className="cart-item-details">
                  <div>Title: {item.title}</div>
                  <div>Genre: {item.genre}</div>
                  {item.type === 'book' && <div>Author: {item.author}</div>}
                  {item.type === 'movie' && <div>Director: {item.director}</div>}
                </div>
                <button onClick={() => handleRemoveFromCart(item.id)} className="cart-item-remove">
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
      <div className="filter-container">
        <div className="cart-summary">
          <span>Cart Summary: </span>
          <span>{cartItemCount} items</span>
        </div>
        <button onClick={handleCheckOut} className="checkout-button">
          Check Out
        </button>
        {removedItem && (
          <div className="success-bubble">Item successfully removed from cart!</div>
        )}
      </div>
    </div>
  );
};


export default Cart;












