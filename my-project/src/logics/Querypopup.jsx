import React, { useState } from 'react'

const Querypopup = () => {
	const [inputData,setInputdata]= useState('')
	const handleClick = () =>{
			setInputdata('')
	}
  return (
	<div className='flex'>
		<input type="text" placeholder='enter question/query' className='bg-transparent backdrop-blur-md px-1 text-[18px]' value={inputData} onChange={(e)=> setInputdata(e.target.value)} />
		<p className='btn' onClick={handleClick}>Add</p>
	</div>
  )
}

export default Querypopup