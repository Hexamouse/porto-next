import Link from "next/link";
import Image from "next/image";

const HeroSection = ({ hasLoaded }) => (
  <section className="relative mt-10 min-h-screen bg-[#0F172A] py-10 sm:py-10 overflow-hidden">
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
          className="relative z-10 max-w-full mx-auto rounded-b-[120px] grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-x-[-1] md:w-[250px] lg:w-[400px] transition-all duration-300 ease-in-out -mt-10"
        />
        <span className="w-full absolute bottom-0 -z-1 left-1/2 -translate-x-1/2 md:scale-125">
          <div className="h-60 shadow-xl shadow-white bg-gradient-to-t from-secondary to-primary rounded-full -mt-10"></div>
        </span>
      </div>
    </div>
  </section>
);

export default HeroSection;