import React from 'react';

export default function Navbar({ onNavigate, totalQuantity = 0 }) {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <button className="navbar-brand" onClick={() => onNavigate('home')} aria-label="Paradise Nursery home">🌿 Paradise Nursery</button>
      <div className="navbar-links">
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('plants')}>Plants</button>
        <button onClick={() => onNavigate('cart')} aria-label={`Shopping cart, ${totalQuantity} items`}>
          <span aria-hidden="true">🛒</span> Cart <span className="cart_quantity_count">{totalQuantity}</span>
        </button>
      </div>
    </nav>
  );
}
