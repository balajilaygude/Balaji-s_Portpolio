import ipl from "../assets/ipl.png";
import dice from "../assets/dice.jpg";
import { Link } from "lucide-react";
import { GitGraph } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-20 py-16">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8">
        <div className="bg-white p-6 rounded-xl shadow text-center flex flex-col hover:scale-105 items-center justify-center hover:shadow-2xl shadow-fuchsia-700">
          <img
            src={ipl}
            alt=""
            className="sm:h-[250px] sm:w-[300px] h-48 w-60 "
          />
          <h3 className="font-semibold">IPL Dashboard </h3>
          <p className="text-sm text-gray-600 mt-2">
            Developed a responsive IPL dashboard using React.js and Tailwind CSS
            Focused on clean UI, reusable components, client-side routing
            applications Cloud deployment using Vercel for live,
            production-ready access
          </p>
          <div className="w-full flex justify-between items-center pt-3">
            <a
              href="https://ipl-project-react-psi.vercel.app/"
              target="_blank"
              className="flex justify-center items-center gap-2 hover:scale-105 text-blue-600 underline border-fuchsia-700 border-2 px-5 py-3 rounded-2xl  hover:bg-[#EFE6FF]"
            >
              <Link />
              Live
            </a>
            <a
              href="https://github.com/balajilaygude/IPL-Project-React"
              target="_blank"
              className="flex justify-center items-center gap-2 text-blue-600 underline"
            >
              <GitGraph className=" text" />
              repo
            </a>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center flex flex-col hover:scale-105 items-center justify-center hover:shadow-2xl shadow-fuchsia-700">
          <img
            src={dice}
            alt=""
            className="sm:h-[300px] sm:w-[300px] h-48 w-48 "
          />
          <h3 className="font-semibold">Dice Game </h3>
          <p className="text-sm text-gray-600 mt-2">
            Created a modern, responsive dice game using React.js with dynamic state updates.
            Designed reusable components, smooth gameplay logic, and intuitive user interactions.
            Hosted the project live on Vercel for easy access and testing.
          </p>
          <div className="w-full flex justify-between items-center pt-3">
            <a
              href="https://dics-game-react.vercel.app/"
              target="_blank"
              className="flex justify-center items-center gap-2 hover:scale-105 text-blue-600 underline border-fuchsia-700 border-2 px-5 py-3 rounded-2xl  hover:bg-[#EFE6FF]"
            >
              <Link />
              Live
            </a>
            <a
              href="https://github.com/balajilaygude/React-Game"
              target="_blank"
              className="flex justify-center items-center gap-2 text-blue-600 underline"
            >
              <GitGraph className=" text" />
              repo
            </a>
          </div>
        </div>      
        
        
      </div>
    </section>
  );
}
