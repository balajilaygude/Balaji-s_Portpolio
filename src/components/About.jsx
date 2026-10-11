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
        pt-24
        pb-10
        bg-white
      "
    >
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
        "
      >    
            {/* SECTION HEADER */}

        <div className="mb-8">

          <p
            className="
              text-sm
              font-mono
              uppercase
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
              About
                Me
            </h2>
          </div>

        </div>
        <div
          className="
            grid
            lg:grid-cols-5
            gap-6
          "
        >
          <div
            className="
              lg:col-span-2
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-black
              p-7
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
                bg-black
              "
            />

            <div
              className="
                relative
                w-14
                h-14
                rounded-2xl
                bg-black
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
                border-black
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
                  bg-black
                  text-white
                  
                "
              >

                <p className="text-[10px]  uppercase">
                  CGPA
                </p>

                <p className="font-bold ">
                  8.0
                </p>

              </div>

              <div
                className="
                  px-4
                  py-2
                  rounded-xl
                  bg-black
                  text-white
                "
              >

                <p className="text-[10px]  uppercase">
                  Duration
                </p>
                <p className="font-bold ">
                  2023 — 2026
                </p>
              </div>

              

            </div>

          </div>

          <div
            className="
              lg:col-span-3
              rounded-3xl
              border
              border-black
              bg-white
              p-7
              md:p-9
              
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
                    
                    text-black
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaCode size={18} />
                </div>

                <div>

                  <p className="text-xs text-gray-700 uppercase tracking-wider">
                    Who I am
                  </p>

                  <h3 className="font-bold text-lg">
                    Building with purpose
                  </h3>

                </div>

              </div>

            </div>
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


            </div>

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
                  bg-black
                  text-white
                  p-4
                  
                "
              >
                <p
                  className="
                    text-2xl
                    font-black
                  "
                >
                  BSc
                </p>

                <p className="text-xs  mt-1">
                  Computer Science
                </p>

              </div>

              <div
                className="
                  rounded-2xl
                 
                  p-4
                 bg-black
                  text-white
                "
              >
                <p
                  className="
                    text-2xl
                    font-black
                    
                  "
                >
                  8.0
                </p>

                <p className="text-xs  mt-1">
                  CGPA
                </p>

              </div>

              <div
                className="
                  rounded-2xl
                  bg-black
                  text-white
                  p-4
                  
                "
              >
                <p
                  className="
                    text-2xl
                    font-black
                    
                  "
                >
                  MERN
                </p>

                <p className="text-xs  mt-1">
                  Full Stack
                </p>

              </div>

              <div
                className="
                  rounded-2xl
                  bg-black
                  text-white
                  p-4
                  
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
                    className=""
                  />
                  <p
                    className="
                      text-lg
                      font-black
                      
                    "
                  >
                    Pune
                  </p>

                </div>

                <p className="text-xs  mt-1">
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