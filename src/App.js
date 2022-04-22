// import CardsRGB from './components/CardsRGB/CardsRGB';
// import FlipCard from './components/FlipCard/FlipCard';
import MagicNavbar from './components/MagicNavbar/MagicNavbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SidebarNav from './components/SidebarNav/SidebarNav';
// import Spinner from './components/Spinner/Spinner';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';

function App() {
	return (
		<div className='App'>
			<header>
				<Router>
				<MagicNavbar />
				{/* <SidebarNav /> */}
					<Routes>
						<Route exact path='/' component={Home} />
						<Route path='/Products' component={Products} />
						<Route path='/Reports' component={Reports} />
					</Routes> 
				</Router>  
			</header>
			{/* <Spinner /> */}
			{/* <CardsRGB />  */}
			{/* <FlipCard /> */}
		</div>
	);
}

export default App;
