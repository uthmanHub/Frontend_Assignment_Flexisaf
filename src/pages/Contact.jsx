import React from 'react'

const Contact = () => {
  return (
    <div className='mt-5 px-3 md:px-6 lg:px-10'>
      <section className='flex flex-1 justify-between gap-20'>
        <form action='' className='space-y-5 px-20 py-10 bg-gray-100 w-full'>
          <h2 className='header capitalize'>contact form</h2>

          <div className='flex justify-between w-full'>
            <div className='space grid gap-2'>
              <label htmlFor="f_name">First Name</label>
              <input type="text" name="" id="f_name" placeholder='' className='rounded-2xl px-3 py-2 bg-transparent border border-card focus:outline-primary' />
            </div>

            <div className='space grid gap-2'>
              <label htmlFor="l_name">Last Name</label>
              <input type="text" name="" id="l_name" placeholder='' className='rounded-2xl px-3 py-2 bg-transparent border border-card focus:outline-primary' />
            </div>
          </div>

          <div className='space grid gap-2'>
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="email" placeholder='' className='rounded-2xl px-3 py-2 bg-transparent border border-card focus:outline-primary' />
          </div>
         
          <div className='space grid gap-2'>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="" id="subject" placeholder='' className='rounded-2xl px-3 py-2 bg-transparent border border-card focus:outline-primary' />
          </div>

          <textarea name="" id="subject" className=' w-full min-h-44 resize-x-none rounded-2xl px-3 py-1 bg-transparent border border-card focus:outline-primary'></textarea>

          <button type='submit' className='button'>Send</button>
        </form>

        <div className='w-full'>map
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7391571635944!2d7.355399126661561!3d8.996132511799413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e73d6ec667269%3A0x99b6450e10b58697!2sLugbe%20Plaza%20Abuja!5e0!3m2!1sen!2sng!4v1738319101818!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
      </section>
    </div>
  )
}

export default Contact