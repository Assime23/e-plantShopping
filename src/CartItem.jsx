import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
      let total = 0; // Étape 1: Initialisation de la variable totale
  
  // Étape 2: Parcours du panier
  cart.forEach(item => {
    // Étape 3: Extraction de la quantité et du prix
    const quantity = item.quantity;
    const priceString = item.cost;
    
    // Étape 4: Conversion du prix en nombre
    const numericPrice = parseFloat(priceString.substring(1)); // Retire le "$" et convertit en float
    
    // Calcul du coût pour cet article et ajout au total
    total += quantity * numericPrice;
  });

  return total; // Étape 5: Retourne le total calculé
 
  };

  const handleContinueShopping = (e) => {
    <onContinueShopping/>
   
  };

const handleCheckoutShopping = (e) => {
  alert('Functionality to be added for future reference');
};

  const handleIncrement = (item) => {

            dispatch(updateQuantity(index));

  };

  const handleDecrement = (item) => {

               dispatch(updateQuantity(index));

  };

  const handleRemove = (item) => {
                dispatch(removeItem(index));

  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    let tot=parseFloat(item.cost.substring(1))
    return tot;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


