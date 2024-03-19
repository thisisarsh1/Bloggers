import React from 'react';
import Link from 'next/link';
function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href='/' className="text-gray-400 hover:text-white">home</Link>
              </li>
              <li>
                <Link href='/About' className="text-gray-400 hover:text-white">about</Link>
              </li>
              <li>
                <Link href='/Content' className="text-gray-400 hover:text-white">content</Link>
              </li>
              <li>
                <Link href='/Contact' className="text-gray-400 hover:text-white">contact</Link>
              </li>
            </nav>
          </div>
          {/* Repeat the above structure for other categories */}
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            
            <span className="ml-3 text-xl">Bloggers</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">© 2024 Bloggers —
            <a  className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@rehbarkhan</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-400">
           
         
            </a>
            {/* Repeat the above structure for other social media icons */}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
