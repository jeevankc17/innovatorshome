'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute('href')?.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', smoothScroll as EventListener);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll as EventListener);
      });
    };
  }, []);

  return (
    <>
      <nav className="fixed w-full bg-neutral-900 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  className="h-12 w-auto transition-opacity duration-300"
                  src="/logo.png"
                  alt="Innovators Home"
                  width={32}
                  height={32}
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="#hero" className="text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <Link href="#courses" className="text-gray-300 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
                  <Link href="#resources" className="text-gray-300 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Resources</Link>
                  <Link href="#youtube" className="text-gray-300 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">YouTube</Link>
                  <Link href="#documentation" className="text-gray-300 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Docs</Link>
                  <Link href="#contact" className="text-gray-300 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-neutral-900`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#hero" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="#courses" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Courses</Link>
            <Link href="#resources" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Resources</Link>
            <Link href="#youtube" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">YouTube</Link>
            <Link href="#documentation" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Docs</Link>
            <Link href="#contact" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

