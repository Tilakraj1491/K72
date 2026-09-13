import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
return (
    <div className='font-[font1] text-center'>
        <div className='text-[9.5vw] uppercase leading-[9vw] flex items-center justify-center'>The spark for</div>
        <div className='w-full text-[9.5vw] uppercase leading-[9vw] flex items-center justify-center'>
            <div>all</div>
            <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-5'>
                <Video />
            </div>
            <div>things</div>
        </div>
        <div className='text-[9.5vw] uppercase leading-[9vw] flex items-center justify-center'>creative</div>
    </div>
  )
}

export default HomeHeroText