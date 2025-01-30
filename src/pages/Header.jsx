import React from "react";
import { NavLink,} from "react-router-dom";

const Header = () => {
  return (
    <nav className='flex text-primary sticky top-0 w-full  bg-bg text-xl font-medium justify-between items-center p-5 border-b-2 px-3 md:px-6 lg:px-10'>
      <NavLink to='/'>
        <span className='font-semibold text-2xl'>
          Uthman<span className='text-card'>Code.</span>
        </span>
      </NavLink>

      <ul className='gap-5 hidden lg:flex '>
        <li >
          <NavLink className="px-3" to='/'>Home</NavLink>
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
    </nav>
  );
};

export default Header;
