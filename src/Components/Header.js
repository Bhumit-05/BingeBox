import React, { useEffect } from 'react'
import { DP_URL, NETFLIX_LOGO } from '../utils/Constants';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';

const Header = () => {
  const user = useSelector(store => store.user);
  const navigate= useNavigate();
  const dispatch=useDispatch();

  useEffect(()=> {
    const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(
          addUser({
            uid: uid, 
            email: email, 
            displayName: displayName,
            photoURL: photoURL
          })
        );
        navigate("/browse");
        
      }
      else {
        dispatch(removeUser());
        navigate("/");
      }
      
    });
    return () => unsubscribe();

  },[])

  const handleClick = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-[190px] ml-[345px] mt-[4px]' src={NETFLIX_LOGO} alt="Logo"></img>
      {user && (<div className='flex'>
        <button 
          className='mr-[50px] mt-[25px] pt-[8px] bg-black text-red-400 rounded-2xl w-[140px] pl-[10px] h-10 cursor-pointer hover:bg-white'>
            {user.displayName}
        </button>
        <button 
          className='text-red-400 bg-black rounded-2xl w-20 h-10 mt-[25px] mr-[100px]'
          onClick={handleClick}
          >Sign out
          </button>
      </div>)}
    </div>
  )
}

export default Header;