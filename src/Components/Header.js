import React from 'react'
import { NETFLIX_LOGO } from '../utils/Constants';

const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black z-10'>
        <img className='w-[190px] ml-[345px] mt-[4px]' src={NETFLIX_LOGO} alt="Logo"></img>
    </div>
  )
}

export default Header;