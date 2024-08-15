import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from '../../../../redux/Reducer/Auth'; // Asegúrate de que la ruta a tu authSlice sea correcta

export default function NavDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(signOut());
    navigate('/');
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "group relative flex justify-center rounded px-2 py-1.5 bg-blue-100 text-blue-700"
      : "group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700";
  };

  return (
    <div className="flex h-screen w-16 flex-col justify-between border-e bg-white fixed">
      <div>
        <Link to='/admin/dashboard'>
          <div className="inline-flex size-16 items-center justify-center">
            <span className={getLinkClass('/admin/dashboard')}>
              L
            </span>
          </div>
        </Link>
        <Link to="/" className='flex justify-center bg-slate-400 rounded-lg mx-2 hover:accent-teal-600'>
          <button className='text-sm text-center'>
            Home           
          </button>
        </Link>

        <div className="border-t border-gray-100">
          <div className="px-2">
            <div className="py-4">
              <Link
                to="/admin/dashboard/"
                className={getLinkClass("/admin/dashboard/")}
              >
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                  General
                </span>
              </Link>
            </div>

            <ul className="space-y-1 border-t border-gray-100 pt-4">
              <li>
                <Link
                  to="/admin/dashboard/banner"
                  className={getLinkClass("/admin/dashboard/banner")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                  </svg>
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Carrousel
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/dashboard/speakers"
                  className={getLinkClass("/admin/dashboard/speakers")}
                >
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
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Speakers
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin/dashboard/patrocinio"
                  className={getLinkClass("/admin/dashboard/patrocinio")}
                >
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
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Patrocinio
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin/dashboard/media"
                  className={getLinkClass("/admin/dashboard/media")}
                >
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
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Media
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin/dashboard/strategy"
                  className={getLinkClass("/admin/dashboard/strategy")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                  </svg>
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Strategy
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin/dashboard/blog"
                  className={getLinkClass("/admin/dashboard/blog")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className="size-6"><path fill="#999999" d="M2048 0v1536H731l-475 475v-475H0V0zM128 128v256h1792V128zm1792 1280V512H128v896h256v293l293-293zm-640-768h512v640h-512zm128 512h256V768h-256zM256 768h896v128H256zm0 256h896v128H256z" /></svg>
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Blog
                  </span>
                </Link>
              </li> 

              <li>
                <Link
                  to="/admin/dashboard/setting"
                  className={getLinkClass("/admin/dashboard/setting")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6" viewBox="0 0 24 24"><path fill="#999999" d="M11 17h2l.3-1.5q.3-.125.563-.262t.537-.338l1.45.45l1-1.7l-1.15-1q.05-.35.05-.65t-.05-.65l1.15-1l-1-1.7l-1.45.45q-.275-.2-.537-.338T13.3 8.5L13 7h-2l-.3 1.5q-.3.125-.562.263T9.6 9.1l-1.45-.45l-1 1.7l1.15 1q-.05.35-.05.65t.05.65l-1.15 1l1 1.7l1.45-.45q.275.2.538.338t.562.262zm1-3q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14m-9 7V3h18v18zm2-2h14V5H5zm0 0V5z"/></svg>
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Setting
                  </span>
                </Link>
              </li> 

              <li>
                <Link
                  to="/admin/dashboard/settingseo"
                  className={getLinkClass("/admin/dashboard/settingseo")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6" viewBox="0 0 48 48"><g fill="none" stroke="#999999" strokeWidth="4"><rect width="40" height="32" x="4" y="8" rx="1.633"/><path strokeLinecap="round" strokeLinejoin="round" d="M16 18.948c-2-2.948-5.502-1.01-5.251 2.02C11 24 15 24 15.249 27.032C15.5 30.062 12 32 10 29.051M26 18h-4v13h4m-4-6h4"/><rect width="6" height="13" x="32" y="18" strokeLinecap="round" strokeLinejoin="round" rx="3"/></g></svg>
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Setting Seo
                  </span>
                </Link>
              </li> 

              <li>
                <Link
                  to="/admin/dashboard/gallery"
                  className={getLinkClass("/admin/dashboard/gallery")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6" viewBox="0 0 48 48"><path fill="none" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" d="M31.315 12.123a4.465 4.465 0 1 1 0 8.93a4.465 4.465 0 0 1 0-8.93m-11.294 8.909l7.224 7.223a.7.7 0 0 0 .992 0l1.383-1.383a.7.7 0 0 1 .993 0l7.807 7.807a.702.702 0 0 1-.497 1.198H10.076a.702.702 0 0 1-.577-1.101l9.45-13.648a.702.702 0 0 1 1.072-.097Z"/><path fill="none" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"/></svg>
                  
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Gallery
                  </span>
                </Link>
              </li> 

              <li>
                <Link
                  to="/admin/dashboard/profile"
                  className={getLinkClass("/admin/dashboard/profile")}
                >
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Profile
                  </span>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
        <form onSubmit={handleSignOut}>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
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
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>

            <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
              Logout
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}