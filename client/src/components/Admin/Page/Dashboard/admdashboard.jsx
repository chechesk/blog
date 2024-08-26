import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchForm } from '../../../../redux/Reducer/Form';
import { fetchSponsore } from '../../../../redux/Reducer/NewsSponsore';
import { fetchSpeakers } from '../../../../redux/Reducer/NewsSpeakers';
import { fetchMedia } from '../../../../redux/Reducer/NewsMedia';
import { fetchStrategy } from '../../../../redux/Reducer/NewsStrategy';
import { fetchNew } from '../../../../redux/Reducer/NewsBlog';
import { Link } from 'react-router-dom';
import Suscriptores from './suscriptores';

export default function AdmDashboard() {
  const dispatch = useDispatch();
  const { sponsore } = useSelector((state) => state.sponsore);
  const { forms } = useSelector((state) => state.forms);
  const { speakers } = useSelector((state) => state.speakers);
  const { media } = useSelector((state) => state.media);
  const { strategy } = useSelector((state) => state.strategy);
  const { articles } = useSelector((state) => state.new);

  useEffect(() => {
    dispatch(fetchNew());
    dispatch(fetchMedia());
    dispatch(fetchStrategy());
    dispatch(fetchSpeakers());
    dispatch(fetchSponsore());
    dispatch(fetchForm());
  }, [dispatch]);

  return (
    <div className="ml-12 overflow-x-hidden">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Area de Administracion de Proyecto</h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Aqui podras encontrar los datos totales registrados de forma simple
          </p>
        </div>
        <section>
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

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{speakers.length} </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Media Partner</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{media.length}</dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Aliados Estrategicos</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{strategy.length}</dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Total Noticias</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{articles.length}</dd>
            </div>
          </dl>
        </section>
        <section className="bg-gray-900 text-white overflow-x-hidden">
          <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Que tiene de especial</h2>

            <p className="mt-4 text-gray-300">
              Un menu simple y detallado donde puedes acceder a los distintos contenidos.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <Link to='/admin/dashboard/speakers'>
                <div className="flex items-start gap-4">
                  <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">Boton de Participantes</h2>
                    <p className="mt-1 text-sm text-gray-300">
                      Area de registro de Participantes
                    </p>
                  </div>
                </div>
              </Link>
              <Link to='/admin/dashboard/patrocinio'>
                <div className="flex items-start gap-4">
                  <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">Boton de Patrocinadores</h2>
                    <p className="mt-1 text-sm text-gray-300">
                      En el podras registrar la imagen el url de la pagina web y poder cambiar el estado si esta vigente o no
                    </p>
                  </div>
                </div>
              </Link>
              <Link to='/admin/dashboard/media'>
                <div className="flex items-start gap-4">
                  <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">Boton de Media Partner</h2>
                    <p className="mt-1 text-sm text-gray-300">
                      Panel de Aliados estrategicos de medios de comunicacion locales o internacionales.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to='/admin/dashboard/strategy'>
                <div className="flex items-start gap-4">
                  <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">Boton de Aliados Estrategicos</h2>
                    <p className="mt-1 text-sm text-gray-300">
                      Aliados estrategicos comerciales
                    </p>
                  </div>
                </div>
              </Link>
              <Link to='/admin/dashboard/socialmedia'>
                <div className="flex items-start gap-4">
                  <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6" viewBox="0 0 24 24"><path fill="none" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8-5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3-7v4m-5.3 6.8l2.8-2m7.8 2l-2.8-2" /></svg>
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">Boton de Redes Sociales</h2>
                    <p className="mt-1 text-sm text-gray-300">
                      En el podras actualizar las redes sociales establecidas para el evento.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to='/admin/dashboard/blog'>
                <div className="flex items-start gap-4">
                  <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className="size-6"><path fill="#999999" d="M2048 0v1536H731l-475 475v-475H0V0zM128 128v256h1792V128zm1792 1280V512H128v896h256v293l293-293zm-640-768h512v640h-512zm128 512h256V768h-256zM256 768h896v128H256zm0 256h896v128H256z" /></svg>
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Blog
                    </span>
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">Boton para Noticias</h2>
                    <p className="mt-1 text-sm text-gray-300">
                      En el podras registras las noticias relevantes al evento como un blog de contenido dentro de la web
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className='grid grid-cols-2'>
            <div></div>
            <div>
              <Suscriptores />
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}