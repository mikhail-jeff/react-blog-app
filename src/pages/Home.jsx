import { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{
			title: 'My new website',
			body: 'lorem ipsum. . .',
			author: 'Mario',
			id: 1,
		},
		{
			title: 'Welcome party!',
			body: 'lorem ipsum. . .',
			author: 'Yoshi',
			id: 2,
		},
		{
			title: 'Web dev top tips',
			body: 'lorem ipsum. . .',
			author: 'Mario',
			id: 3,
		},
	]);

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	};

	useEffect(() => {
		console.log(`Use effect ran!`);
	}, []);

	return (
		<section className='home'>
			<BlogList blogs={blogs} title='Blog Lists' handleDelete={handleDelete} />
		</section>
	);
};

export default Home;
