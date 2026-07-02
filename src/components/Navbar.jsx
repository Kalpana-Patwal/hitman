'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      
      <div className='mb-24'>
        <nav className="bg-gray-800 text-white py-2 px-4 shadow-md fixed w-full top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between h-10">
              <div className="text-xs sm:text-sm font-medium mb-2 sm:mb-0">
                <a href="mailto: info@hitmandigital.in"> Mail Us: info@hitmandigital.in</a>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-6 sm:items-center sm:justify-end w-full">
                <Link href="/seo-audit-tools" className="text-white text-sm font-medium mb-2 sm:mb-0">
                  Free Digital Marketing Audit
                </Link>
                {/* <Link href="/image-generator" className="text-white text-sm font-medium mb-2 sm:mb-0">
                 Generate AI Images
                </Link> */}
                <a
                  href="tel:+91 8527341388"
                  className="text-white text-sm font-medium mb-2 sm:mb-0 sm:block hidden"
                >
                  Call at +91  8527341388
                </a>
              </div>
            </div>
          </div>
        </nav>

        <nav
          className={`bg-white shadow-xl fixed w-full top-12 z-20 transition-transform ${
            isScrollingUp ? 'transform-none' : '-translate-y-20'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image src="/logo.png" alt="Logo" width={100} height={40} className="h-10 w-auto" />
                </Link>
              </div>

              <div className="hidden md:block">
                <ul className="flex text-sm font-geologica space-x-6">
                  <Link href="/" className="text-gray-600 hover:text-blue-300 font-medium">
                    Home
                  </Link>
                  <Link href="/about" className="text-gray-600 hover:text-blue-300 font-medium">
                    About
                  </Link>
                  <Link href="/services" className="text-gray-600 hover:text-blue-300 font-medium">
                    Services
                  </Link>
                  <Link href="/case-study" className="text-gray-600 hover:text-blue-300 font-medium">
                    Case Study
                  </Link>
                  <Link href="/contact" className="text-gray-600 hover:text-blue-300 font-medium">
                    Contact Us
                  </Link>
                  <Link href="/write-for-us" className="text-gray-600 hover:text-blue-300 font-medium">
                    Write For Us
                  </Link>
                  {/* <Link href="/blogs" className="text-gray-600 hover:text-blue-300 font-medium">
                    Blog
                  </Link> */}
                </ul>
              </div>

              <div className="md:hidden">
                <button
                  type="button"
                  className="p-2 rounded-md text-gray-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  onClick={toggleMenu}
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden bg-gray-800 text-white flex flex-col justify-center items-center absolute top-16 left-0 w-full z-10">
              <ul className="space-y-4 py-4 w-full text-center">
                <li>
                  <Link href="/" className="block text-white hover:text-blue-300 font-medium" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block text-white hover:text-blue-300 font-medium" onClick={() => setIsOpen(false)}>
                    About
                  </Link>

                </li>
                <li>
                  <Link href="/services" className="block text-white hover:text-blue-300 font-medium" onClick={() => setIsOpen(false)}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/case-study" className="block text-white hover:text-blue-300 font-medium" onClick={() => setIsOpen(false)}>
                    Case Study
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block text-white hover:text-blue-300 font-medium" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </Link>
                  </li>
                  <li>
                  <Link href="/write-for-us" className="block text-white hover:text-blue-300 font-medium" onClick={() => setIsOpen(false)}>
                    Write For Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;