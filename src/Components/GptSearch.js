import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar'
import { INVERTED_PURPLE_BG, PURPLE_BG } from '../utils/Constants';

const GptSearch = () => {
  return (
    <div className='-mt-[200px] relative'>
        <div className='absolute inset-0 -z-10'>
          <div className='relative'>
            <img className='w-full -z-10 absolute md:mt-0 md:h-auto h-[100vh] md:top-auto top-0' src={PURPLE_BG} alt="bg"></img>
            <img className='w-full -z-10 absolute md:mt-[56.25%] md:h-auto h-[100vh] md:top-auto top-[100vh]' src={INVERTED_PURPLE_BG} alt="bg"></img>
            <img className='w-full -z-10 absolute md:mt-[112.5%] md:h-auto h-[100vh] md:top-auto top-[200vh]' src={PURPLE_BG} alt="bg"></img>
            <img className='w-full -z-10 absolute h-[100vh] top-[300vh] md:hidden' src={INVERTED_PURPLE_BG} alt="bg"></img>
            <img className='w-full -z-10 absolute h-[100vh] top-[400vh] md:hidden' src={PURPLE_BG} alt="bg"></img>
            <img className='w-full -z-10 absolute h-[100vh] top-[500vh] md:hidden' src={INVERTED_PURPLE_BG} alt="bg"></img>
          </div>
        </div>
        <div className='-ml-[400px] md:ml-0 md:mt-0'>
          <GptSearchBar/>
          <GptMovieSuggestions/>
        </div>
    </div>
  )
}

export default GptSearch;