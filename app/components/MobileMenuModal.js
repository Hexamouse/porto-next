import Link from "next/link";

const MobileMenuModal = ({ isModalOpen, toggleModal }) => (
  isModalOpen && (
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
  )
);

export default MobileMenuModal;