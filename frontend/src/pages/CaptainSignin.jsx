import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add login logic here
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <form onSubmit={handleSubmit}>
          <h3 className='text-xl mb-2'>What's your email</h3>
          <input 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg' 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='email@example.com' 
            required
          />
          <h3 className='text-xl mb-2'>Enter Password</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='password' 
            required
          />
          <button 
            type="submit"
            className='bg-[#111] text-white font-medium mb-7 rounded px-4 py-2  w-full text-lg'>
            Login
          </button>
          <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Register as a captain</Link></p>
        </form>
      </div>
      <div>
        <Link to='/login' className= ' flex items-center justify-center bg-teal-300 text-white font-medium mb-7 rounded px-4 py-2 w-full text-lg'>Sign in as User</Link>
      </div>
    </div>
  );
};


export default CaptainSignin
