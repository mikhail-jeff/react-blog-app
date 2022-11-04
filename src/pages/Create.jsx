import { useState } from 'react';
import { SpinnerDotted } from 'spinners-react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };

		setIsLoading(true);

		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		}).then(() => {
			setIsLoading(false);
			navigate('/');
		});
	};

	return (
		<div className='create'>
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Blog title:</label>
					<input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />
				</div>
				<div>
					<label>Blog body:</label>
					<textarea cols='30' rows='10' required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
				</div>
				<div>
					<label>Blog author:</label>
					<input type='text' required value={author} onChange={(e) => setAuthor(e.target.value)} />
				</div>
				{!isLoading && <button>Add Blog</button>}
				{isLoading && (
					<h3>
						<SpinnerDotted />
					</h3>
				)}
			</form>
		</div>
	);
};

export default Create;
