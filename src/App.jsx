import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor/:id" element={<Profile />} />
          <Route path="/confirmation" element={<Confirmation />} />
          {/* fallback */}
          <Route path="*" element={<div className="p-8 text-center">Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
