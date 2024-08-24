import React from 'react'
import lang from '../utils/LanguageConstants';

const GptSearchBar = () => {
  return (
    <div className='m-[200px] p-[100px]'>
      <form className='bg-black ml-[300px] mt-[50px] w-[635px] rounded-lg ]'>
        <input type="text" className='p-[16px] m-[16px] w-[500px] text-lg py-[10px]' placeholder='What would you like to watch today?'/>
        <button className='py-[12px] px-4 bg-purple-500 text-white text-lg rounded-lg w-[85px]'>
          {lang.hindi.search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;