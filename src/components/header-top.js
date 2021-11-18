import React from 'react'
import '../styles/components/header.scss';

export default function NavbarTop() {
  return (
    <div className="navbar-top">
      <div className="content">
        <div className="left">
          <span>Sell on Fuud Fair</span>
        </div>
        <div className="centered">
          <img src={require('../assets/images/secure.png').default} alt="" />
          <span className="bared">100% secure delivery without contacting the courier</span>
          <span>Need help? Call Us: +234 70020045</span>
        </div>
      </div>
    </div>
  )
}
