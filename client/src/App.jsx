// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Home from './Pages/home';
import Navbar from './components/Nav/nav';
import About from './Pages/about';
import Contact from './Pages/contact';
import ArticlesList from './Pages/blog';
import BlogDetail from './components/Detail/blogdetail';
import Footer from './components/Footer/footer';
import Notfound from './components/404/notfound';
import NavDashboard from './components/Admin/Components/Nav/navDashboard';
import AdmDashboard from './components/Admin/Page/Dashboard/admdashboard';
import LoginComponents from './components/login/Login';
import ProtectedRoute from './components/ProtectRouter/protector';
import SpeakersDash from './components/Admin/Components/Speakers/speakersDash';
import PatrocinioDash from './components/Admin/Components/Patrocinadores/patrocinioDash';
import MediaDash from './components/Admin/Components/Media/mediaDash';
import StrategyDash from './components/Admin/Components/Speakers/speakersDash';
import CarrouselDash from './components/Admin/Components/Carrousel/carrouselDash';

function App() {
  const location = useLocation();
  const isNotFoundPage = location.pathname === '/404';
  const isLoginPage = location.pathname === '/login';
  const isAdminDashboard = location.pathname.startsWith('/admin/dashboard');

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
          <Route path="/admin/dashboard" element={<ProtectedRoute element={<AdmDashboard />} />} />
          <Route path="/admin/dashboard/banner" element={<ProtectedRoute element={<CarrouselDash />} />} />
          <Route path="/admin/dashboard/speakers" element={<ProtectedRoute element={<SpeakersDash />} />} />
          <Route path="/admin/dashboard/patrocinio" element={<ProtectedRoute element={<PatrocinioDash />} />} />
          <Route path="/admin/dashboard/strategy" element={<ProtectedRoute element={<StrategyDash />} />} />
          <Route path="/admin/dashboard/media" element={<ProtectedRoute element={<MediaDash />} />} />
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