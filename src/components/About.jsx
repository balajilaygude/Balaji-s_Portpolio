export default function About() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "UI/UX"]

  return (
    <section
      id="about"
      className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10"
    >
      <div>
        <h2 className="text-3xl font-bold sm:mb-8 mb-">About Me</h2>
        <ul type="circle" className=" mb-6 text-lg">
          <li>  A Frontend Developer specializing in React, JavaScript, Tailwind CSS, JSX, and SPA development.</li>
          <li>  Strong understanding of React Router, component-based architecture, and responsive web design.</li>
          <li> Dedicated to building functional, interactive, and visually appealing web applications.</li>
          <li> Translated Figma/UI designs into pixel-perfect, mobile-first layouts</li>
        </ul>
  
        <h2 className="text-3xl font-bold sm:mt-24 mb-4">Experience</h2>
        <p className="text-left text-lg"><b>Web Developer Intern <br /></b>
              Camtech Solution Pune <br />
              2026 – Present
        </p>
      </div>

      <div className="bg-[#A691E4] p-6 rounded-xl text-white">
        <h3 className="text-3xl font-bold mb-4 sm:m-7">My Skills</h3>
          <div className="mb-3">
            <div className="flex justify-between text-md">
              <span>HTML</span>
              <span>95%</span>
            </div>
            <div className="bg-white h-2 rounded">
              <div className="bg-[#3F51B5] h-2 w-[95%] rounded" />
            </div>
          </div>
          <div className="mb-3">
            <div className="flex justify-between text-md">
              <span>CSS</span>
              <span>90%</span>
            </div>
            <div className="bg-white h-2 rounded">
              <div className="bg-[#3F51B5] h-2 w-[90%] rounded" />
            </div>
          </div>
          <div className="mb-3">
            <div className="flex justify-between text-md">
              <span>Javascript</span>
              <span>85%</span>
            </div>
            <div className="bg-white h-2 rounded">
              <div className="bg-[#3F51B5] h-2 w-[85%] rounded" />
            </div>
          </div>
          <div className="mb-3">
            <div className="flex justify-between text-md">
              <span>Tailwind</span>
              <span>85%</span>
            </div>
            <div className="bg-white h-2 rounded">
              <div className="bg-[#3F51B5] h-2 w-[85%] rounded" />
            </div>
          </div>
          <div className="mb-3">
            <div className="flex justify-between text-md">
              <span>React</span>
              <span>85%</span>
            </div>
            <div className="bg-white h-2 rounded">
              <div className="bg-[#3F51B5] h-2 w-[85%] rounded" />
            </div>
          </div>
          <div className="mb-3">
            <div className="flex justify-between text-md">
              <span>Figma</span>
              <span>90%</span>
            </div>
            <div className="bg-white h-2 rounded">
              <div className="bg-[#3F51B5] h-2 w-[90%] rounded" />
            </div>
          </div>
          <div className="mb-3">
          <div className="flex justify-between text-md">
              <span>Git & Github</span>
              <span>80%</span>
            </div>
            <div className="bg-white h-2 rounded">
              <div className="bg-[#3F51B5] h-2 w-[80%] rounded" />
            </div>
          </div>          
      </div>
    </section>
  )
}
