import React, { useEffect, useState } from 'react';

import './App.css';

//?COMPONENTS
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

//?PAGES
import Pages from './Pages';

function App() {
	//?TODO: MAKE ANIMATION FOR CAROUSEL
	//?TODO: ADD THE EXTRA DATA FOR CAROUSEL
	//?TODO: MAKE SECTIONS RESPONSIVE ON HOME
	const [isTop, setIsTop] = useState(true);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			let yPos = window.scrollY;
			if (yPos === 0) {
				setIsTop(true);
			} else {
				setIsTop(false);
			}
		});
		return () => {
			window.removeEventListener('scroll', () => {});
		};
	}, []);
	return (
		<div className="App">
			<Navbar isTop={isTop} />
			<Pages />
			<Footer />
		</div>
	);
}

export default App;
