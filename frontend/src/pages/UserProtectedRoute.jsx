import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectedRoute = ({children}) => {
    const url = import.meta.env.VITE_BASE_URL;

  const { user, setUser } = useContext(UserDataContext);
    const token = localStorage.getItem('token');
    console.log(user)
    const navigate = useNavigate();
    const [ isLoading, setIsLoading ] = useState(true)


    useEffect(() => {
        if (!token) {
            navigate('/login')
        }

        axios.get(url+ '/api/v1/auth/getUserProfile', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setUser(response.data)
                setIsLoading(false)
            }
        })
            .catch(err => {
                console.log(err)
                localStorage.removeItem('token')
                navigate('/login')
            })
    }, [ token ])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    
  return (
    <>
    
    {children}
    </>
  )

}

export default UserProtectedRoute
