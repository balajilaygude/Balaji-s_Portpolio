import profile from "../assets/balaji.png";

import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
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
        pt-28
        pb-20
        bg-linear-to-br
        from-white
        via-violet-50
        to-cyan-50
      "
    >

      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      {/* Purple Glow */}

      <div
        className="
          absolute
          -top-40
          -left-40
          w-112.5
          h-112.5
          rounded-full
          bg-violet-400/20
          blur-[120px]
          pointer-events-none
        "
      />

      {/* Cyan Glow */}

      <div
        className="
          absolute
          -bottom-40
          -right-40
          w-112.5
          h-112.5
          rounded-full
          bg-cyan-400/20
          blur-[120px]
          pointer-events-none
        "
      />

      {/* Center Glow */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-75
          h-75
          rounded-full
          bg-purple-300/10
          blur-[100px]
          pointer-events-none
        "
      />

      {/* Subtle Grid */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.035]
          bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          bg-size-[50px_50px]
        "
      />


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

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
          gap-14
          lg:gap-20
          items-center
        "
      >
            {/* PROFILE IMAGE

            MOBILE  → FIRST
            DESKTOP → RIGHT */}

        <div
          className="
            relative
            flex
            justify-center
            items-center
            w-full

            order-1
            md:order-2
          "
        >

          {/* Large Glow */}

          <div
            className="
              absolute
              w-64
              h-64
              sm:w-80
              sm:h-80
              lg:w-105
              lg:h-105
              rounded-full
              bg-linear-to-r
              from-violet-500
              via-purple-500
              to-cyan-400
              blur-3xl
              opacity-20
              animate-pulse
            "
          />
          {/* Rotating Dashed Ring */}

          <div
            className="
              absolute
              w-72
              h-72
              sm:w-90
              sm:h-90
              lg:w-107.5
              lg:h-107.5
              rounded-full
              border-2
              border-dashed
              border-violet-300/60
              animate-[spin_25s_linear_infinite]
            "
          />


          {/* Secondary Ring */}

          <div
            className="
              absolute
              w-64
              h-64
              sm:w-82.5
              sm:h-82.5
              lg:w-100
              lg:h-100
              rounded-full
              border
              border-cyan-300/40
              animate-[spin_18s_linear_infinite_reverse]
            "
          />


          {/* Profile */}

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
              bg-linear-to-br
              from-violet-600
              via-purple-500
              to-cyan-400
              shadow-2xl
              shadow-violet-500/30
            "
          >

            <div
              className="
                w-full
                h-full
                rounded-full
                bg-white
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
                "
              />

            </div>

          </div>

              {/* FLOATING TECHNOLOGIES */}
      
          {/* React */}

          <div
            className="
              absolute
              top-2
              left-2
              sm:top-6
              sm:left-8
              lg:left-10
              w-12
              h-12
              sm:w-14
              sm:h-14
              rounded-2xl
              bg-white
              border
              border-cyan-100
              shadow-xl
              flex
              items-center
              justify-center
              text-cyan-400
              animate-bounce
            "
            style={{ animationDuration: "3s" }}
          >

            <FaReact
              className="text-2xl sm:text-3xl"
            />

          </div>


          {/* Node */}

          <div
            className="
              absolute
              bottom-4
              left-0
              sm:bottom-8
              sm:left-6
              lg:left-4
              w-12
              h-12
              sm:w-14
              sm:h-14
              rounded-2xl
              bg-white
              border
              border-green-100
              shadow-xl
              flex
              items-center
              justify-center
              text-green-500
              animate-bounce
            "
            style={{ animationDuration: "3.5s" }}
          >

            <FaNodeJs
              className="text-2xl sm:text-3xl"
            />

          </div>


          {/* MongoDB */}

          <div
            className="
              absolute
              top-12
              right-0
              sm:top-16
              sm:right-4
              lg:right-2
              w-12
              h-12
              sm:w-14
              sm:h-14
              rounded-2xl
              bg-white
              border
              border-green-100
              shadow-xl
              flex
              items-center
              justify-center
              text-green-500
              animate-bounce
            "
            style={{ animationDuration: "4s" }}
          >

            <SiMongodb
              className="text-2xl sm:text-3xl"
            />

          </div>


          {/* JavaScript */}

          <div
            className="
              absolute
              bottom-0
              right-2
              sm:bottom-3
              sm:right-8
              lg:right-10
              w-12
              h-12
              sm:w-14
              sm:h-14
              rounded-2xl
              bg-yellow-400
              shadow-xl
              flex
              items-center
              justify-center
              text-black
              animate-bounce
            "
            style={{ animationDuration: "3.2s" }}
          >

            <SiJavascript
              className="text-2xl sm:text-3xl"
            />

          </div>

              {/* STATUS BADGE */}

          <div
            className="
              absolute
              -bottom-10
              left-1/2
              -translate-x-1/2
              bg-gray-950
              text-white
              px-4
              py-2.5
              rounded-xl
              shadow-xl
              font-mono
              text-[10px]
              sm:text-xs
              whitespace-nowrap
            "
          >

            <span className="text-green-400">
              $
            </span>

            {" "}
            building something awesome...

          </div>
        </div>

            {/* INFORMATION

            MOBILE  → SECOND
            DESKTOP → LEFT */}

        <div
          className="
            w-full
            text-center
            md:text-left
            order-2
            md:order-1
          "
        >
          {/* Availability */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-white
              border
              border-gray-200
              shadow-sm
              text-xs
              font-medium
              text-gray-600
            "
          >

            <span
              className="
                w-2
                h-2
                rounded-full
                bg-green-500
                shadow
                shadow-green-400
                animate-pulse
              "
            />
            Available for opportunities
          </div>

          {/* Greeting */}

          <p
            className="
            mt-5
              sm:mt-8
              text-sm
              font-mono
              tracking-[0.2em]
              uppercase
              text-violet-600
            "
          >
            Hello, I'm
          </p>


          {/* Name */}

          <h1
            className="
              mt-3
              text-5xl
              sm:text-6xl
              lg:text-7xl
              font-black
              tracking-tight
              leading-[0.95]
            "
          >

            Balaji

            <span
              className="
                block
                z-10
                bg-linear-to-r
                from-violet-600
                via-purple-500
                to-cyan-500
                bg-clip-text
                text-transparent
                pb-3
                sm:pb-5
                lg:pb-8
              "
            >
              Laygude
            </span>

          </h1>


          {/* Developer Role */}

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

            <span className="text-gray-300">
              {"<"}
            </span>

            <span>
              Full Stack Developer
            </span>

            <span className="text-gray-300">
              {"/>"}
            </span>

          </div>
        
          {/* Description */}

          <p
            className="
              mt-6
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

              {/* BUTTONS */}

          <div
            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              md:justify-start
              gap-3
            "
          >

            {/* Resume */}

            <a
              href="/resume.pdf"
              download="Balaji_Laygude_Resume.pdf"
              className="
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
                hover:bg-violet-600
                hover:-translate-y-1
                hover:shadow-violet-500/30
                transition-all
                duration-300
              "
            >

              <Download
                size={17}
                className="
                  group-hover:translate-y-0.5
                  transition-transform
                "
              />
              Download Resum
            </a>


            {/* Contact */}

            <a
              href="#contact"
              className="
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
                bg-white
                border
                border-gray-200
                text-gray-800
                font-semibold
                text-sm
                hover:border-violet-300
                hover:text-violet-600
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Let's Talk
              <ArrowUpRight
                size={17}
                className="
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition-transform
                "
              />

            </a>

          </div>

              {/* SOCIAL LINKS */}

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
              rel="noopener noreferrer"
              aria-label="GitHub"
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
              rel="noopener noreferrer"
              aria-label="LinkedIn"
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
                text-blue-600
                hover:bg-blue-600
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


      {/* =====================================================
          DESKTOP SCROLL INDICATOR
      ====================================================== */}

      <a
        href="#about"
        className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          hidden
          md:flex
          flex-col
          items-center
          gap-2
          text-gray-400
          hover:text-violet-500
          transition
        "
      >

        <span
          className="
            text-[10px]
            font-mono
            tracking-[0.3em]
          "
        >
          SCROLL
        </span>

        <ArrowDown
          size={15}
          className="animate-bounce"
        />

      </a>

    </section>
  );
}