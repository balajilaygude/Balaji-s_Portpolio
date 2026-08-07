import profile from "../assets/balaji.png";
import { FaGithub,FaLinkedin  } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="mt-10 sm:h-screen sm:mt-0 relative overflow-hidden flex items-center"
    >
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full px-6 md:px-20 gap-10">
        {/* Text */}
        <div className="text-center md:text-left md:w-1/2">
          <p className="tracking-widest text-sm text-gray-500">
            HELLO, MY NAME IS
          </p>

          <h1 className="text-4xl md:text-6xl font-bold sm:my-4 my-2">
            Balaji Laygude
          </h1>

          <p className="sm:mb-6 mb-2 text-xl text-gray-600 font-semibold">
            Fullstack Developer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              download="Balaji_Laygude_Resume.pdf"
              className="bg-black text-white px-6 py-3 rounded-4xl hover:bg-white hover:text-black transition focus:outline-none focus:ring-2 focus:ring-black hover:border border-black
"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border-2 bg- border-black text-black px-6 py-3 rounded-4xl hover:bg-black hover:text-white transition focus:outline-none focus:ring-2 focus:ring-black
"
            >
              Contact Me
            </a>
          </div>
          <div className="flex justify-center sm:justify-start my-5 gap-3">
            <a href="https://github.com/balajilaygude" target="_blank">
            <FaGithub  className="w-8 h-8 "/>
            </a>
            <a href="https://www.linkedin.com/in/balajilaygude" target="_blank">
            <FaLinkedin className="w-8 h-8 " />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex items-center">
          <img
            src={profile}
            alt="Balaji Laygude profile"
            className="w-64 h-64 sm:w-100 sm:h-100 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
