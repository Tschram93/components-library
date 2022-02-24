import SidebarNav from './components/SidebarNav/SidebarNav';
import Spinner from './components/Spinner/Spinner';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header>
        <SidebarNav />
				<h1>Using React</h1>
			</header>
			<Spinner />
		</div>
	);
}

export default App;
