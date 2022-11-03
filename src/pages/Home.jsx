import { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState(null);

	useEffect(() => {
		fetch('http://localhost:8000/blogs')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setBlogs(data);
			});
	}, []);

	return (
		<section>
			<div className='home'>{blogs && <BlogList blogs={blogs} title='Blog Lists' />}</div>
		</section>
	);
};

export default Home;
