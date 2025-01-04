'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileMenuModal from './components/MobileMenuModal';
import HeroSection from './components/HeroSection';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
      <Navbar isScrolled={isScrolled} toggleModal={toggleModal} />
      <MobileMenuModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      <HeroSection hasLoaded={hasLoaded} />

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
  );
}