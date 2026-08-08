import { Link } from "lucide-react";
import { GitGraph } from "lucide-react";
import { FaGithub  } from "react-icons/fa";
import { data } from "../Data/Data.js";

export default function Projects() {

  const projects=data
  return (
    // <section id="projects" className="min-h-[calc(100vh-100px)] px-6 md:px-20 py-16">
    //   <h2 className="text-3xl font-bold mb-10">Projects</h2>

    //   <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-8">
    //     <div className="bg-white p-6 rounded-xl text-center flex flex-col  items-center justify-center hover:scale-105 shadow-lg hover:shadow-2xl transition-transform duration-300 shadow-amber-800">
    //       <img
    //         src={auth}
    //         alt=""
    //         className="h-56 object-cover rounded-md"
    //       />
    //       <h3 className="font-semibold">Auth System</h3>
    //       <div className="flex flex-wrap gap-2 justify-center mt-3">
    //         <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
    //           React
    //         </span>
    //         <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
    //           Node
    //         </span>
    //         <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
    //           MongoDb
    //         </span>
    //       </div>
    //       <div className="w-full flex justify-between items-center pt-3">
    //         <a
    //           href="https://auth-frontend-five-theta.vercel.app/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 flex gap-2"
    //         >
    //           <Link />
    //           Live
    //         </a>
    //         <a
    //           href="https://github.com/balajilaygude/Auth"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="flex justify-center items-center gap-2 text-blue-600 underline"
    //         >
    //           <FaGithub  className="w-8 h-8 "/>
    //           repo
    //         </a>
    //       </div>
    //     </div>
    //     <div className="bg-white p-6 rounded-xl text-center flex flex-col  items-center justify-center hover:scale-105 shadow-lg hover:shadow-2xl transition-transform duration-300 shadow-amber-800">
    //       <img
    //         src={ipl}
    //         alt=""
    //         className="h-56 object-cover rounded-md"
    //       />
    //       <h3 className="font-semibold">IPL Dashboard </h3>
    //       <div className="flex flex-wrap gap-2 justify-center mt-3">
    //         <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
    //           React
    //         </span>
    //         <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
    //           Tailwind
    //         </span>
    //         <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
    //           Vercel
    //         </span>
    //       </div>
    //       <div className="w-full flex justify-between items-center pt-3">
    //         <a
    //           href="https://ipl-project-react-psi.vercel.app/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 flex gap-2"
    //         >
    //           <Link />
    //           Live
    //         </a>
    //         <a
    //           href="https://github.com/balajilaygude/IPL-Project-React"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="flex justify-center items-center gap-2 text-blue-600 underline"
    //         >
    //           <FaGithub  className="w-8 h-8 "/>
    //           repo
    //         </a>
    //       </div>
    //     </div>
    //     <div className="bg-white p-6 rounded-xl text-center flex flex-col  items-center justify-center hover:scale-105 shadow-lg hover:shadow-2xl transition-transform duration-300 shadow-amber-800">
    //       <img
    //         src={dice}
    //         alt=""
    //         className="h-56 object-cover rounded-md"
    //       />
    //       <h3 className="font-semibold">Dice Game </h3>
    //       <div className="flex flex-wrap gap-2 justify-center mt-3">
    //         <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
    //           React
    //         </span>
    //         <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
    //           Tailwind
    //         </span>
    //         <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
    //           Vercel
    //         </span>
    //       </div>

    //       <div className="w-full flex justify-between items-center pt-3">
    //         <a
    //           href="https://dics-game-react.vercel.app/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 flex gap-2"
    //         >
    //           <Link />
    //           Live
    //         </a>
    //         <a
    //           href="https://github.com/balajilaygude/React-Game"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="flex justify-center items-center gap-2 text-blue-600 underline"
    //         >
    //           <FaGithub  className="w-8 h-8 "/>
    //           repo
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
      <section
    id="projects"
    className="min-h-[calc(100vh-100px)] px-6 md:px-12 lg:px-20 py-16"
  >
    <h2 className="text-3xl font-bold mb-10">Projects</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="    group
      bg-white p-6 rounded-xl
      text-center flex flex-col items-center
      hover:scale-105
      shadow-lg hover:shadow-2xl
      transition-transform duration-300
      shadow-gray-400"
        >
          {/* Project Image */}
          <img
            src={project.imageName}
            alt={project.name}
            className="      w-full h-56
        object-cover rounded-md
        md:grayscale
        md:group-hover:grayscale-0
        transition-all duration-500"
          />

          {/* Project Name */}
          <h3 className="font-semibold text-xl mt-4">
            {project.name}
          </h3>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {project.languages.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="  text-xs
  bg-gray-100
  text-gray-700
  border border-gray-200
  px-3 py-1
  rounded-full
  hover:bg-gray-200
  hover:text-black
  transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Links */}
        <div className="w-full flex justify-between items-center pt-5 mt-auto">

  {/* Live */}
  {project.liveLink && (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
            bg-black
  text-white
  px-5 py-2
  rounded-xl
  hover:bg-gray-800
  hover:scale-105
  transition-all duration-300
  flex items-center gap-2
      "
    >
      <Link />
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
           text-gray-700
  border border-gray-300
  px-5 py-2
  rounded-xl
  hover:bg-gray-100
  hover:text-black
  transition-all duration-300
  flex items-center gap-2
      "
    >
      <FaGithub className="w-6 h-6" />
      Repo
    </a>
  )}

</div>
        </div>
      ))}
    </div>
  </section>
  );
}
