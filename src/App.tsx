import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';
import { DashboardLayout } from './layouts/DashboardLayout';

// Pages
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Plans from './pages/Plans';
import { Dashboard } from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>

        {/* ROTAS PÚBLICAS */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/plans" element={<Plans />} />
        </Route>

        {/* ROTAS INTERNAS / ADMIN */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
