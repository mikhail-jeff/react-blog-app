import BlogList from '../components/BlogList';
import { SpinnerDotted } from 'spinners-react';
import useFetch from '../hooks/useFetch';

const Home = () => {
	const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

	return (
		<section>
			<div className='home-title'>
				<h2>Blog Lists</h2>
			</div>
			<div className='home'>
				{error && <p>{error}</p>}
				{isLoading && (
					<div>
						<h3 className='spinner-container'>
							<SpinnerDotted />
						</h3>
					</div>
				)}
				{blogs && <BlogList blogs={blogs} />}
			</div>
		</section>
	);
};

export default Home;
