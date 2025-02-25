import React from 'react'
import uber from '../assets/uber.png'
const Home = () => {
    return (
        <div>
            <div className='h-screen pt-5 flex justify-between flex-col w-full bg-red-400'>
               <img src={uber} alt=""  className='w-16 ml-8'/>
                <div className='bg-white py-5 px-10 '>
                <h2 className='text-2xl font-bold '>Get Started with Uber</h2>
                <button className='text-white bg-black mt-2 w-full py-3 rounded '>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Home
