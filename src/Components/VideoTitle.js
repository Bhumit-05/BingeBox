import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[450px] pb-[400px] pl-[70px] px-[20px] py-[20px] absolute bg-gradient-to-r from-black text-white'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='w-[500px] pt-[25px]'>{overview} </p>
        <div className='pt-[25px]'>
            <button className='bg-white text-black mr-[10px] w-[130px] h-[50px] rounded-lg text-xl hover:opacity-85'>
                ▶ Play
            </button>
            <button className='bg-gray-400 text-white mr-[10px] w-[130px] h-[50px] rounded-lg text-xl bg-opacity-30 ml-[10px]'>
              ⓘ More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;