import React from 'react';
import Carrousel from '../../components/Carrousel/carrousel';
import BannersMp4 from '../../components/Banners_Mp4/bannersMp4';
import DayCounter from '../../components/Reloj/counterReloj';
import SpeakerModule from '../../components/Speakers/speakerModule';
import StrategicAlliance from '../../components/strategicAlliance/strategicAlliance';

import PatrocinioModule from '../../components/Patrocinio/patrocinio';
import MediaModule from '../../components/MediaPartner/MediaPartnerComponents';






export default function Home() {

  return (
    <div className=" mb-8 ">
      <Carrousel />
      <BannersMp4 />
      <DayCounter />
      <PatrocinioModule />
      <StrategicAlliance />
      <MediaModule />
      <SpeakerModule />

    </div>
  );
}