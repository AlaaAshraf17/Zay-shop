import React from 'react';
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    getCartCount,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalPrice,
  } = useCart();

  return (
    <div className="cart-container" style={{ padding: "2rem", color: "#000" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🛒 Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p style={{ fontSize: "1.2rem" }}>Your cart is empty.</p>
      ) : (
        <div>
          <div style={{ marginBottom: "1.5rem" }}>
            <h2>Total Items: {getCartCount()}</h2>
            <h2>Total Price: {getTotalPrice()} LE</h2>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "10px",
                backgroundColor: "#f9f9f9"
              }}
            >
              <h3>{item.name}</h3>
              <p>Price: {item.price} LE</p>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity - 1)  // Decrease quantity
                  }
                  style={{
                    padding: "0.3rem 0.7rem",
                    fontSize: "1.2rem",
                    backgroundColor: "#ddd",
                    borderRadius: "5px"
                  }}
                >
                  -
                </button>

                <span style={{ fontSize: "1.2rem" }}>{item.quantity}</span>  {/* Displaying quantity */}

                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}  // Increase quantity
                  style={{
                    padding: "0.3rem 0.7rem",
                    fontSize: "1.2rem",
                    backgroundColor: "#ddd",
                    borderRadius: "5px"
                  }}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}  
                style={{
                  marginTop: "0.5rem",
                  backgroundColor: "#ff4d4f",
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={clearCart}  
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "0.7rem 1.5rem",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;


