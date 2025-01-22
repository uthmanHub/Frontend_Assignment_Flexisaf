import React from "react";

const Header = () => {
  return (
    <nav className="flex text-[#3ebbd6] sticky top-0 w-full  bg-bg text-xl font-medium justify-between items-center p-5 border-b-2">
      {/* <img src="" alt="" /> */}
      <span className="font-semibold text-2xl">Uthman<span className="text-[#fdcb5b]">Code</span> </span>

      <ul className="gap-5 hidden lg:flex ">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      
      <details className="hide relative lg:hidden">
        <summary><i className="fa-solid fa-bars lg:hidden" ></i></summary>
        <ul className=" absolute w-fit right-0 bg-bg p-10 ">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      </details>
    </nav>
  );
};

export default Header;
