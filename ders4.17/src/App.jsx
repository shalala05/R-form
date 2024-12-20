import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
import Timer from './Timer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/clock" element={<Clock />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Router>
  );
};

export default App;
