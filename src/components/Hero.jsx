import profile from "../assets/balaji.png";

import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import {
  ArrowDown,
  ArrowUpRight,
  Download,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        px-6
        md:px-12
        lg:px-20
        pt-24
      "
    >
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          w-full
          flex
          flex-col
          md:grid
          md:grid-cols-2
          md:gap-14
          lg:gap-20
          items-center
        "
      >
        <div
          className="
            relative
            flex
            justify-center
            items-center
            flex-col
            w-full
            order-1
            md:order-2
          "
        >
          <div
            className="
              relative
              w-60
              h-60
              sm:w-72
              sm:h-72
              lg:w-80
              lg:h-80
              rounded-full
              p-2
            "
          >

            <div
              className="
                w-full
                h-full
                rounded-full
                bg-black
                p-2
              "
            >

              <img
                src={profile}
                alt="Balaji Laygude"
                className="
                  w-full
                  h-full
                  rounded-full
                  object-cover
                  grayscale
                "
              />

            </div>

          </div>


        </div>

        <div
          className="
            w-full
            text-center
            md:text-left
            order-2
            md:order-1
          "
        >
          <p
            className="
            mt-2
              sm:mt-8
              text-sm
              font-mono
              tracking-[0.2em]
              uppercase
            "
          >
            Hello, I'm
          </p>
          <h1
            className="
              my-3
              text-5xl
              sm:text-6xl
              lg:text-7xl
              font-black
              tracking-tight
              leading-[0.95]
            "
          >

            Balaji
              Laygude

          </h1>
          <div
            className="
              flex
              items-center
              justify-center
              md:justify-start
              gap-2
              text-xl
              sm:text-2xl
              font-semibold
            "
          >

            <span>
              {"<"}
            </span>

            <span>
              Full Stack Developer
            </span>

            <span >
              {"/>"}
            </span>

          </div>
        
          {/* Description */}

          <p
            className="
              mt-3
              sm:mt-6
              max-w-xl
              mx-auto
              md:mx-0
              text-gray-500
              leading-relaxed
              text-sm
              sm:text-base
            "
          >
            I build modern, responsive and scalable web
            applications using the MERN stack — turning
            ideas into clean, functional digital experiences.
          </p>
            <a
              href="/resume.pdf"
              download="Balaji_Laygude_Resume.pdf"
              className="
              mt-4
                group
                w-full
                sm:w-auto
                flex
                items-center
                justify-center
                gap-2
                px-6
                py-3.5
                rounded-xl
                bg-gray-950
                text-white
                font-semibold
                text-sm
                shadow-lg
                shadow-gray-900/20
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              <Download
                size={17}
              />
              Download Resume
            </a>
          <div
            className="
              mt-8
              flex
              items-center
              justify-center
              md:justify-start
              gap-3
            "
          >

            <span
              className="
                text-xs
                text-gray-400
                mr-2
              "
            >
              Find me on
            </span>


            {/* GitHub */}

            <a
              href="https://github.com/balajilaygude"
              target="_blank"
              className="
                w-10
                h-10
                rounded-xl
                bg-white
                border
                border-gray-200
                flex
                items-center
                justify-center
                text-gray-700
                hover:bg-gray-950
                hover:text-white
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaGithub size={19} />
            </a>


            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/balajilaygude"
              target="_blank"
              className="
                w-10
                h-10
                rounded-xl
                bg-white
                border
                border-gray-200
                flex
                items-center
                justify-center
                text-black
                hover:bg-black
                hover:text-white
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              <FaLinkedin size={19} />

            </a>

          </div>
          

        </div>

      </div>


    </section>
  );
}
