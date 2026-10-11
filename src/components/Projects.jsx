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
      <div className="relative z-10 max-w-7xl mx-auto">

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-3
            mb-8
          "
        >
          <div>
            <div
              className="
                flex
                items-center
                gap-2
                mb-2
              "
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-black
                "
              />
              <p
                className="
                  text-xs
                  font-mono
                  tracking-[0.25em]
                  uppercase
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
              Things I've

                Built
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
                flex
                flex-col
                overflow-hidden
                rounded-3xl
                bg-black
                text-white
              "
            >

              <div
                className="
                  overflow-hidden
                  aspect-16/10
                "
              >
                <img
                  src={project.imageName}
                  alt={`${project.name} project`}
                  className="
                      w-full
  h-full
  object-cover grayscale
p-4 rounded-4xl
                  "
                />
              </div>


              <div
                className="
                  flex
                  flex-col
                  flex-1
                  p-5
                  md:p-6
                "
              >
                <h3
                  className="
                    text-lg
                    md:text-xl
                    font-bold
                    leading-snug
                    text-white
                  "
                >
                  {project.name}
                </h3>

                {/* Divider */}

                <div
                  className="
                    w-full
                    h-0.5
                    rounded-full
                    bg-white
                    mt-3
                    mb-4
                  "
                />
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
                        bg-white
                        text-black
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
                        className="
                          flex-1
                          flex
                          items-center
                          justify-center
                          gap-2
                          px-4
                          py-2.5
                          rounded-xl
                          bg-white
                          text-black
                          text-sm
                          font-medium
                          
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
                        className="
                          flex-1

                          flex
                          items-center
                          justify-center
                          gap-2

                          px-4
                          py-2.5
                          rounded-xl
                          bg-white
                          text-black
                          text-sm
                          font-medium
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
      </div>
    </section>
  );
}
