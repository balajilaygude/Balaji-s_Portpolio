import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiPostman,
  SiVercel,
  SiGithubactions,
  SiJsonwebtokens,
} from "react-icons/si";

const skills = [
  {
    name: "React.js",
    icon: <FaReact />,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    glow: "hover:shadow-cyan-500/30",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
    glow: "hover:shadow-yellow-500/30",
    category: "Language",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
    glow: "hover:shadow-green-500/30",
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-gray-300",
    bg: "bg-white/10",
    border: "border-white/20",
    glow: "hover:shadow-white/20",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
    glow: "hover:shadow-green-500/30",
    category: "Database",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    glow: "hover:shadow-cyan-500/30",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    glow: "hover:shadow-blue-500/30",
    category: "Language",
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux />,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    glow: "hover:shadow-purple-500/30",
    category: "Frontend",
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens />,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
    glow: "hover:shadow-pink-500/30",
    category: "Security",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    glow: "hover:shadow-orange-500/30",
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
    bg: "bg-white/10",
    border: "border-white/20",
    glow: "hover:shadow-white/20",
    category: "Tools",
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    glow: "hover:shadow-blue-500/30",
    category: "DevOps",
  },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    glow: "hover:shadow-blue-500/30",
    category: "DevOps",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    glow: "hover:shadow-orange-500/30",
    category: "API",
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    color: "text-yellow-300",
    bg: "bg-yellow-300/10",
    border: "border-yellow-300/20",
    glow: "hover:shadow-yellow-400/30",
    category: "System",
  },
];

