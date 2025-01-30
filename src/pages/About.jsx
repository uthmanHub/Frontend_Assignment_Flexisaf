import React from 'react'
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className='mt-10 px-3 space-y-5 md:space-y-10 md:px-6 lg:px-10'>
      <section>
        <h2 className='header'>About Us</h2>

        <div className='flex flex-col w-full  md:flex-row md:justify-between md:gap-20 '>
          <div className='h-full'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequatur dolore nulla hic, non enim asperiores vero eveniet at nam sunt eligendi magni maiores tempore, doloremque quae temporibus velit possimus.</p>

            <div className='flex justify-between gap-3 mt-10'>
              <div>
                <i className='fa fa-gear'></i>
                <h3 className='capitalize text-md font-bold'>Web and mobile pecialties</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis veritatis quam deserunt facere fuga ducimus?</p>
              </div>
              <div>
                <i className='fa fa-gear'></i>
                <h3 className='capitalize text-md font-bold'>Intuitive Thinkers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis veritatis quam deserunt facere fuga ducimus?</p>
              </div>
            </div>
          </div>

          {/* image */}
          <div className='max-w-xl'>
            <img src="./images/product2.jpg" alt="" />
          </div>
        </div>
      </section>

      <section>
        <h2 className='header'>Our Team</h2>
        <div className='mt-3 md:mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-3'>
          <div className='w-full bg-gray-500 rounded-xl'>
              <img src="./images/product1.jpg" alt="" className='w-full rounded-t-xl ' />
            <div className='text-center p-3 '>
              <p className='font-bold text-xl'>Fullname</p>
              <p>role</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, tenetur!</p>
            </div>
          </div>
          <div className='w-full bg-gray-500 rounded-xl'>
              <img src="./images/product1.jpg" alt="" className='w-full rounded-t-xl ' />
            <div className='text-center p-3 '>
              <p className='font-bold text-xl'>Fullname</p>
              <p>role</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, tenetur!</p>
            </div>
          </div>
          <div className='w-full bg-gray-500 rounded-xl'>
              <img src="./images/product1.jpg" alt="" className='w-full rounded-t-xl ' />
            <div className='text-center p-3 '>
              <p className='font-bold text-xl'>Fullname</p>
              <p>role</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, tenetur!</p>
            </div>
          </div>

         
        </div>
      </section>
    </div>
  )
}

export default About