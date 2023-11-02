import React from 'react'
import ContentWrapper from '../shared/ContentWrapper'
import { Checkout } from '../../../utils/data/data'


const Quality = () => {
  return (
    <ContentWrapper>
        <p className='uppercase text-[10px] mt-20 font-semibold text-blue-800 text-center'>Patel Institute Fature Pograms</p>
        <h1 className='text-2xl text-black font-bold text-center mt-3'>Check Out Featuristic Win</h1>
        <div className='grid md:px-0 px-14 md:grid-cols-4 grid-cols-1 md:items-start w-full place-content-center gap-10'>
        {Checkout.map((item,index)=>(
            <div className='p-5 mt-5 bg-white shadow-2xl rounded-md' key={index}>
                <img src={item.image} width={150} height={150} alt='feat'  />
                <p className='text-2xl my-3 mt-5 md:text-xl font-bold'>{item.title}</p>
                <span></span>
                <p>{item.para}</p>
                <div className='flex items-center gap-5 mt-5'>
                <p className='text-md font-bold '>{item.quote}</p>
                <p className=''>{item.icon}</p>
                </div>
            </div>
        ))}
        </div>
    </ContentWrapper>
  )
}

export default Quality