import React, {useEffect} from 'react'
import axios from 'axios';

function LandingPage() {
	
	useEffect(() => {
		axios.get('/api/hello')
		//get req를 server에 보냄.
		.then(response => console.log(response.data))
		//다시 받은 res를 console.log 시킴
	}, [])
	
	return (
		<div style={{
				display:'flex', justifyContent: 'center', alignItems:'center', width:'100%', height : '100vh'}}>
			<h2>시작페이지</h2>
		</div>
	)
}

export default LandingPage