
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import FootBar from './components/FootBar';
import './App.css';
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <FootBar/>
      </Router>
    </>
  );
}

export default App;
