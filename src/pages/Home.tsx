import React, { useEffect } from 'react';
import axios from 'axios';
const Home = () => {
	
	useEffect(() => {
		axios.post('/api/get-token',{
			appName:'csm',
			environment:'dev'
		})
		.then(response => {
			console.log(response.data);
		})
		.catch(error => {
			console.log(error);
		})
	}, []);
	  return (
	<div>
	  <h1>React, TypeScript and Tailwind App!</h1>
	</div>
  );
}

export default Home;