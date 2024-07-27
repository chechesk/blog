import React from 'react'

export default function About() {
  return (
    <div className='container mx-auto px-4 py-2 max-h-full md:max-h-screen mb-7'>
      <section className="space-y-6 text-lg text-gray-700">
       
        <p className='text-left'>
          En <span className="font-semibold text-blue-600">TecnoHorizonte</span>, creemos firmemente que la tecnología es más que solo dispositivos y aplicaciones; 
          es una fuerza transformadora que está moldeando el futuro de nuestra sociedad. 
          Desde los teléfonos inteligentes que llevamos en nuestros bolsillos hasta las innovadoras soluciones de inteligencia artificial, 
          la tecnología está redefiniendo la manera en que vivimos, trabajamos y nos conectamos con el mundo.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600">¿Qué Puedes Esperar de TecnoHorizonte?</h2>
        <p>
          En este blog, te ofreceremos una variedad de contenidos que abarcan múltiples aspectos del mundo tecnológico:
        </p>
        <ul className="list-disc list-inside space-y-2 text-start">
          <li>
            <span className="font-semibold text-blue-600">Noticias y Tendencias:</span> 
            Mantente al día con las últimas novedades en el ámbito tecnológico. 
            Desde lanzamientos de productos hasta avances en investigación y desarrollo, 
            te mantendremos informado sobre lo que está ocurriendo en el mundo de la tecnología.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Análisis y Opiniones:</span> 
            Profundizaremos en los temas más candentes del momento, ofreciendo análisis detallados y opiniones fundamentadas. 
            Nuestro objetivo es ayudarte a comprender mejor las implicaciones de las nuevas tecnologías y cómo pueden afectar tu vida.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Guías y Tutoriales:</span> 
            ¿Quieres saber cómo optimizar tu PC para juegos? 
            ¿O tal vez necesitas una guía paso a paso sobre cómo configurar una red doméstica segura? 
            Nuestros tutoriales y guías están diseñados para ser accesibles y útiles tanto para principiantes como para entusiastas de la tecnología.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Reseñas de Productos:</span> 
            Desde smartphones y laptops hasta gadgets y accesorios, probaremos y reseñaremos una amplia gama de productos tecnológicos para ayudarte a tomar decisiones informadas antes de realizar una compra.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Entrevistas y Historias Inspiradoras:</span> 
            Conocerás a las personas detrás de las innovaciones tecnológicas. 
            Entrevistaremos a desarrolladores, ingenieros y emprendedores que están haciendo olas en la industria tecnológica, 
            y compartiremos sus historias inspiradoras.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600">Nuestra Misión</h2>
        <p className='text-left'>
          Nuestra misión en <span className="font-semibold text-blue-600 ">TecnoHorizonte</span> es simple: queremos hacer que la tecnología sea accesible y comprensible para todos. 
          Creemos que el conocimiento tecnológico no debería ser exclusivo de unos pocos; debería estar al alcance de todos, independientemente de su nivel de experiencia.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600">¡Únete a la Conversación!</h2>
      </section>
    </div>
  )
}
