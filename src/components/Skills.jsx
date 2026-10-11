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
    name: "Postman",
    icon: <SiPostman />,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    glow: "hover:shadow-orange-500/30",
    category: "API",
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
      pt-24
      pb-10
      bg-[#07070a]
      text-white
    "
  >

    <div className="relative z-10 max-w-7xl mx-auto">
  
      <div className="text-center mb-8">

        <div
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-white
            mb-2
          "
        >

          <span
            className="
              w-2
              h-2
              rounded-full
              bg-white
            "
          />

          <span
            className="
              text-[10px]
              font-mono
              tracking-[0.2em]
              uppercase
              text-white
            
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

          My
            Tech Stack

        </h2>


        <p
          className="
            max-w-xl
            mx-auto
            mt-5
            text-sm
            md:text-base
            text-white/80
            leading-relaxed
          "
        >
          The technologies I use to build, style,
          secure and deploy modern web applications.
        </p>

      </div>

      <div
        className="
          relative
          max-w-5xl
          mx-auto
          mb-10
          rounded-4xl
          border
          border-white
          overflow-hidden

        "
      >



        <div
          className="
            relative
            p-7
            md:p-10
          "
        >

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-2
              mb-5
            "
          >

            <div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                
                "
              >

                <span
                  className="
                    text-[10px]
                    font-mono
                    uppercase
                    tracking-[0.2em]
                    text-white/80
                  "
                >
                  Primary Stack
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
                text-white/80
                md:text-right
              "
            >
              My primary ecosystem for building
              full-stack applications.
            </p>

          </div>

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
                
                rounded-2xl
                bg-white
                text-black
                p-5 flex justify-center items-center flex-col
                overflow-hidden
              "
            >

              <FaReact
                className="
                  text-4xl
                  text-black
                "
              />

              <p className="mt-3 font-semibold">
                React
              </p>

              <p className="text-[11px]  mt-1">
                Frontend
              </p>

            </div>


            {/* Node */}

            <div
              className="
               
                rounded-2xl
                bg-white
                text-black
                p-5 flex justify-center items-center flex-col
                overflow-hidden
              "
            >

              <FaNodeJs
                className="
                  text-4xl
                  text-black 
                "
              />

              <p className="mt-3  font-semibold">
                Node.js
              </p>

              <p className="text-[11px]  mt-1">
                Runtime
              </p>

            </div>

            <div
              className="
                 
                rounded-2xl
                bg-white
                text-black
                p-5 flex justify-center items-center flex-col
                overflow-hidden
              "
            >

              <SiExpress
                className="
                  text-4xl
                  text-black
                "
              />

              <p className="mt-3 font-semibold">
                Express
              </p>

              <p className="text-[11px] mt-1">
                Backend
              </p>

            </div>


            {/* MongoDB */}

            <div
              className="               
                rounded-2xl
                bg-white
                text-black
                p-5 flex justify-center items-center flex-col
                overflow-hidden
              "
            >

              <SiMongodb
                className="
                  text-4xl
                  text-black
                "
              />

              <p className="mt-5 font-semibold">
                MongoDB
              </p>

              <p className="text-[11px] mt-1">
                Database
              </p>

            </div>

          </div>

        </div>

      </div>

      <div
        className="
          flex
          items-center
          gap-4
          mb-7
        "
      >


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
            className="
              overflow-hidden
              rounded-2xl
              bg-white
              text-black
              p-5
              min-h-38.75
              flex
              flex-col
              justify-center gap-2
              items-center
            "
          >
            <div
              className={`
                text-4xl
              `}

            >
              {skill.icon}
            </div>

              <p
                className="
                  font-semibold
                  text-sm
                  text-black
                "
              >
                {skill.name}
              </p>

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
                  text-black
                  font-mono
                "
              >
                {skill.category}
              </span>

            </div>

          </div>

        ))}

      </div>
    </div>

  </section>
);
};

export default Skills;
