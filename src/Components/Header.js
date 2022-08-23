import React from 'react';
// Below is header component
const MyLogo = './logo192.png';
// const renderThis = document.querySelector('#root');
function Logo() {
  return (
    <div className="logo">
      <img src={MyLogo} alt="" />
      Myfirst-React
    </div>
  )
}
function MenuItems() {
  return (
    <div className="menu-items">
      <ul>
        <li>Home</li>
        <li>Contact US</li>
        <li>About Us</li>
      </ul>
    </div>
  )
} 

function Header() {
    return (
      <nav className="header">
        <Logo />
        <MenuItems />
      </nav>
    )
  }

  export default Header