import React from 'react'

const Tilent = () => {
  return (
	<div>
		<form action="http://localhost:8080/upload" method='POST' encType='multipart/form-data'>
			<input type="file" name='ProfileImage' multiple />
			<button className='btn' type='submit'>Upload</button>
		</form>
	</div>
  )
}

export default Tilent