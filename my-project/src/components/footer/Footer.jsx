import React from 'react'
import './footer.css'
import { footer } from '../../../utils/data/data'

const Footer = () => {
  return (
    <div className='w-[95%] hidden md:block'style={{background:"#012935"}}>
      <div className='grid grid-cols-3 md:px-20 md:p-14 p-5'>
        {footer.map((item,index)=>(
          <div className='flex md:gap-5' key={index}>
                <img src={item.image} className='md:w-20 md:h-full w-10 h-10' alt="" />
                <div>
                  <p className='md:text-4xl text-xl text-white'>{item.review}</p>
                  <p className='text-white md:w-40 w-20'>{item.para}</p>
                </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer