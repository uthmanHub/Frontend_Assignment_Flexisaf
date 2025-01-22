import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className='flex text-[#3ebbd6] sticky top-0 w-full  bg-bg text-xl font-medium justify-between items-center p-5 border-b-2 px-3 md:px-6 lg:px-10'>
      <Link to='/'>
        <span className='font-semibold text-2xl'>
          Uthman<span className='text-[#fdcb5b]'>Code.</span>
        </span>
      </Link>

      <ul className='gap-5 hidden lg:flex '>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>

      <details className='hide marker:content-none relative lg:hidden'>
        <summary>
          <i className='fa-solid fa-bars lg:hidden'></i>
        </summary>
        <ul className=' absolute w-fit right-0 bg-bg p-10 '>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </details>
    </nav>
  );
};

export default Header;
