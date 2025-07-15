import React from 'react'
import "./navbar.css"
import Logo from './Logo1.png'
export default function Navbar() {
  return (
    <>
    <header>
    <h2 class="logo"><a href='/'><img src={Logo}/></a></h2>
    <nav class="navigation">
        <a href="/home">HOME</a>
        <a href="/detailing">OUR CARS</a>
        <a href="/services">GET APP</a>
        <a href="/listing">NEWS</a>
        <a href="/contact">CONTACT</a>
    </nav>
        <a href='/login'><button class="bthLogin-popup">Login</button></a>
</header>

    </>
  )
}
