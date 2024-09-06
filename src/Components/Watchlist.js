import React from 'react'
import Header from './Header';
import { INVERTED_YELLOW_BG, YELLOW_BG } from '../utils/Constants';
import { useSelector } from 'react-redux';
import SuggestionCard from './SuggestionCard';

const Watchlist = () => {

  const watchlist = useSelector(store => store.watchlist.watchlist);

  return (
    <div className='relative'>
      <div className='z-10'>
        <div className='absolute -mt-[250px]'>
          <Header/>
        </div>
        <img className='absolute -mt-[250px] w-full -z-10 object-cover' src= {YELLOW_BG} alt='yellow bg'/>
        <img className='absolute mt-[837px] w-full -z-10 object-cover' src= {INVERTED_YELLOW_BG} alt='yellow bg'/>
        <img className='absolute mt-[1924px] w-full -z-10 object-cover' src= {YELLOW_BG} alt='yellow bg'/>
      </div>
      <div className='bg-black/75 mt-[250px] pb-[30px] px-[80px] -z-0 ml-auto mr-auto w-[1000px] rounded-xl'>
        <h1 className='text-custom-gold ml-auto mr-auto max-w-fit font-extralight text-4xl pt-[56px] pb-[40px]'>WATCHLIST</h1>
        {watchlist.map(movie => <SuggestionCard movie={movie}/>)}
        {watchlist.length===0 && (
          <h1 className='text-white text-lg mx-auto max-w-fit mt-[20px] '>Your watchlist is looking a bit empty—add some movies and make it sparkle!</h1>
        )}
      </div>
        
      </div>
  )
}

export default Watchlist;