'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 300);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="overflow-x-hidden">
      <div className="__NEXT">
        {/* Navbar */}
        <div className={`navbar fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-[#0F172A] bg-opacity-90 backdrop-blur-lg border-opacity-30' : 'bg-[#0F172A]'} text-white`}>
          <div className="container mx-auto flex justify-between items-center px-4 lg:px-20">
            <Link href="/" className="btn btn-ghost normal-case text-xl flex items-center space-x-2">
              <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-400">&lt;/&gt;</span>
              <span className="text-xl font-bold text-white">Dzikri Maulana</span>
            </Link>
            <div className="flex-none">
              <ul className="menu menu-horizontal p-0 space-x-8 hidden md:flex">
                <li><Link href="/">HOME</Link></li>
                <li><Link href="#about">ABOUT</Link></li>
                <li><Link href="#portfolio">PORTFOLIO</Link></li>
                <li><Link href="#skills">SKILLS</Link></li>
                <li><Link href="#projects">PROJECT</Link></li>
                <li><Link href="#contact">CONTACT</Link></li>
              </ul>
              {/* Mobile Menu Button */}
              <button className="md:hidden" onClick={toggleModal}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Modal for mobile menu */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg relative">
              <button className="absolute top-4 right-4" onClick={toggleModal}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ul className="flex flex-col space-y-4">
                <li><Link href="/" onClick={toggleModal}>HOME</Link></li>
                <li><Link href="#about" onClick={toggleModal}>ABOUT</Link></li>
                <li><Link href="#portfolio" onClick={toggleModal}>PORTFOLIO</Link></li>
                <li><Link href="#skills" onClick={toggleModal}>SKILLS</Link></li>
                <li><Link href="#projects" onClick={toggleModal}>PROJECT</Link></li>
                <li><Link href="#contact" onClick={toggleModal}>CONTACT</Link></li>
              </ul>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="relative mt-10 min-h-screen bg-[#0F172A] py-10 sm:py-10 overflow-hidden">
          <div className="container sm:mt-10 mx-auto px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
            <div
              className={`text-left max-w-2xl lg:max-w-3xl space-y-4 relative z-10 p-4 sm:p-6 lg:p-14 ${hasLoaded ? 'animate-slide-up' : ''}`}
            >
              <h1 className="text-4xl sm:text-4xl font-bold text-white">Hello 👋</h1>
              <h2 className="text-xl sm:text-2xl font-bold text-white">I am,</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r uppercase from-blue-500 via-purple-500 to-yellow-400 text-transparent bg-clip-text tracking-wider">
                <div className="flex flex-col space-y-2">
                  <span className="text-4xl">Muhammad Dzikri Maulana</span>
                  <span className="text-lg text-white">Fullstack Developer</span>
                </div>
              </h3>
              <p className="text-lg text-justify sm:text-lg text-white mt-4 sm:text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero ac risus egestas placerat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link href="#projects" className="btn btn-primary mt-6">See More</Link>
            </div>

            <div className={`relative mt-10 lg:mt-0 z-10 ${hasLoaded ? 'animate-slide-left' : ''}`}>
              <Image
                src="/assets/pic/me.png"
                alt="My Photo"
                width={400}
                height={400}
                className="relative z-10 max-w-full mx-auto rounded-b-[120px] grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-x-[-1] md:w-[350px] lg:w-[400px] transition-all duration-300 ease-in-out -mt-10"
              />
              <span className="w-full absolute bottom-0 -z-1 left-1/2 -translate-x-1/2 md:scale-125">
                <div className="h-80 shadow-2xl shadow-white bg-gradient-to-t from-secondary to-primary rounded-full -mt-10"></div>
              </span>
            </div>
          </div>
        </section>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes slide-up {
            0% {
              transform: translateY(20px);
            }
            100% {
              transform: translateY(0);
            }
          }

          @keyframes slide-left {
            0% {
              transform: translateX(20px);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-slide-up {
            animation: slide-up 1s ease-out forwards;
          }

          .animate-slide-left {
            animation: slide-left 1s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
}