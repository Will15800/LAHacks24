import React from 'react';
import './App.css'; // Assuming you keep a single CSS file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PatientPage from './pages/PatientPage.jsx';
import DoctorPage from './pages/DoctorPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
// ... other component imports ...



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/PatientPage/:id" element={<PatientPage />} />
        <Route path="/pages/DoctorPage" element={<DoctorPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Handle 404 routes */}
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;