import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar'
import { INVERTED_BG, PURPLE_BG } from '../utils/Constants';

const GptSearch = () => {
  return (
    <div className='-mt-[200px]'>
        <img className='w-full -z-10 absolute' src={PURPLE_BG} alt="bg"></img>
        <img className='w-full -z-10 absolute mt-[1070px]' src={INVERTED_BG} alt="bg"></img>
        <img className='w-full -z-10 absolute mt-[2140px]' src={PURPLE_BG} alt="bg"></img>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;