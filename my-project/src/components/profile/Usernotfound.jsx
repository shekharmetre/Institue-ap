import React from 'react'
import { Link } from 'react-router-dom'

const Usernotfound = () => {
  return (
	<div className='bg-white w-56 h-40 flex flex-col rounded-3xl justify-between p-5'>
      <h1 className='text-xl text-center leading-6' style={{filter:"backdrop(10px)"}}>Welcome To Patel Computer Institute</h1>
      <p className='text-center'>?</p>
      <Link to="/login" className='text-[16px] text-blue-800 font-semibold leading-5 text-center'>click to sign in</Link>
  </div>
  )
}

<div class="header-card flex justify-between font-semibold">
      <div class="">Team members</div>
      <div class="flex items-center gap-x-1 text-sm text-blue-500">
         <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
      <span>See all</span>
      </div>
    </div>

export default Usernotfound