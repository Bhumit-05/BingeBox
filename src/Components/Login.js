import React from 'react'
import Header from './Header';
import { LOGIN_BG_URL } from '../utils/Constants';

const Login = () => {
  return (
    <div><Header/>
        <div className='absolute'>
            <img src={LOGIN_BG_URL} alt="bg"></img>
        </div>
        <div className='bg-black absolute w-[400px] mx-auto right-0 left-0  mt-[100px] h-[500px] text-white pl-[50px] bg-opacity-80'>
            <h1 className='text-3xl mt-[50px] ml-[5px] mb-[20px]'>Sign In</h1>
            <input type='text' placeholder='Email Address' className='m-2 p-2 bg-gray-700 h-[50px] w-[280px] rounded-[4px]'></input>
            <input type='text' placeholder='Password' className=' rounded-[4px] m-2 p-2 bg-gray-700 h-[50px] mb-[15px] w-[280px]'></input>
            <button className='bg-red-600 w-[280px] ml-[7px] h-11 rounded-[5px]'>Sign In</button>
        </div>
    </div>

  )
}

export default Login;