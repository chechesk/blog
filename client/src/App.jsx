// App.js
import React, { useEffect } from 'react';
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
import StrategyDash from './components/Admin/Components/Strategy/strategyDash';
import CarrouselDash from './components/Admin/Components/Carrousel/carrouselDash';
import AcountDash from './components/Admin/Account/accountDash';
import AddSpeakers from './components/Admin/Components/Speakers/Add/addSpeakers';
import AddCarrousel from './components/Admin/Components/Carrousel/Add/addCarrousel';
import AddPatrocinado from './components/Admin/Components/Patrocinadores/Add/addPatrocinado';
import ImageGallery from './components/Admin/Components/ImageGallery/galery';
import AddStrategy from './components/Admin/Components/Strategy/Add/addStrategy';
import BlogDash from './components/Admin/Components/Blog/blogdash';
import AddBlogNew from './components/Admin/Components/Blog/add/addBlogNew';
import { useDispatch, useSelector } from 'react-redux';
import SEO from './components/Helmet/helmet';
import TagManager from 'react-gtm-module';
import { fetchSettings } from './redux/Reducer/setting';
import EditSettings from './components/Admin/Components/Settings/settingDasboard';
import EditSeoSettings from './components/Admin/Components/SettingsSeo/seoDasboard';
import Register from './Pages/register';

function App() {
  const location = useLocation();
  const dispatch =useDispatch()
  const isNotFoundPage = location.pathname === '/404';
  const isLoginPage = location.pathname === '/login';
  const isAdminDashboard = location.pathname.startsWith('/admin/dashboard');
  const { gtm_id, ga_id, status, error } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);

  useEffect(() => {
    if (gtm_id) {
      TagManager.initialize({
        gtmId: gtm_id,
      });
    }

    if (ga_id) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', ga_id, {
        cookie_flags: 'SameSite=None; Secure',
      });
    }
  }, [gtm_id, ga_id]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }


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
          <Route path="/registro" element={<Register />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute element={<AdmDashboard />} />} />
          <Route path="/admin/dashboard/banner" element={<ProtectedRoute element={<CarrouselDash />} />} />
          <Route path="/admin/dashboard/banner/add" element={<ProtectedRoute element={<AddCarrousel />} />} />
          <Route path="/admin/dashboard/speakers" element={<ProtectedRoute element={<SpeakersDash />} />} />
          <Route path="/admin/dashboard/speakers/add" element={<ProtectedRoute element={<AddSpeakers/>} />} />
          <Route path="/admin/dashboard/patrocinio" element={<ProtectedRoute element={<PatrocinioDash />} />} />
          <Route path="/admin/dashboard/patrocinio/add" element={<ProtectedRoute element={<AddPatrocinado />} />} />
          <Route path="/admin/dashboard/strategy" element={<ProtectedRoute element={<StrategyDash />} />} />
          <Route path="/admin/dashboard/strategy/add" element={<ProtectedRoute element={<AddStrategy />} />} />
          <Route path="/admin/dashboard/media" element={<ProtectedRoute element={<MediaDash />} />} />
          <Route path="/admin/dashboard/media/add" element={<ProtectedRoute element={<AddBlogNew />} />} />
          <Route path="/admin/dashboard/blog" element={<ProtectedRoute element={<BlogDash />} />} />
          <Route path="/admin/dashboard/blog/:id" element={<ProtectedRoute element={<BlogDetail />} />} />
          <Route path="/admin/dashboard/blog/add" element={<ProtectedRoute element={<AddBlogNew />} />} />
          <Route path="/admin/dashboard/profile" element={<ProtectedRoute element={<AcountDash />} />} />
          <Route path="/admin/dashboard/setting" element={<ProtectedRoute element={<EditSettings />} />} />
          <Route path="/admin/dashboard/settingseo" element={<ProtectedRoute element={<EditSeoSettings />} />} />
          <Route path="/admin/dashboard/gallery" element={<ProtectedRoute element={<ImageGallery />} />} />
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
    <SEO />
    <App />
  </Router>
);

export default AppWrapper;