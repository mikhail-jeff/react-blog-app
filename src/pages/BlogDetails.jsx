import { useParams } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
	const navigate = useNavigate();

	const handleClick = () => {
		fetch('http://localhost:8000/blogs/' + id, {
			method: 'DELETE',
		}).then(() => {
			navigate('/');
		});
	};

	return (
		<div className='blog-details'>
			{isLoading && (
				<h3 className='spinner-container'>
					<SpinnerDotted />
				</h3>
			)}
			{error && (
				<div className='error-message'>
					<p>{error}</p>
				</div>
			)}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={handleClick}>Delete</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
