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
        <div className={`navbar fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-[#0F172A] bg-opacity-60 backdrop-blur-lg border-opacity-30' : 'bg-[#0F172A]'} text-white`}>
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
        <section className="relative mt-10 min-h-screen bg-[#0F172A] py-10 sm:py-10 overflow-visible">
          <div className="container sm:mt-10 mx-auto px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
            <div className={`text-left max-w-2xl lg:max-w-3xl space-y-4 relative z-10 p-4 sm:p-6 lg:p-14 ${hasLoaded ? 'animate-slide-up' : ''}`}>
              <h1 className="text-4xl sm:text-4xl font-bold text-white">Hello 👋</h1>
              <h2 className="text-xl sm:text-2xl font-bold text-white">I am,</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r uppercase from-blue-500 via-purple-500 to-yellow-400 text-transparent bg-clip-text tracking-wider">
                <div className="flex flex-col space-y-2">
                  <span className="text-4xl">Muhammad Dzikri Maulana</span>
                  <span className="text-lg text-white">Fullstack Developer</span>
                </div>
              </h3>
              <p className="text-lg text-justify text-white mt-4 sm:text-justify">
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
                <div className="h-80 shadow-2xl shadow-white bg-gradient-to-t from-secondary to-primary rounded-full -mt-1"></div>
              </span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-[#0F172A] text-white relative">
          <div className="container mx-auto px-4 sm:px-8 lg:px-20">
            <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
            <p className="text-lg text-justify">
              I am a passionate Fullstack Developer with expertise in building modern web applications. With years of experience, I specialize in both front-end and back-end development, creating beautiful, scalable, and efficient software solutions. I am dedicated to continuous learning and staying up to date with the latest technologies.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-[#0F172A] -z-10 rounded-t-[120px]"></div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="relative py-20 bg-white text-black">
          <div className="container mx-auto px-4 sm:px-8 lg:px-20">
            <h2 className="text-4xl font-bold text-center text-black mb-8">My Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example Portfolio Items */}
              <div className="portfolio-item rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/assets/project/lostsaga.png"
                  alt="Project 1"
                  width={1366}  // Ini hanya digunakan sebagai fallback jika gambar tidak diubah ukurannya
                  height={768}  // Ini juga fallback untuk menjaga aspek rasio
                  className="w-full h-48 object-cover"  // Membuat lebar gambar mengikuti lebar kontainer dan tinggi otomatis
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Lost Saga Private Server</h3>
                  <p className="text-m text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, 
                  urna eget tincidunt venenatis, purus elit hendrerit dui, et gravida orci arcu vel ligula. 
                  Donec auctor nisl vel diam tincidunt, a aliquet nulla fermentum. 
                  Proin condimentum felis vitae est varius, sed iaculis lorem lacinia. 
                  Mauris posuere quam eu orci mollis, ac viverra purus maximus.
                  </p>
                </div>
              </div>

              <div className="portfolio-item rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/assets/project/lsdb.png"
                  alt="Project 2"
                  width={1366}
                  height={768}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Lost Saga Database</h3>
                  <p className="text-m text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, 
                  urna eget tincidunt venenatis, purus elit hendrerit dui, et gravida orci arcu vel ligula. 
                  Donec auctor nisl vel diam tincidunt, a aliquet nulla fermentum. 
                  Proin condimentum felis vitae est varius, sed iaculis lorem lacinia. 
                  Mauris posuere quam eu orci mollis, ac viverra purus maximus.
                  </p>
                </div>
              </div>

              <div className="portfolio-item rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/assets/pic/portfolio3.jpg"
                  alt="Project 3"
                  width={100}
                  height={100}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Project 3</h3>
                  <p className="text-lg">Description of the project goes here.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-32 bg-white -z-10 rounded-b-[120px]"></div>
        </section>
      </div>
    </div>
  );
}