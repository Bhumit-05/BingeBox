import React, { useEffect, useState } from 'react'
import { LOGO } from '../utils/Constants';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { setGptFalse, toggleGptSearchView } from '../utils/GptSlice';
import { setWatchlistTrue, toggleWatchlist } from '../utils/WatchlistSlice';

const Header = () => {
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const navigate= useNavigate();
  const dispatch=useDispatch();
  const [dropDown, setDropDown] = useState(0);
  const watchlistButton = useSelector((state) => state.watchlist.watchlistButton);


  const handleDropDown = () => {
    setDropDown(!dropDown);
  }

  const handleLogoClick = () => {
    dispatch(setGptFalse());
    navigate("/");
    dispatch(setWatchlistTrue());
  }

  const handleWatchlistClick = () => {
    dispatch(toggleWatchlist());
    if (!watchlistButton){
      navigate("/browse");
    }
    else navigate("/watchlist");
    dispatch(setGptFalse());
  }

  const handleClick = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleGptSearchClick = () => {
    navigate("/")
    dispatch(toggleGptSearchView());
    dispatch(setWatchlistTrue());
  }

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
        // Only navigate to /browse if you're on the root ("/") path, so we can now go to pageForMovie with a header
        if (window.location.pathname === "/"){
          navigate("/browse");
        }
        
      }
      else {
        dispatch(removeUser());
        navigate("/");
      }
      
    });
    return () => unsubscribe();

  },[])


  return (
    <div className='absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between '>
      <img onClick={handleLogoClick} className='w-[185px] h-[200px] ml-[100px] -mt-[48px] hover: cursor-pointer ' src={LOGO} alt="Logo"></img>
      {user && (<div className='flex'>

        <button 
          className='mr-[60px] mt-[25px] border-custom-gold border-2 text-custom-gold bg-black rounded-full w-[180px] pl-[5px] h-10 cursor-pointer '
          onClick={handleDropDown}>
            👤 {user.displayName} 
        </button>

        <button 
            className='border-custom-gold border-2 text-custom-gold bg-black rounded-full w-[180px] h-10 mt-[25px] mr-[60px]'
            onClick={handleWatchlistClick}
            >{watchlistButton? "Watchlist" : "Browse"}
        </button>

        <button 
          className='bg-purple-600 border-purple-900 border-2 text-white rounded-full w-[180px] mt-[25px] mr-[60px] h-10 '
          onClick={handleGptSearchClick}>{showGptSearch? "Browse" : "֎ GPT Search"}
        </button>

        <button 
          className='border-custom-gold border-2 text-custom-gold bg-black rounded-full w-[180px] h-10 mt-[25px] mr-[60px]'
          onClick={handleClick}
          >Sign out
        </button>
      </div>)}
    </div>
  )
}

export default Header;