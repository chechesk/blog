import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7h20L12 2z"></path>
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5M2 7v10m20-10v10"></path>
          </svg>
          <span className="ml-3 text-xl">Website</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Website —
          <a href="https://twitter.com/yourhandle" className="text-gray-500 ml-1" rel="noopener noreferrer" target="_blank">@yourhandle</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://facebook.com" className="text-gray-400">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18.36 2.64a9.926 9.926 0 00-6.36-2.64 9.926 9.926 0 00-6.36 2.64C3.64 4.37 2.64 7.18 2.64 10.08c0 2.91 1 5.71 2.64 7.76a9.926 9.926 0 006.36 2.64 9.926 9.926 0 006.36-2.64c1.64-2.05 2.64-4.85 2.64-7.76 0-2.91-1-5.71-2.64-7.44zM9.72 17.64V11.4h2.16l.72-2.64h-2.88V7.2c0-.72.24-1.2 1.2-1.2h1.68V3.6h-2.4c-2.16 0-2.88 1.2-2.88 2.88v2.88H5.52v2.64h2.64v6.24h2.16z"></path>
            </svg>
          </a>
          <a href="https://twitter.com" className="ml-3 text-gray-400">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.54 4.48 4.48 0 00-2-2.54 4.48 4.48 0 00-3.95 0A4.48 4.48 0 0010.5 4.5a4.48 4.48 0 00-.22 1.54A12.94 12.94 0 013 4a4.48 4.48 0 00-.75 2.29 4.48 4.48 0 00.5 2 4.48 4.48 0 00.95 1.54 4.48 4.48 0 01-2-.54v.05a4.48 4.48 0 003.5 4.39 4.48 4.48 0 01-1.95.07 4.48 4.48 0 004.2 3.1A9.92 9.92 0 010 19.54a14 14 0 007.56 2.21c9.06 0 14-7.5 14-14 0-.21 0-.39-.01-.57A9.92 9.92 0 0023 3z"></path>
            </svg>
          </a>
          <a href="https://instagram.com" className="ml-3 text-gray-400">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37a4 4 0 01-7.86 1.37A4 4 0 0112 7.5a4 4 0 014 3.87z"></path>
              <path d="M17.5 6.5h.01"></path>
            </svg>
          </a>
          <a href="https://linkedin.com" className="ml-3 text-gray-400">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-2-2h-1v8h-4v-8H9v8H5v-8H4a2 2 0 0 0-2 2v6H0v-6a6 6 0 0 1 6-6h4a6 6 0 0 1 6-6z"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;