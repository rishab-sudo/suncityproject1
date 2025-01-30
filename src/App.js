import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom"
import  Navbar  from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import "./App.css"
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
       <Router>
      <Navbar/>
   <Routes>
  <Route path="*" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/service" element={<Service />} />
  <Route path="/team" element={<Team />} />
  <Route path="/contact" element={<Contact />} />
 </Routes>
<Footer/>
      </Router>
    </div>
  );
}

export default App;
