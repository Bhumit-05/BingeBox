import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[450px] pb-[370px] pl-[70px] px-[20px] py-[20px] absolute bg-gradient-to-r from-black text-white'>
        <h1 className='md:text-5xl text-2xl md:mt-0 -mt-[370px] md:mb-0 -mb-[15px] md:ml-0 -ml-[40px] font-bold'>{title}</h1>
        <p className='w-[500px] pt-[25px] hidden md:inline-block'>{overview} </p>
        <div className='pt-[25px]'>
            <button className='bg-white text-black mr-[10px] md:w-[130px] md:ml-0 -ml-[40px] w-[80px] md:h-[50px] h-[30px] rounded-lg md:text-xl hover:opacity-85'>
                ▶ Play
            </button>
            <button className='bg-gray-400 text-white mr-[10px] md:w-[130px] w-[120px] md:h-[50px] h-[30px] rounded-lg text-xl bg-opacity-40 ml-[10px]'>
              ⓘ More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;