import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-10">
  <Link className="text-[7vw] uppercase border-3 border-white rounded-full leading-none mb-0 px-7">
    work
  </Link>

  <Link className="text-[7vw] uppercase border-3 border-white rounded-full leading-none mb-0 px-7">
    agency
  </Link>
</div>
  )
}

export default HomeBottomText