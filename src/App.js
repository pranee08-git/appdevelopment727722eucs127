import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Footer from './components/pages/Footer';
import PaymentPage from './components/pages/PaymentPage';
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import ForgetPasswordPage from './components/pages/ForgetPasswordPage';
import HomePage from './components/pages/HomePage';
import BookingPage from './components/pages/BookingPage'; 
import AdminLoginPage from './components/pages/AdminLoginPage';
import AdminHomePage from './components/pages/AdminHomePage'; 

import './App.css';

function App() {
    const location = useLocation();
    const hideNavbarRoutes = ['/', '/login', '/register'];
    const hideFooterRoutes = ['/', '/payment'];

    return (
        <div className="app-container">
            {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/forget-password" element={<ForgetPasswordPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/booking/:hallId" element={<BookingPage />} />
                    <Route path="/admin-login" element={<AdminLoginPage />} />
                    <Route path="/admin-home" element={<AdminHomePage />} /> {/* Add route for AdminHomePage */}
                    <Route path="/payment" element={<PaymentPage />} />
                </Routes>
            </div>
            {!hideFooterRoutes.includes(location.pathname) && <Footer />}
        </div>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}
