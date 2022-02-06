import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './_component/Header';
import Archive from './_pages/Archive';
import Contact from './_pages/Contact';
import Main from './_pages/Main';
import About from './_pages/About';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'http://localhost:8000/api',
});

function App() {
  return (
    <Provider value={client}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
