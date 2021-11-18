import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={require('../assets/images/logo.png').default} alt="logo" />
      </Link>
      <div className="search">
        <div className="searchbar">
          <img src={require('../assets/images/search.png').default} alt="logo" />
          <input type="text" className="search" placeholder="Search Through Our Product" />
        </div>
        <button className="query">Search</button>
      </div>
      <div className="menu">
        <div className="item">
          <img src={require('../assets/images/profile.png').default} alt="logo" />
          <span>Profile</span>
        </div>
        <div className="item">
          <img src={require('../assets/images/favorites.png').default} alt="logo" />
          <span>Saved Items</span>
        </div>
        <div className="item">
          <img src={require('../assets/images/cart.png').default} alt="logo" />
          <span>Cart</span>
        </div>
      </div>
    </div>
  )
}
