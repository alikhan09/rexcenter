import React from 'react'
import img from '../assets/gg.jpg'
const DD = () => {
  return (
    <div className='bg-white rounded-md w-full p-4 '>
      <div className='flex justify-between items-center px-72 '>
        <div>
            <img className='rounded-full w-40 h-40' src={img} alt="" />

        </div>
        <div className='bg-red-600 font-bold rounded-full text-white p-4 text-4xl '>
            جنازے کا اعلان
        </div>

      </div>
      
    </div>
  )
}

export default DD
