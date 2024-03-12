
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import FootBar from './components/FootBar';
import Skills from './components/Skills';
import Resume from './components/Resume';
import './App.css';
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <FootBar/>
      </Router>
    </>
  );
}

export default App;
