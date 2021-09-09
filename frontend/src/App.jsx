import React from 'react';
import './App.css';

import { Route, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router';

//hooks
import useAuth from './hooks/useAuth';

// Components
import Test from './components/Test';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import YouTubePlayer from './components/YoutubePlayer/YoutubePlayer';
import MusicPage from './pages/MusicPage';

import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';

function App() {
	const { data: auth } = useAuth();
	const { pathname } = useLocation();

	return (
		<div className='App'>
			{pathname !== '/register' && pathname !== '/login' && <Header />}

			<Aside />

			<main>
				<Route exact path='/' component={MusicPage} />
				<Route exact path='/register' component={RegisterPage} />

				<Route exact path='/login' component={LoginPage}>
					{auth && auth.loggedIn && <Redirect to='/' />}
				</Route>

				<Route exact path='/test' component={Test}>
					{auth && !auth.loggedIn && <Redirect to='/' />}
				</Route>
			</main>

			{pathname !== '/register' && pathname !== '/login' && <Footer />}

			<YouTubePlayer />
		</div>
	);
}

export default App;

// rfce för komponent
// semikolon & single quote
// minst en rad mellan kodblock
