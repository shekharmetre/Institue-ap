import React, { useCallback, useEffect, useState } from 'react'
import { useSocket } from '../../utils/context/SocketProvider'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
	const socket = useSocket()
	const navigation = useNavigate()
	const [email,setEmail]= useState('')
	const [room,setRoom] = useState('')

	// const handleJoinRoom = useCallback((data)=>{
	// 		const {email,room} = data
	// 		navigation(`/profile/${room}`)
	// },[navigation])

	// useEffect(()=>{
	// 		socket.on('room:join',handleJoinRoom)
	// 		return () => {socket.off('room:join',handleJoinRoom)}
	// },[socket])

	

	const handleSubmit = useCallback((e)=>{
			e.preventDefault()
			socket.emit('room:join',{email,room})
			navigation(`/profile/${room}`)
	},[email,room,socket])
	
  return (
	<div>
		<form onSubmit={handleSubmit}>
			<input type="email" placeholder='enter email' className='px-2 border-2 p-2' id='email' onChange={(e)=>setEmail(e.target.value)} value={email} />
			<br />
			<input type="text" placeholder='Room id' className='px-2 border-2 p-2' id='email' onChange={(e)=>setRoom(e.target.value)} value={room} />
			<button className='btn' type='submit'>Room</button>
		</form>
	</div>
  )
}

export default Profile