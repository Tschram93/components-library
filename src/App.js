import CardsRGB from './components/CardsRGB/CardsRGB';
import SidebarNav from './components/SidebarNav/SidebarNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Spinner from './components/Spinner/Spinner';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';

function App() {
	return (
		<div className='App'>
			{/* <header>
				<Router>
					<SidebarNav />
					<Routes>
						<Route exact path='/' component={Home} />
						<Route path='/Products' component={Products} />
						<Route path='/Reports' component={Reports} />
					</Routes>
				</Router>
			</header>
			<Spinner /> */}
				<CardsRGB />
		</div>
	);
}

export default App;
