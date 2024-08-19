import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SocialMediaManager from '../Social/socialview';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
      : 'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
  };

  return (
    <nav className="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            <img
              src="https://cgsbrasil.com/wp-content/uploads/2024/06/recifeLOGOgrafXG-02-2048x1291.png"
              alt="Recife Logo"
              className="h-28 w-auto" // Adjust height and width as needed
            />
          </span>
        </Link>

        <div className="flex items-center">
          <button
            id="menu-toggle"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`w-full md:block md:w-auto ${isMobileMenuOpen ? '' : 'hidden'}`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link to="/" className={getLinkClass('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={getLinkClass('/about')}>
                About
              </Link>
            </li>
          <li>
              <Link to="/registro" className={getLinkClass('/registro')}>
                Registro
              </Link>
            </li>
              {/* 
            <li>
              <Link to="/pricing" className={getLinkClass('/pricing')}>
                Pricing
              </Link>
            </li> */}
            <li>
              <Link to="/blog" className={getLinkClass('/blog')}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className={getLinkClass('/contact')}>
                Contact
              </Link>
            </li>
            <li>
            <div className=" items-center">
            <a
              className="rounded-md   text-sm font-medium text-white  "
              href="/login"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 2048 2048"><path fill="#999999" d="M1728 1152q26 0 45 19t19 45t-19 45t-45 19t-45-19t-19-45t19-45t45-19m-603-19q-79-54-170-81t-187-28q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H0q0-117 35-229t101-207t157-169t203-113q-56-36-100-83t-76-103t-47-118t-17-130q0-106 40-199t109-163T568 40T768 0t199 40t163 109t110 163t40 200q0 67-16 129t-48 119t-75 103t-101 83q81 29 156 80zM384 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149m1280 384q79 0 149 30t122 82t83 123t30 149q0 80-30 149t-82 122t-123 83t-149 30q-65 0-128-23v151h-128v128h-128v128H896v-282l395-396q-11-46-11-90q0-79 30-149t82-122t122-83t150-30m0 640q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 35 9 64t21 61l-414 413v102h128v-128h128v-128h128v-91l93-92q40 23 77 39t86 16"/></svg>
            </a>
          </div>
            </li>
            <li>
              <SocialMediaManager />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">

        </div>
      </div>

    </nav>

  );
};

export default Navbar;