import React from 'react'
import { DP_URL, NETFLIX_LOGO } from '../utils/Constants';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(store => store.user);
  const navigate= useNavigate();
  const handleClick = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-[190px] ml-[345px] mt-[4px]' src={NETFLIX_LOGO} alt="Logo"></img>
      {user && (<div>
        <img alt="DP" src={user.photoURL}></img>
        <button 
          className='text-red-400 bg-black rounded-2xl w-20 h-10 mt-[25px] mr-[80px]'
          onClick={handleClick}
          >Sign out
          </button>
      </div>)}
    </div>
  )
}

export default Header;