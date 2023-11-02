import React from 'react'

const Course = ({imaged,title,paragraph,buttonContent,icon}) => {
  return (
	<div className=''>
		<img src={imaged} alt=""  className='w-full' />
		<div className='px-8 p-3 mt-3 flex flex-col gap-3'>
		<h2 className='flex flex-col font-bold text-xl'>{title}</h2>
		<p>{paragraph}</p>
		<p className='flex items-center gap-5 text-md font-bold font-sans'>{buttonContent} <span>{icon}</span></p>
		</div>
	</div>
  )
}

export default Course