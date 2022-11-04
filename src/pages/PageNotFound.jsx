import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
	return (
		<div className='error-page'>
			<h2>ERROR!!!</h2>
			<h2>Page Not Found!!!</h2>
			<Link to='/'>Back to Home</Link>
		</div>
	);
};

export default PageNotFound;
