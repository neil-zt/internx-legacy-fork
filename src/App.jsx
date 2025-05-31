import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Internships from './pages/Internships';
import Consulting from './pages/Consulting';
import Experience from './pages/Experience';
import ExperienceDetail from './pages/ExperienceDetail';
import InterviewBasic from './pages/InterviewBasic';
import InterviewDetail from './pages/InterviewDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import './styles/navbar.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/experience/:id" element={<ExperienceDetail />} />
            <Route path="/interview/basic" element={<InterviewBasic />} />
            <Route path="/interview/:id" element={<InterviewDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 