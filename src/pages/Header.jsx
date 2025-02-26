import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../provider/Context";

const Header = () => {
  const [cart] = useCart();
  return (
    <nav className='z-40 flex text-primary sticky top-0 w-full  bg-bg text-xl font-medium justify-between items-center p-5 border-b-2 px-3 md:px-6 lg:px-10'>
      <NavLink to='/'>
        <span className='font-semibold text-2xl'>
          Uthman<span className='text-card'>Code.</span>
        </span>
      </NavLink>

      <ul className='gap-5 hidden lg:flex lg:items-center'>
        <li>
          <NavLink className='px-3' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/blog'>Blog</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/shop'>Shop</NavLink>
        </li>
        <li>
          <Link to='/cart' className='relative flex justify-end'>
            <i className='fa fa-shopping-cart'></i>
            <span className='absolute -top-[18px] -right-[14px] text-sm card p-3 border border-primary size-5 text-card bg font-bold flex justify-center items-center rounded-lg  '>
              {cart.length}
            </span>
          </Link>
        </li>
      </ul>

      {/* mobile navigation */}
      <div className='lg:hidden flex gap-2 pr-2 items-center'>
        <details className='hide marker:content-none relative lg:hidden'>
          <summary>
            <i className='fa-solid fa-bars lg:hidden'></i>
          </summary>
          <ul className=' absolute w-fit right-0 bg-bg p-10 '>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/shop'>Shop</NavLink>
            </li>
          </ul>
        </details>
        <Link to='/cart' className=' relative flex justify-end'>
          <i className='fa fa-shopping-cart'></i>
          <span className='absolute -top-[18px] -right-[14px] text-sm card p-3 border border-primary size-5 text-card bg font-bold flex justify-center items-center rounded-lg  '>
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
