import { PiMedal } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";

export default function About() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind", level: 85 },
    { name: "React", level: 85 },
    { name: "Figma", level: 90 },
    { name: "Git & GitHub", level: 80 },
  ];

  return (
    <section id="about" className="px-6 md:px-20 py-16 gap-10">
      <div>
        <p className="text-gray-400 text-center">Get To know More</p>
        <h2 className="text-4xl text-center font-bold mb-8">About Me</h2>
        <div className="flex flex-col w-full lg:flex-row gap-5">
          <img
            src="/pic.png"
            alt=""
            className="lg:w-3/6  w-full
            object-cover
    rounded-xl
    md:grayscale
    md:hover:grayscale-0
    transition-all
    duration-500"
          />

          <div className="grid grid-rows-2 w-full lg:w-3/6 p-2 gap-5">
            {/* <div className=" flex flex-col gap-2 items-center justify-center rounded-2xl border">
              <PiMedal className="text-3xl" />
              <h2 className="text-xl font-semibold">Experience</h2>
              <p className="text-lg">Camtech Solutions Pvt. Ltd.</p>
              <h3 className="font-semibold">Frontend Developer</h3>
              <p>Jan 2026 – May 2026</p>
            </div> */}
            <div className=" flex flex-col gap-2 items-center justify-center rounded-2xl border p-2 shadow-lg shadow-gray-600">
              <FaUserGraduate className="text-3xl" />
              <h2 className="text-xl font-semibold">Education</h2>
              <p className="text-lg">Modern Collage Shivajinagar Pune 05</p>
              <h3 className="font-semibold">Bsc in Computer Science</h3>
              <p>CGPA :8.0</p>
            </div>
            <p className="border rounded-2xl p-5 text-center shadow-lg shadow-gray-600">
              Hi, I’m Balaji Laygude, a Computer Science graduate and aspiring Full Stack MERN Developer from Pune. My core stack includes <span className="font-semibold"> React.js, JavaScript, Node.js, Express.js, MongoDB, and Tailwind CSS.</span> working across both frontend and backend development. <span className="font-semibold">I’m also exploring Docker, CI/CD, cloud deployment, and TypeScript to strengthen my development skills.</span>
            </p>
          </div>
        </div>
      </div>

      {/* <div className="bg-amber-800/40 p-8 rounded-xl text-white shadow-lg">
        <h3 className="text-3xl font-bold mb-4 sm:m-7">My Skills</h3>
        {skills.map((skill) => (
          <div key={skill.name} className="mb-4">
            <div className="flex justify-between text-md mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="bg-white/30 h-2 rounded">
              <div
                className="bg-[#3F51B5] h-2 rounded transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}
