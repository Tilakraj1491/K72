import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center item-end gap-10'>
        <Link className='text-[7vw] uppercase border-3 border-white rounded-full leading-[7vw]  px-6 item-bottom'>work</Link>
        <Link className='text-[7vw] uppercase border-3 border-white rounded-full leading-[7vw]  px-6 item-bottom'>agency</Link>
    </div>
  )
}

export default HomeBottomText