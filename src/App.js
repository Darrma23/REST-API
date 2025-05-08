import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Status1 from './Pages/Status1';
import Login1 from './Login/Login_1';
import Login2 from './Login/Login2';
import Tabletugas from './Table/Tabletugas';
import Tablestatus from './Table/Tablestatus';
import Homescraper from './Scraper/Homescraper';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Status1" element={<Status1 />} />
              <Route path="/Login1" element={<Login1 />} />
             <Route path="/Login2" element={<Login2 />} />
             <Route path="/Tabletugas" element={<Tabletugas />} />
             <Route path="/Tablestatus" element={<Tablestatus />} />
             <Route path="/Homescraper" element={<Homescraper />} />
          </Routes>
      </Router>
  );
}

export default App;