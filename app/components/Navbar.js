import Link from "next/link";

const Navbar = ({ isScrolled, toggleModal }) => (
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
        <button className="md:hidden" onClick={toggleModal}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default Navbar;