const Skills = () => {
return (
  <section
    id="skills"
    className="
      relative
      overflow-hidden
      px-6
      md:px-12
      lg:px-20
      py-24
      bg-[#07070a]
      text-white
    "
  >

    {/* =====================================================
        BACKGROUND
    ====================================================== */}

    <div
      className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-125
        h-125
        rounded-full
        bg-purple-600/10
        blur-[140px]
        pointer-events-none
      "
    />

    <div
      className="
        absolute
        bottom-0
        left-0
        w-87.5
        h-87.5
        rounded-full
        bg-cyan-500/10
        blur-[130px]
        pointer-events-none
      "
    />

    <div
      className="
        absolute
        top-1/2
        right-0
        w-75
        h-75
        rounded-full
        bg-pink-500/5
        blur-[120px]
        pointer-events-none
      "
    />


    {/* Subtle Grid */}

    <div
      className="
        absolute
        inset-0
        opacity-[0.025]
        pointer-events-none
        bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
        bg-size-[50px_50px]
      "
    />
        {/* MAIN CONTAINER */}

    <div className="relative z-10 max-w-7xl mx-auto">
          {/* HEADER */}
      <div className="text-center mb-16">

        <div
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-white/10
            bg-white/4
            backdrop-blur-md
            mb-6
          "
        >

          <span
            className="
              w-2
              h-2
              rounded-full
              bg-cyan-400
              shadow
              shadow-cyan-400
              animate-pulse
            "
          />

          <span
            className="
              text-[10px]
              font-mono
              tracking-[0.2em]
              uppercase
              text-gray-400
            "
          >
           Skills
          </span>

        </div>


        <h2
          className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-black
            tracking-tight
          "
        >

          My{" "}

          <span
            className="
              bg-linear-to-r
              from-cyan-400
              via-purple-400
              to-pink-400
              bg-clip-text
              text-transparent
            "
          >
            Tech Stack
          </span>

        </h2>


        <p
          className="
            max-w-xl
            mx-auto
            mt-5
            text-sm
            md:text-base
            text-gray-500
            leading-relaxed
          "
        >
          The technologies I use to build, style,
          secure and deploy modern web applications.
        </p>

      </div>

          {/* MERN FEATURED STACK */}
      <div
        className="
          relative
          max-w-5xl
          mx-auto
          mb-16
          rounded-4xl
          border
          border-white/10
          bg-white/[0.035]
          backdrop-blur-xl
          overflow-hidden
          shadow-2xl
          shadow-purple-950/20
        "
      >

        {/* Top gradient line */}

        <div
          className="
            absolute
            top-0
            left-0
            right-0
            h-0.5
            bg-linear-to-r
            from-cyan-400
            via-purple-500
            to-green-400
          "
        />


        {/* Background Glow */}

        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-96
            h-96
            rounded-full
            bg-purple-500/10
            blur-[100px]
            pointer-events-none
          "
        />


        <div
          className="
            relative
            p-7
            md:p-10
          "
        >

          {/* Featured Header */}

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-5
              mb-10
            "
          >

            <div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  mb-3
                "
              >

                <span
                  className="
                    text-[10px]
                    font-mono
                    uppercase
                    tracking-[0.2em]
                    text-gray-500
                  "
                >
                  Primary Stack
                </span>

                <span
                  className="
                    px-2
                    py-1
                    rounded-full
                    bg-green-400/10
                    border
                    border-green-400/20
                    text-[9px]
                    text-green-400
                    font-mono
                  "
                >
                  MAIN
                </span>

              </div>


              <h3
                className="
                  text-3xl
                  md:text-4xl
                  font-black
                "
              >
                MERN Stack
              </h3>

            </div>


            <p
              className="
                max-w-xs
                text-xs
                text-gray-500
                leading-relaxed
                md:text-right
              "
            >
              My primary ecosystem for building
              full-stack applications.
            </p>

          </div>


          {/* MERN Technologies */}

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-3
            "
          >

            {/* React */}

            <div
              className="
                group
                relative
                rounded-2xl
                border
                border-cyan-400/10
                bg-cyan-400/4
                p-5
                overflow-hidden
                hover:bg-cyan-400/8
                hover:border-cyan-400/30
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              <FaReact
                className="
                  text-4xl
                  text-cyan-400
                  group-hover:scale-110
                  group-hover:rotate-6
                  transition-all
                  duration-300
                "
              />

              <p className="mt-5 font-semibold">
                React
              </p>

              <p className="text-[11px] text-gray-500 mt-1">
                Frontend
              </p>

              <div
                className="
                  absolute
                  -right-8
                  -bottom-8
                  w-20
                  h-20
                  rounded-full
                  bg-cyan-400/10
                  blur-2xl
                  group-hover:bg-cyan-400/20
                  transition
                "
              />

            </div>


            {/* Node */}

            <div
              className="
                group
                relative
                rounded-2xl
                border
                border-green-400/10
                bg-green-400/4
                p-5
                overflow-hidden
                hover:bg-green-400/8
                hover:border-green-400/30
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              <FaNodeJs
                className="
                  text-4xl
                  text-green-400
                  group-hover:scale-110
                  group-hover:rotate-6
                  transition-all
                  duration-300
                "
              />

              <p className="mt-5 font-semibold">
                Node.js
              </p>

              <p className="text-[11px] text-gray-500 mt-1">
                Runtime
              </p>

            </div>


            {/* Express */}

            <div
              className="
                group
                relative
                rounded-2xl
                border
                border-white/10
                bg-white/3
                p-5
                overflow-hidden
                hover:bg-white/[0.07]
                hover:border-white/25
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              <SiExpress
                className="
                  text-4xl
                  text-white
                  group-hover:scale-110
                  transition-all
                  duration-300
                "
              />

              <p className="mt-5 font-semibold">
                Express
              </p>

              <p className="text-[11px] text-gray-500 mt-1">
                Backend
              </p>

            </div>


            {/* MongoDB */}

            <div
              className="
                group
                relative
                rounded-2xl
                border
                border-green-400/10
                bg-green-400/4
                p-5
                overflow-hidden
                hover:bg-green-400/8
                hover:border-green-400/30
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              <SiMongodb
                className="
                  text-4xl
                  text-green-400
                  group-hover:scale-110
                  group-hover:rotate-6
                  transition-all
                  duration-300
                "
              />

              <p className="mt-5 font-semibold">
                MongoDB
              </p>

              <p className="text-[11px] text-gray-500 mt-1">
                Database
              </p>

            </div>

          </div>

        </div>

      </div>

          {/* OTHER SKILLS HEADER */}

      <div
        className="
          flex
          items-center
          gap-4
          mb-7
        "
      >

        <div>

          <p
            className="
              text-[10px]
              font-mono
              tracking-[0.2em]
              uppercase
              text-gray-600
            "
          >
            Beyond MERN
          </p>

          <h3
            className="
              text-xl
              font-bold
              mt-1
            "
          >
            Tools & Technologies
          </h3>

        </div>


        <div
          className="
            h-px
            flex-1
            bg-white/10
          "
        />

      </div>


          {/* SKILLS GRID */}

      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-4
        "
      >

        {skills.map((skill) => (

          <div
            key={skill.name}
            className={`
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              ${skill.border}
              ${skill.bg}
              p-5
              min-h-38.75
              flex
              flex-col
              justify-between
              hover:-translate-y-2
              hover:shadow-xl
              ${skill.glow}
              transition-all
              duration-300
            `}
          >

            {/* Top */}

            <div
              className="
                flex
                items-center
                justify-between
              "
            >

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-gray-500
                  font-mono
                "
              >
                {skill.category}
              </span>


              <span
                className="
                  w-7
                  h-7
                  rounded-lg
                  border
                  border-white/10
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  text-gray-600
                  group-hover:text-white
                  group-hover:border-white/20
                  transition
                "
              >
                ↗
              </span>

            </div>


            {/* Icon */}

            <div
              className={`
                text-4xl
                ${skill.color}
                group-hover:scale-110
                group-hover:-rotate-3
                origin-left
                transition-all
                duration-300
              `}
            >
              {skill.icon}
            </div>


            {/* Name */}

            <div>

              <p
                className="
                  font-semibold
                  text-sm
                  text-gray-200
                  group-hover:text-white
                  transition
                "
              >
                {skill.name}
              </p>

            </div>


            {/* Hover Glow */}

            <div
              className="
                absolute
                -bottom-12
                -right-12
                w-28
                h-28
                rounded-full
                bg-white/5
                blur-3xl
                group-hover:bg-white/10
                transition-all
                duration-500
              "
            />
          </div>

        ))}

      </div>
          {/* BOTTOM */}

      <div
        className="
          mt-16
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          gap-3
          text-center
        "
      >

        <span
          className="
            text-green-400
            font-mono
            text-xs
          "
        >
          {"<"}
        </span>

        <span
          className="
            text-xs
            text-gray-500
            font-mono
            tracking-wider
          "
        >
          constantly_learning
        </span>

        <span
          className="
            text-green-400
            font-mono
            text-xs
          "
        >
          {"/>"}
        </span>

      </div>

    </div>

  </section>
);
};

export default Skills;
