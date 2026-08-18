import {
  FaUserGraduate,
  FaCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        px-6
        md:px-12
        lg:px-20
        py-24
        bg-white
      "
    >


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
        "
      >    
            {/* SECTION HEADER */}

        <div className="mb-14">

          <p
            className="
              text-sm
              font-mono
              tracking-[0.25em]
              uppercase
              text-violet-600
            "
          >
            Get to know me
          </p>

          <div
            className="
              mt-3
              flex
              flex-col
              md:flex-row
              md:items-end
              md:justify-between
              gap-5
            "
          >

            <h2
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-black
                tracking-tight
              "
            >
              About{" "}
              <span
                className="
                  bg-linear-to-r
                  from-violet-600
                  to-cyan-500
                  bg-clip-text
                  text-transparent
                "
              >
                Me
              </span>
            </h2>

            <p
              className="
                max-w-md
                text-gray-500
                text-sm
                leading-relaxed
              "
            >
              A developer who enjoys turning ideas into
              useful, responsive and well-designed web
              experiences.
            </p>

          </div>

        </div>
     
            {/* MAIN GRID */}

        <div
          className="
            grid
            lg:grid-cols-5
            gap-6
          "
        >

              {/* EDUCATION CARD */}

          <div
            className="
              lg:col-span-2
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-violet-100
              bg-linear-to-br
              from-violet-50
              via-white
              to-cyan-50
              p-7
              shadow-xl
              shadow-violet-100/40
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >

            <div
              className="
                absolute
                -top-16
                -right-16
                w-40
                h-40
                rounded-full
                bg-violet-200/40
                group-hover:scale-125
                transition-transform
                duration-700
              "
            />

            <div
              className="
                relative
                w-14
                h-14
                rounded-2xl
                bg-linear-to-br
                from-violet-600
                to-purple-500
                text-white
                flex
                items-center
                justify-center
                shadow-lg
                shadow-violet-500/20
              "
            >
              <FaUserGraduate size={24} />
            </div>

            <p
              className="
                relative
                mt-8
                text-xs
                font-mono
                tracking-[0.2em]
                uppercase
                text-violet-600
              "
            >
              Education
            </p>

            <h3
              className="
                relative
                mt-2
                text-2xl
                font-bold
                text-gray-900
              "
            >
              B.Sc. Computer Science
            </h3>

            <p
              className="
                relative
                mt-3
                text-gray-600
                leading-relaxed
              "
            >
              Modern College of Arts, Science and
              Commerce, Shivajinagar, Pune
            </p>

            <div
              className="
                relative
                mt-8
                pt-6
                border-t
                border-violet-100
                flex
                flex-wrap
                gap-3
              "
            >

              <div
                className="
                  px-4
                  py-2
                  rounded-xl
                  bg-white
                  border
                  border-gray-100
                  shadow-sm
                "
              >

                <p className="text-[10px] text-gray-400 uppercase">
                  CGPA
                </p>

                <p className="font-bold text-gray-900">
                  8.0
                </p>

              </div>

              <div
                className="
                  px-4
                  py-2
                  rounded-xl
                  bg-white
                  border
                  border-gray-100
                  shadow-sm
                "
              >

                <p className="text-[10px] text-gray-400 uppercase">
                  Duration
                </p>
                <p className="font-bold text-gray-900">
                  2023 — 2026
                </p>
              </div>

            </div>

          </div>

              {/* ABOUT CONTENT */}

          <div
            className="
              lg:col-span-3
              rounded-3xl
              border
              border-gray-100
              bg-white
              p-7
              md:p-9
              shadow-xl
              shadow-gray-200/50
            "
          >

            {/* Header */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-4
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-cyan-50
                    text-cyan-600
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaCode size={18} />
                </div>

                <div>

                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Who I am
                  </p>

                  <h3 className="font-bold text-lg">
                    Building with purpose
                  </h3>

                </div>

              </div>


              <ArrowUpRight
                className="
                  text-gray-300
                "
                size={22}
              />

            </div>


            {/* Description */}

            <div
              className="
                mt-8
                space-y-5
                text-gray-600
                leading-8
                text-sm
                md:text-base
              "
            >

              <p>
                Hi, I'm{" "}
                <span className="font-semibold text-gray-900">
                  Balaji Laygude
                </span>
                , a Computer Science graduate and Full
                Stack MERN Developer from Pune. I enjoy
                building web applications that are not
                only functional, but also clean,
                responsive and enjoyable to use.
              </p>

              <p>
                My core stack includes{" "}
                <span className="font-semibold text-gray-900">
                  React.js, JavaScript, Node.js,
                  Express.js, MongoDB and Tailwind CSS
                </span>
                . I enjoy working across both frontend
                and backend development and understanding
                how the complete application fits together.
              </p>

              <p>
                I'm continuously expanding my toolkit by
                exploring{" "}
                <span className="font-semibold text-violet-600">
                  Docker, CI/CD, cloud deployment and
                  TypeScript
                </span>
                , while focusing on writing better code
                and building real-world projects.
              </p>

            </div>

                {/* QUICK STATS */}
            <div
              className="
                mt-8
                grid
                grid-cols-2
                sm:grid-cols-4
                gap-3
              "
            >
              <div
                className="
                  rounded-2xl
                  bg-violet-50
                  p-4
                  hover:bg-violet-100
                  transition
                "
              >
                <p
                  className="
                    text-2xl
                    font-black
                    text-violet-600
                  "
                >
                  BSc
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Computer Science
                </p>

              </div>

              <div
                className="
                  rounded-2xl
                  bg-cyan-50
                  p-4
                  hover:bg-cyan-100
                  transition
                "
              >
                <p
                  className="
                    text-2xl
                    font-black
                    text-cyan-600
                  "
                >
                  8.0
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  CGPA
                </p>

              </div>

              <div
                className="
                  rounded-2xl
                  bg-green-50
                  p-4
                  hover:bg-green-100
                  transition
                "
              >
                <p
                  className="
                    text-2xl
                    font-black
                    text-green-600
                  "
                >
                  MERN
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Full Stack
                </p>

              </div>

              <div
                className="
                  rounded-2xl
                  bg-orange-50
                  p-4
                  hover:bg-orange-100
                  transition
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <FaMapMarkerAlt
                    className="text-orange-500"
                  />
                  <p
                    className="
                      text-lg
                      font-black
                      text-orange-600
                    "
                  >
                    Pune
                  </p>

                </div>

                <p className="text-xs text-gray-500 mt-1">
                  India
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}