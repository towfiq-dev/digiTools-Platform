import React from 'react';
import NavbarLogo from '../../assets/navbarLogo.png'
import CartIcon from '../../assets/cartIcon.png'

const Navbar = ({addCarts}) => {
  return (
    <header className='sticky top-0 z-50'>
    <nav className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-50 p-2 shadow text-[#101727]">
        <li><a>Products</a></li>
        <li>
          <a>Features</a>
          <ul className="p-2">
            <li><a>AI-Powered Automation</a></li>
            <li><a>Seamless Integration</a></li>
            <li><a>Advanced Analytics</a></li>
            <li><a>Security & Privacy</a></li>
          </ul>
        </li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>
    <img className='w-20 md:w-32 h-auto' src={NavbarLogo} alt="Logo" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#101727]">
      <li><a>Products</a></li>
      <li>
        <details>
          <summary>Features</summary>
          <ul className="p-2 bg-base-100 w-48 z-1">
            <li><a>AI-Powered Automation</a></li>
            <li><a>Seamless Integration</a></li>
            <li><a>Advanced Analytics</a></li>
            <li><a>Security & Privacy</a></li>
          </ul>
        </details>
      </li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  
  <div className="navbar-end gap-3">
    <div>
    <span className='-mt-1 p-0 md:-mt-2.5 ml-2 absolute rounded-full px-1.5 text-[13px] cursor-pointer bg-red-500 font-bold '>{addCarts.length}</span>
    <img className="w-5 h-5 cursor-pointer" src={CartIcon} alt="" />
    </div>
    <a className="cursor-pointer">Login</a>
    <a className="btn rounded-full bg-[linear-gradient(to_right,#4F39F6,#9514FA)]">Get Started</a>
  </div>
    </nav>
    </header>
  );
};

export default Navbar;