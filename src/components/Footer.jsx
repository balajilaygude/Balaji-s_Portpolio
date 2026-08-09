import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#08080b] text-white overflow-hidden">

      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          md:px-12
          lg:px-20
          py-8
        "
      >

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >

          {/* Left */}

          <a
            href="#home"
            className="group flex items-center gap-3"
          >

            <div
              className="
                w-9
                h-9
                rounded-xl
                bg-white/5
                border border-white/10
                flex items-center justify-center
                font-mono
                font-bold
                text-sm
                group-hover:bg-violet-600
                group-hover:border-violet-500
                transition-all
                duration-300
              "
            >
              BL
            </div>

            <div className="text-left">

              <p className="font-semibold text-sm">
                Balaji Laygude
              </p>

              <p className="text-xs text-gray-500 font-mono">
                Full Stack MERN Developer
              </p>

            </div>

          </a>


          {/* Center */}

          <p
            className="
              text-xs
              text-gray-500
              font-mono
              order-last
              md:order-none
            "
          >
            © {new Date().getFullYear()} · Built with React & Tailwind
          </p>


          {/* Socials */}

          <div className="flex items-center gap-3">

            <a
              href="https://github.com/balajilaygude"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                group
                w-10
                h-10
                rounded-xl
                border
                border-white/10
                bg-white/5
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-black
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaGithub
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
            </a>


            <a
              href="https://www.linkedin.com/in/balajilaygude"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                group
                w-10
                h-10
                rounded-xl
                border
                border-white/10
                bg-white/5
                flex
                items-center
                justify-center
                hover:bg-blue-500
                hover:border-blue-500
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaLinkedin
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
            </a>


            <a
              href="#home"
              aria-label="Back to top"
              className="
                group
                w-10
                h-10
                rounded-xl
                border
                border-white/10
                bg-white/5
                flex
                items-center
                justify-center
                hover:bg-violet-600
                hover:border-violet-600
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <ArrowUpRight
                size={18}
                className="
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  transition-transform
                "
              />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}