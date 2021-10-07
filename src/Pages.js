import React from 'react';
import { Switch, Route } from 'react-router-dom';

//?STYLES
import './Pages.css';

//?COMPONENTS
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Notfound from './pages/NotFound/NotFound';

const Pages = () => {
	return (
		<div className="Pages">
			<Switch>
				<Route path="/projects">
					<Projects />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route>
					<Notfound />
				</Route>
			</Switch>
		</div>
	);
};

export default Pages;
