import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { data } from "../Data/Data.js";

export default function Projects() {
  const projects = data;

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        px-6
        md:px-12
        lg:px-20
        pt-24
        bg-white
      "
    > 
          {/* MAIN CONTAINER */}

      <div className="relative z-10 max-w-7xl mx-auto">

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-6
            mb-14
          "
        >
          <div>
            <div
              className="
                flex
                items-center
                gap-2
                mb-4
              "
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-violet-500
                  animate-pulse
                "
              />
              <p
                className="
                  text-xs
                  font-mono
                  tracking-[0.25em]
                  uppercase
                  text-violet-600
                "
              >
               Projects
              </p>
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
              Things I've{" "}
              <span
                className="
                  bg-linear-to-r
                  from-violet-600
                  via-purple-500
                  to-cyan-500
                  bg-clip-text
                  text-transparent
                "
              >
                Built
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-sm
              md:text-base
              text-gray-500
              leading-relaxed
              md:text-right
            "
          >
            A collection of projects where I turn ideas into functional,
            responsive and user-focused experiences.
          </p>
        </div>

            {/* PROJECT GRID */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-7
          "
        >
          {projects.map((project, index) => (
            <article
              key={index}
              className="
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white
                shadow-lg
                shadow-gray-200/50
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-violet-200/40
                transition-all
                duration-500
              "
            >
                  {/* IMAGE */}
              <div
                className="
                  relative
                  overflow-hidden
                  bg-gray-100
                  aspect-16/10
                "
              >
                <img
                  src={project.imageName}
                  alt={`${project.name} project`}
                  className="
                      w-full
  h-full
  object-cover
  group-hover:scale-105
  transition-transform
  duration-700
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                    opacity-40
                    md:group-hover:opacity-70
                    transition-opacity
                    duration-500
                  "
                />

                {/* Project Number */}

                <div
                  className="
                    absolute
                    top-4
                    left-4
                    px-3
                    py-1.5
                    rounded-full
                    bg-black/70
                    backdrop-blur-md
                    text-white
                    text-[10px]
                    font-mono
                    tracking-widest
                    border
                    border-white/10
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Hover Arrow */}

                <div
                  className="
                    absolute
                    top-4
                    right-4
                    w-10
                    h-10
                    rounded-full
                    bg-white/90
                    flex
                    items-center
                    justify-center
                    text-gray-900
                    opacity-0
                    translate-y-2
                    md:group-hover:opacity-100
                    md:group-hover:translate-y-0
                    transition-all
                    duration-300
                  "
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>

                  {/* CONTENT */}
              <div
                className="
                  flex
                  flex-col
                  flex-1
                  p-5
                  md:p-6
                "
              >
                {/* Project Name */}

                <h3
                  className="
                    text-lg
                    md:text-xl
                    font-bold
                    leading-snug
                    text-gray-900
                    group-hover:text-violet-600
                    transition-colors
                    duration-300
                  "
                >
                  {project.name}
                </h3>

                {/* Divider */}

                <div
                  className="
                    w-10
                    h-1
                    rounded-full
                    bg-linear-to-r
                    from-violet-500
                    to-cyan-400
                    mt-3
                    mb-4
                    group-hover:w-16
                    transition-all
                    duration-300
                  "
                />

                    {/* TECH STACK */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {project.languages.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="
                        text-[10px]
                        md:text-xs
                        font-medium
                        px-3
                        py-1.5
                        rounded-full
                        bg-gray-50
                        text-gray-600
                        border
                        border-gray-200
                        hover:bg-violet-50
                        hover:text-violet-700
                        hover:border-violet-200
                        transition-all
                        duration-200
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                    {/* LINKS */}
                {(project.liveLink || project.githubLink) && (
                  <div
                    className="
                      mt-auto
                      pt-6
                      flex
                      items-center
                      gap-3
                    "
                  >
                    {/* Live */}

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex-1
                          flex
                          items-center
                          justify-center
                          gap-2
                          px-4
                          py-2.5
                          rounded-xl
                          bg-gray-900
                          text-white
                          text-sm
                          font-medium
                          hover:bg-violet-600
                          hover:-translate-y-0.5
                          transition-all
                          duration-300
                        "
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}

                    {/* GitHub */}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex-1

                          flex
                          items-center
                          justify-center
                          gap-2

                          px-4
                          py-2.5

                          rounded-xl

                          border
                          border-gray-200

                          text-gray-700

                          text-sm
                          font-medium

                          hover:bg-gray-900
                          hover:text-white
                          hover:border-gray-900

                          hover:-translate-y-0.5

                          transition-all
                          duration-300
                        "
                      >
                        <FaGithub size={17} />
                        Repo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

            {/* BOTTOM */}
        <div
          className="
            flex
            items-center
            gap-4
            mt-16
          "
        >
          <div
            className="
              h-px
              flex-1
              bg-gray-200
            "
          />

          <p
            className="
              text-xs
              font-mono
              text-gray-400
              whitespace-nowrap
            "
          >
            More projects coming soon...
          </p>

          <div
            className="
              h-px
              flex-1
              bg-gray-200
            "
          />
        </div>
      </div>
    </section>
  );
}
