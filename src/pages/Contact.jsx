import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef({
    f_name: "",
    l_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    formRef.current[e.target.id] = e.target.value;
    setErrors(prevErrors => ({ ...prevErrors, [e.target.id]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formRef.current.f_name.trim())
      newErrors.f_name = "First name is required";
    if (!formRef.current.l_name.trim())
      newErrors.l_name = "Last name is required";
    if (!formRef.current.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formRef.current.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formRef.current.subject.trim())
      newErrors.subject = "Subject is required";
    if (!formRef.current.message.trim())
      newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log(formRef.current);
    alert(
      `${formRef.current.f_name} ${formRef.current.l_name}, your message has been sent successfully!`
    );

    try {
      const response = await fetch("https://your-api-endpoint.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formRef.current),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      document.getElementById("f_name").value = "";
      document.getElementById("l_name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    }
  };

  return (
    <div className='mt-5 px-3 md:px-6 lg:px-10'>
      <section className='flex flex-1 flex-col justify-between gap-10 lg:flex-row lg:gap-20'>
        <form
          onSubmit={handleSubmit}
          className='space-y-5 p-5 lg:px-20 lg:py-10 bg-gray-100 w-full min-h-fit'
        >
          <h2 className='header capitalize'>contact form</h2>

          <div className='flex justify-between flex-col lg:flex-row w-full'>
            <div className='space grid gap-2'>
              <label htmlFor='f_name'>First Name</label>
              <input
                type='text'
                id='f_name'
                className='rounded-2xl px-3 py-2 bg-transparent border border-card focus:outline-primary'
                onChange={handleChange}
              />
              {errors.f_name && (
                <p className='text-danger text-sm'>{errors.f_name}</p>
              )}
            </div>
            <div className='space grid gap-2'>
              <label htmlFor='l_name'>Last Name</label>
              <input
                type='text'
                id='l_name'
                className='rounded-2xl px-3 py-2 bg-transparent border border-card focus:outline-primary'
                onChange={handleChange}
              />
              {errors.l_name && (
                <p className='text-danger text-sm'>{errors.l_name}</p>
              )}
            </div>
          </div>

          <div className='space grid gap-2'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              className='rounded-2xl px-3 py-2 bg-transparent border border-card focus:outline-primary'
              onChange={handleChange}
            />
            {errors.email && (
              <p className='text-danger text-sm'>{errors.email}</p>
            )}
          </div>

          <div className='space grid gap-2'>
            <label htmlFor='subject'>Subject</label>
            <input
              type='text'
              id='subject'
              className='rounded-2xl px-3 py-2 bg-transparent border border-card focus:outline-primary'
              onChange={handleChange}
            />
            {errors.subject && (
              <p className='text-danger text-sm'>{errors.subject}</p>
            )}
          </div>

          <div className='space grid gap-2'>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              className='w-full min-h-44 resize-none rounded-2xl px-3 py-1 bg-transparent border border-card focus:outline-primary'
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className='text-danger text-sm'>{errors.message}</p>
            )}
          </div>

          <button type='submit' className='button hover:text-white hover:font-semibold hover:bg-primary'>
            Send
          </button>
        </form>

        <div className='w-full h-96 lg:h-auto'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63045.10710199489!2d7.3586756742029396!3d9.03461943483417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e73d9ee045d79%3A0xea29129d7cdc6855!2sLugbe%20900107%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1739419467047!5m2!1sen!2sng'
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
