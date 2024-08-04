import React from 'react';
import Carrousel from '../../components/Carrousel/carrousel';
import BannersMp4 from '../../components/Banners_Mp4/bannersMp4';
import DayCounter from '../../components/Reloj/counterReloj';
import SpeakerModule from '../../components/Speakers/speakerModule';
import StrategicAlliance from '../../components/strategicAlliance/strategicAlliance';
import MediaPartner from '../../components/MediaPartner/mediaPartner';
import PatrocinioModule from '../../components/Patrocinio/patrocinio';






export default function Home() {

  return (
    <div className="  ">
      <Carrousel />
      <BannersMp4 />
      <DayCounter />
      <PatrocinioModule />
      <StrategicAlliance />
      <MediaPartner />
      <SpeakerModule />
      <section className=''>
      <p className='text-left'>
          ¡Hola a todos y todas! Bienvenidos a nuestro nuevo blog de tecnología, 
          <span className="font-semibold text-blue-600"> TecnoHorizonte</span>. 
          Estamos emocionados de iniciar este viaje con ustedes y de compartir nuestra pasión por el mundo de la tecnología.
        </p>
      </section>
    </div>
  );
}