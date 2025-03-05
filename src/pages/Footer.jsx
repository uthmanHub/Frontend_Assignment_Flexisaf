import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='mt-20 bg-bg w-full h-fit flex flex-col lg:flex-row  gap-10 lg:gap-20 text-white flex-1 justify-between p-5 px-3 md:px-6 lg:px-10'>
      <div className='space-y-3 lg:max-w-[350px] text-center lg:text-left'>
        <h3 className='font-bold text-primary'>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          reiciendis obcaecati quod iure hic dolores minus quidem dolorum
          quisquam. Perferendis voluptates, quae iusto ut expedita corporis
          vitae neque sint adipisci.
        </p>
      </div>

      <div className='space-y-3 '>
        <h3 className='font-bold text-primary'>Features</h3>
        <ul>
          <li>About Us</li>
          <li>Testimonials</li>
          <li>Services</li>
        </ul>
      </div>

      <div className='flex flex-col-reverse md:flex-row md:w-full  lg:max-w-2xl  items-cnter gap-5 flex-grow justify-between '>
        <div className='space-y-3 text-center  '>
          <h3 className='font-bold text-primary'>Follow us</h3>
          <ul className='flex gap-3 md:gap-5 justify-center md:justify-normal'>
            <li>
              <Link to='https://www.linkedin.com/in/dev-uthman/' target='_blank' >
                <i className='fa-brands fa-xl fa-facebook hover:text-card hover:scale-150'></i>
              </Link>
            </li>
            <li>
              <Link to='https://x.com/UthmanCod' target='_blank'>
                <i className='fa-brands fa-xl fa-twitter hover:text-card hover:scale-150'></i>
              </Link>
            </li>
            <li>
              <Link to='https://github.com/uthmanHub' target='_blank'>
                <i className='fa-brands fa-xl fa-github hover:text-card hover:scale-150'></i>
              </Link>
            </li>
            <li>
              <Link to='https://www.linkedin.com/in/dev-uthman/' target='_blank' >
                <i className='fa-brands fa-xl fa-linkedin hover:text-card hover:scale-150'></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className='space-y-3  w-full md:w-1/2 lg:max-w-md '>
          <h3 className='font-bold text-primary'>Subscribe Newsletter</h3>
          <form className='flex gap-30 w-full items-center text-white rounded-2xl border border-card'>
            <input
              type='email'
              aria-label='email'
              placeholder='Enter email'
              className='py-2 w-full bg-transparent px-2 rounded-s-xl focus:outline-none '
              required
              name='email'
              id='email'
            />
            <button className='px-4 py-2 text-bg font-bold bg-card rounded-e-xl'>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
