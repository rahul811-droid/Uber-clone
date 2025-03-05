import React from 'react'
import axios from 'axios'
const url = import.meta.env.VITE_BASE_URL;

const UserLogout = () => {

    const token = localStorage.getItem('token');

    axios.get(url + ''



  return (
    <div>
      User Logout
    </div>
  )
}

export default UserLogout
