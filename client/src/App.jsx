import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Pages/home';
import Navbar from './components/Nav/nav';
import About from './Pages/about';
import Contact from './Pages/contact';
import ArticlesList from './Pages/blog';
import BlogDetail from './components/Detail/blogdetail';
import Footer from './components/Footer/footer';
import Notfound from './components/404/notfound';

function App() {
  const location = useLocation();
  const isNotFoundPage = location.pathname === '/404';

  return (
    <>
      {!isNotFoundPage && <Navbar />}
      <div className='max-w-screen-xl mx-auto pt-20 mb-10'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/blog" element={<ArticlesList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blog/name/:name" element={<BlogDetail />} />
          <Route path="/404" element={<Notfound />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      {!isNotFoundPage && <Footer />}
    </>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;