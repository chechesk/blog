import React from 'react';
import Carrousel from '../../components/Carrousel/carrousel';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-0 mb-8 ">
      <h1 className="text-center text-4xl font-bold mb-4 text-blue-600 m-4">
        ¡Bienvenidos al Futuro: Tu Portal de Tecnología!
      </h1>
      <Carrousel />
      <section>
      <p className='text-left'>
          ¡Hola a todos y todas! Bienvenidos a nuestro nuevo blog de tecnología, 
          <span className="font-semibold text-blue-600"> TecnoHorizonte</span>. 
          Estamos emocionados de iniciar este viaje con ustedes y de compartir nuestra pasión por el mundo de la tecnología.
        </p>
      </section>
    </div>
  );
}