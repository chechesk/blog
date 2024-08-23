import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchForm } from '../../../../redux/Reducer/Form';
import { fetchSponsore } from '../../../../redux/Reducer/NewsSponsore';
import { fetchSpeakers } from '../../../../redux/Reducer/NewsSpeakers';
import { fetchMedia } from '../../../../redux/Reducer/NewsMedia';
import { fetchStrategy } from '../../../../redux/Reducer/NewsStrategy';
import { fetchNew } from '../../../../redux/Reducer/NewsBlog';

export default function AdmDashboard() {
  const dispatch = useDispatch();
  const { sponsore } = useSelector((state) => state.sponsore);
  const { forms } = useSelector((state) => state.forms);
  const { speakers } = useSelector((state) => state.speakers);
  const { media } = useSelector((state) => state.media);
  const { strategy } = useSelector((state) => state.strategy);
  const { articles } = useSelector((state) => state.new);

  useEffect(() => {
    {
      dispatch(fetchNew());
      dispatch(fetchMedia());
      dispatch(fetchStrategy());
      dispatch(fetchSpeakers());
      dispatch(fetchSponsore());
      dispatch(fetchForm());
    }
  }, [status, dispatch]);

  return (
    <div className="p-8 ml-12">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div className="mx-auto max-w-3xl text-center">
    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Area de Administracion de Proyecto</h2>

    <p className="mt-4 text-gray-500 sm:text-xl">
      Aqui podras encontrar los datos totales registrados de forma simple
    </p>
  </div>

  <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Participantes Registrados</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{forms.length}</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Sponsore Totales</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{sponsore.length}</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Conferencistas Registrados</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{speakers.length } </dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Media Partner</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{media.length }</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Aliados Estrategicos</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{strategy.length }</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Total Noticias</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{articles.length }</dd>
    </div>
  </dl>
</div>
<section className="bg-gray-900 text-white">
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="max-w-xl">
      <h2 className="text-3xl font-bold sm:text-4xl">Que tiene de especial</h2>

      <p className="mt-4 text-gray-300">
        Un menu simple y detallado donde puedes acceder a los distintos contenidos.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg bg-gray-800 p-4">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Boton de Participantes</h2>

          <p className="mt-1 text-sm text-gray-300">
            Area de registro de Participantes
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg bg-gray-800 p-4">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Boton de Patrocinadores</h2>

          <p className="mt-1 text-sm text-gray-300">
            En el podras registrar la imagen el url de la pagina web y poder cambiar el estado si esta vigente o no
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg bg-gray-800 p-4">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Boton de Media Partner</h2>

          <p className="mt-1 text-sm text-gray-300">
            Panel de Aliados estrategicos de medios de comunicacion locales o internacionales.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg bg-gray-800 p-4">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Boton de Aliados Estrategicos</h2>

          <p className="mt-1 text-sm text-gray-300">
            Aliados estrategicos comerciales 
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg bg-gray-800 p-4">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Boton de Redes Sociales</h2>

          <p className="mt-1 text-sm text-gray-300">
            En el podras actualizar las redes sociales establecidas para el evento.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg bg-gray-800 p-4">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Boton para Noticias</h2>

          <p className="mt-1 text-sm text-gray-300">
            En el podras registras las noticias relevantes al evento como un blog de contenido dentro de la web
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
