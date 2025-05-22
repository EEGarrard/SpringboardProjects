import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ContentPage from './components/ContentPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:category/:id" element={<ContentPage />} />
            <Route path="/:category" element={<ContentPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;