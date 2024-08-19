import React from 'react';
import Carrousel from '../../components/Carrousel/carrousel';
import BannersMp4 from '../../components/Banners_Mp4/bannersMp4';
import DayCounter from '../../components/Reloj/counterReloj';
import SpeakerModule from '../../components/Speakers/speakerModule';
import PatrocinioModule from '../../components/Patrocinio/patrocinio';
import MediaModule from '../../components/MediaPartner/MediaPartnerComponents';
import StrategyModule from '../../components/strategicAlliance/StrategyComponents';
import Price from '../../components/Pricing/resales';
import BlogCard from '../../components/blogHome/BlogCard';






export default function Home() {

  return (
    <div className=" mb-8 ">
      <Carrousel />
      <BannersMp4 />
      <DayCounter />
      <PatrocinioModule />
      <MediaModule />
      <StrategyModule />
      <SpeakerModule />
      <Price />
      <BlogCard />
    </div>
  );
}