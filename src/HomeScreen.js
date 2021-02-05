import React from 'react';
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';

function App() {
	return (
		<div className="homescreen">
			{/* Navbar */}
			<Nav />
			
			{/* Banner */}
			<Banner />
			{/* Row */}
		</div>
	);
}

export default App;
