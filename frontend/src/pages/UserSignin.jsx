import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignin = () => {
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
          <p className='text-center'>New here? <Link to='/captain-signup' className='text-blue-600'>Create new Account</Link></p>
        </form>
      </div>
      <div>
        <Link to='/captain-login' className= ' flex items-center justify-center bg-gray-400 text-white font-medium mb-7 rounded px-4 py-2 w-full text-lg'>Sign in as Captain</Link>
      </div>
    </div>
  );
};

export default UserSignin;
