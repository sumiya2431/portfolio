
import aboutme from '../assets/aboutme.jpeg';

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={aboutme}
        alt="About Me"
        className="mx-auto mb-8 w-45 h-45 rounded-full object-cover transform 
          transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I am {""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          SHAIK.SUMIYA
        </span>
        , full-stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        {/* Contact Me Button */}
        <a
          href="#contact" // Replace with the ID of your contact section
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full"
        >
          Contact Me
        </a>
        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1vEnrnDLFw4NBDiImEZgF79RSnfJJAdBu/view?usp=drivesdk" // Google Drive link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;












