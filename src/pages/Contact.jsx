import React, { useRef } from 'react';

const Contact = () => {
  const formRef = useRef({
    f_name: '',
    l_name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    formRef.current[e.target.id] = e.target.value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formRef.current);
    alert(`${formRef.current.f_name} ${formRef.current.l_name}, you message has been sent successfully!`);

    try {
      const response = await fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formRef.current)
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      document.getElementById('f_name').value = '';
      document.getElementById('l_name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
    }
  };

  return (
    <div className='mt-5 px-3 md:px-6 lg:px-10'>
      <section className='flex flex-1 flex-col  justify-between gap-10 lg:flex-row lg:gap-20 '>
        <form onSubmit={handleSubmit} className='space-y-5 p-5 lg:px-20 lg:py-10 bg-gray-100 w-full min-h-fit'>
          <h2 className='header capitalize'>contact form</h2>

          <div className='flex justify-between flex-col lg:flex-row w-full'>
            <div className='space grid gap-2'>
              <label htmlFor="f_name">First Name</label>
              <input required type="text" id="f_name" placeholder='' className='rounded-2xl px-3 py-2 bg-transparent border border-card focus:outline-primary' onChange={handleChange} />
            </div>

            <div className='space grid gap-2'>
              <label htmlFor="l_name">Last Name</label>
              <input required type="text" id="l_name" placeholder='' className='rounded-2xl px-3 py-2 bg-transparent border border-card focus:outline-primary' onChange={handleChange} />
            </div>
          </div>

          <div className='space grid gap-2'>
            <label htmlFor="email">Email</label>
            <input required type="email" id="email" placeholder='' className='rounded-2xl px-3 py-2 bg-transparent border border-card focus:outline-primary' onChange={handleChange} />
          </div>
         
          <div className='space grid gap-2'>
            <label htmlFor="subject">Subject</label>
            <input required type="text" id="subject" placeholder='' className='rounded-2xl px-3 py-2 bg-transparent border border-card focus:outline-primary' onChange={handleChange} />
          </div>

          <textarea id="message" className='w-full min-h-44 resize-x-none rounded-2xl px-3 py-1 bg-transparent border border-card focus:outline-primary' onChange={handleChange}></textarea>

          <button type='submit' className='button'>Send</button>
        </form>

        <div className='w-full h-96 lg:h-auto'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63045.10710199489!2d7.3586756742029396!3d9.03461943483417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e73d9ee045d79%3A0xea29129d7cdc6855!2sLugbe%20900107%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1739419467047!5m2!1sen!2sng" style={{border:0, width: '100%', height: "100%"}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
