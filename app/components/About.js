import Image from "next/image";

const AboutSection = () => (
    <section id="about" className="py-20 bg-[#0F172A] text-white">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-white mb-8">About Me</h2>
        <div className="lg:flex lg:space-x-16">
          <div className="lg:w-1/2">
            <p className="text-lg text-justify mb-4">
              Hello, I am Muhammad Dzikri Maulana, a passionate Fullstack Developer with expertise in building web applications. I specialize in creating modern and scalable web solutions using the latest technologies. With a strong focus on user experience and responsive design, I aim to create seamless digital experiences for users across different devices.
            </p>
            <p className="text-lg text-justify">
              I have experience working with a variety of programming languages and frameworks, such as JavaScript, React, Node.js, and more. I am constantly exploring new technologies to stay ahead in the ever-evolving world of web development.
            </p>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <Image 
              src="/assets/pic/about-image.jpg"
              width={100}
              height={100} 
              alt="About Me" 
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
  
  export default AboutSection;  