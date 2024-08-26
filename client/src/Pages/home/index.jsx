// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carrousel from '../../components/Carrousel/carrousel';
import BannersMp4 from '../../components/Banners_Mp4/bannersMp4';
import DayCounter from '../../components/Reloj/counterReloj';
import SpeakerModule from '../../components/Speakers/speakerModule';
import PatrocinioModule from '../../components/Patrocinio/patrocinio';
import MediaModule from '../../components/MediaPartner/MediaPartnerComponents';
import StrategyModule from '../../components/strategicAlliance/StrategyComponents';
import Price from '../../components/Pricing/resales';
import BlogCard from '../../components/blogHome/BlogCard';
import { fetchModuleConfig } from '../../redux/Reducer/adminConfig';

export default function Home() {
  const dispatch = useDispatch();
  const modules = useSelector((state) => state.adminConfig.modules);

  useEffect(() => {
    dispatch(fetchModuleConfig());
  }, [dispatch]);

  return (
    <div className="mb-8">
      {modules.Carrousel && <Carrousel />}
      {modules.BannersMp4 && <BannersMp4 />}
      {modules.DayCounter && <DayCounter />}
      {modules.PatrocinioModule && <PatrocinioModule />}
      {modules.MediaModule && <MediaModule />}
      {modules.StrategyModule && <StrategyModule />}
      {modules.SpeakerModule && <SpeakerModule />}
      {modules.Price && <Price />}
      {modules.BlogCard && <BlogCard />}
    </div>
  );
}