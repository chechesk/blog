import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Home from './Pages/home';
import Navbar from './components/Nav/nav';
import About from './Pages/about';
import Contact from './Pages/contact';
import ArticlesList from './Pages/blog';
import BlogDetail from './components/Detail/blogdetail';
import Footer from './components/Footer/footer';
import Notfound from './components/404/notfound';
import NavDashboard from './components/Admin/Nav/navDashboard';
import AdmDashboard from './components/Admin/Dashboard/admdashboard';
import LoginComponents from './components/login/Login';



function App() {
  const location = useLocation();
  const isNotFoundPage = location.pathname === '/404';
  const isLoginPage = location.pathname === '/login';
  const isAdminDashboard = location.pathname === '/blog/dashboard';
 
  return (
    <>
      {!isNotFoundPage && !isLoginPage && !isAdminDashboard && <Navbar />}
      {isAdminDashboard && <NavDashboard />} {/* Show NavAdmin for dashboard route */}
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/blog" element={<ArticlesList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blog/name/:name" element={<BlogDetail />} />
          <Route path="/login" element={<LoginComponents />} />
          <Route path="/blog/dashboard" element={<AdmDashboard />} />
          <Route path="/404" element={<Notfound />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      {!isNotFoundPage && !isLoginPage && !isAdminDashboard && <Footer />}
    </>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;