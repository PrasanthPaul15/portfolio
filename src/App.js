
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import ProjectItems from './components/ProjectItems/ProjectItems';
import Contact from './components/Contact/Contact';
import {Route,BrowserRouter, Routes} from 'react-router-dom'
import resume from './assets/Resume.pdf'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
      <Route path='/' element={<Navbar/>} />
      <Route path='/resume' element={<Resume/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/about' element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />      wa
    </Routes>

    </BrowserRouter>
      

  );
}

export default App;
