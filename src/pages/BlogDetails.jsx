import { useParams } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react';
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);

	return (
		<div className='blog-details'>
			{isLoading && (
				<h3 className='spinner-container'>
					<SpinnerDotted />
				</h3>
			)}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>{blog.body}</div>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
