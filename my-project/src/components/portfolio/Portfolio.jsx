import React from 'react'
import ContentWrapper from '../shared/ContentWrapper'
// import first from '@/public/portfolio/two.webp'
import first from '../../assets/portfolio/two.webp'
// import second from '@/public/portfolio/first.jpg'
import second from '../../assets/portfolio/first.jpg'
// import third from '@/public/portfolio/single.jpg'
import third from '../../assets/portfolio/single.jpg'
// import fourth from '@/public/portfolio/headphone.jpg'
import fourth from '../../assets/portfolio/headphone.jpg'
// import fifth from '@/public/portfolio/group.jpg'
import fifth from '../../assets/portfolio/group.jpg'
// import smily from '@/public/portfolio/smily.jpg'
import smily from '../../assets/portfolio/smily.jpg'





const Portfolio = () => {
  return (
    <ContentWrapper>
    <div>
        <h2 className='text-blue-800 text-sm font-semibold text-center mt-20'>PROJECT GALLERY</h2>
        <h1 className='text-center text-2xl font-bold mt-3 mb-10'>Our Latest Portfolio</h1>
        <div className='grid grid-cols-3 gap-2 w-full'>
            <img src={first}  className='w-full md:h-[350px] h-[250px] object-cover' alt='first' />
            <img src={second}  alt='first'  className='object-cover h-[200px] md:h-[200px] w-full'/>
            <img src={third}  className='w-full md:h-[350px] h-[250px] object-cover' alt='first' />
            <img src={fourth}  alt='first' className='object-cover h-[200px] md:h-[200px] w-full' />
            <img src={fifth}  className='w-full md:h-[350px] h-[250px] object-cover relative md:bottom-36 bottom-12' alt='first' />
            <img src={smily} alt='first' className=' object-cover h-[200px] md:h-[200px] w-full' />
        </div>
    </div>
    </ContentWrapper>
  )
}

export default Portfolio