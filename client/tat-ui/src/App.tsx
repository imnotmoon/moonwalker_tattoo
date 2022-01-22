import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './_component/Header';
import Archive from './_pages/Archive';
import Contact from './_pages/Contact';
import Main from './_pages/Main';
import Reservation from './_pages/Reservation';

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/archive' element={<Archive />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/reservation' element={<Reservation />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
