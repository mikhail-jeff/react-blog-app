import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import About from './pages/About';
import BlogDetails from './pages/BlogDetails';

function App() {
	return (
		<Router>
			<Navbar />
			<div className='content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/create' element={<Create />} />
					<Route path='/about' element={<About />} />
					<Route path='/blogs/:id' element={<BlogDetails />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
