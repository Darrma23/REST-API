import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Status1 from './Pages/Status1';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Status1" element={<Status1 />} />
          </Routes>
      </Router>
  );
}

export default App;