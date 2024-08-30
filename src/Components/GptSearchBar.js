import React from 'react'
import lang from '../utils/LanguageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);

  return (
    <div className='m-[200px] p-[100px]'>
      <form className='bg-black ml-[300px] mt-[50px] inline-block rounded-lg pr-[15px]'>
        <input type="text" className='p-[16px] m-[16px] w-[500px] text-lg py-[10px]'
         placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='py-[12px] px-4 bg-purple-500 text-white text-lg rounded-lg inline-block'>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;