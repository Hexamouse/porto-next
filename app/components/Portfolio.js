import Image from "next/image";

const PortfolioSection = () => (
  <section id="portfolio" className="relative py-20 bg-white text-black">
    <div className="container mx-auto px-4 sm:px-8 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-black mb-8">My Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Portfolio Items */}
        <div className="portfolio-item rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/assets/pic/portfolio1.jpg"
            alt="Project 1"
            width={100}
            height={100}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="text-lg">Description of the project goes here.</p>
          </div>
        </div>
        <div className="portfolio-item rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/assets/pic/portfolio2.jpg"
            alt="Project 2"
            width={100}
            height={100}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="text-lg">Description of the project goes here.</p>
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

    {/* Curved Background at the Top using pseudo-element */}
    <div className="absolute top-0 left-0 w-full h-24 bg-white transform rotate-180 -z-1">
      <div className="w-full h-full rounded-b-full bg-white"></div>
    </div>
  </section>
);

export default PortfolioSection;