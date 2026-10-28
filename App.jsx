import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

export default function App() {
  const [page, setPage] = useState('home');
  const [showProductList, setShowProductList] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleNavigate = (nextPage) => {
    setPage(nextPage);
    if (nextPage === 'plants') setShowProductList(true);
    if (nextPage === 'home') setShowProductList(false);
  };
  const handleGetStartedClick = () => {
    setShowProductList(true);
    setPage('plants');
  };

  if (page === 'plants' || showProductList) return <ProductList onNavigate={handleNavigate} totalQuantity={totalQuantity} />;
  if (page === 'cart') return <CartItem onNavigate={handleNavigate} totalQuantity={totalQuantity} />;
  if (page === 'about') return <AboutUs onNavigate={handleNavigate} totalQuantity={totalQuantity} />;

  return (
    <main className="app-container landing-page">
      <Navbar onNavigate={handleNavigate} totalQuantity={totalQuantity} />
      <section className="background-image">
        <div className="landing-overlay">
          <p className="eyebrow">GROW A LITTLE HAPPINESS</p>
          <h1>Welcome to Paradise Nursery</h1>
          <p>Discover beautiful indoor plants for every room, every routine, and every plant lover.</p>
          <button className="get-started-button" onClick={handleGetStartedClick}>Get Started</button>
          <button className="secondary-button" onClick={() => handleNavigate('about')}>About Us</button>
        </div>
      </section>
    </main>
  );
}
