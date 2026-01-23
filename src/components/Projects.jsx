import ipl from "../assets/ipl.png";
import dice from "../assets/dice.jpg";
import { Link } from "lucide-react";
import { GitGraph } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-20 py-16">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8">
        <div className="bg-white p-6 rounded-xl text-center flex flex-col  items-center justify-center hover:scale-105 shadow-lg hover:shadow-2xl transition-transform duration-300 shadow-fuchsia-700">
          <img
            src={ipl}
            alt=""
            className="h-full w-full object-cover rounded-md"
          />
          <h3 className="font-semibold">IPL Dashboard </h3>
          <div className="flex flex-wrap gap-2 justify-center mt-3">
            <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              React
            </span>
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              Tailwind
            </span>
            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              Vercel
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Responsive IPL dashboard built with React and Tailwind CSS.
            Focused on reusable components and clean UI.
            Deployed on Vercel for production access.
          </p>
          <div className="w-full flex justify-between items-center pt-3">
            <a
              href="https://ipl-project-react-psi.vercel.app/"
              target="_blank" rel="noopener noreferrer"
              className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 flex gap-2"
            >
              <Link />
              Live
            </a>
            <a
              href="https://github.com/balajilaygude/IPL-Project-React"
              target="_blank" rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 text-blue-600 underline"
            >
              <GitGraph className=" text" />
              repo
            </a>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl text-center flex flex-col  items-center justify-center hover:scale-105 shadow-lg hover:shadow-2xl transition-transform duration-300 shadow-fuchsia-700">
          <img
            src={dice}
            alt=""
            className="h-full w-full object-cover rounded-md"
          />
          <h3 className="font-semibold">Dice Game </h3>
          <div className="flex flex-wrap gap-2 justify-center mt-3">
            <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              React
            </span>
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              Tailwind
            </span>
            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              Vercel
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Created responsive dice game with dynamic
            state updates. smooth gameplay logic. Hosted the project live on Vercel
            for easy access.
          </p>
          <div className="w-full flex justify-between items-center pt-3">
            <a
              href="https://dics-game-react.vercel.app/"
              target="_blank" rel="noopener noreferrer"
              className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 flex gap-2"
            >
              <Link />
              Live
            </a>
            <a
              href="https://github.com/balajilaygude/React-Game"
              target="_blank" rel="noopener noreferrer"
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
