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
    <section
      id="about"
      className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10"
    >
      <div>
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <ul className="mb-6 text-lg space-y-3 list-disc list-inside text-gray-700">
          <p className="text-lg text-gray-700 mb-6">
            I’m a passionate Frontend Developer focused on building modern,
            responsive web applications with great user experience.
          </p>
          <li>
            {" "}
            A Frontend Developer specializing in React, JavaScript, Tailwind
            CSS, JSX, and SPA development.
          </li>
          <li>
            {" "}
            Strong understanding of React Router, component-based architecture,
            and responsive web design.
          </li>
          <li>
            {" "}
            Dedicated to building functional, interactive, and visually
            appealing web applications.
          </li>
          <li>
            {" "}
            Translated Figma/UI designs into pixel-perfect, mobile-first layouts
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-16 mb-4">Experience</h2>

        <div className="text-lg">
          <p className="font-semibold">Web Developer Intern</p>
          <p className="text-gray-700">Camtech Solution, Pune</p>
          <p className="text-sm text-gray-500">2026 – Present</p>
        </div>
      </div>

      <div className="bg-[#A691E4]/90 p-8 rounded-xl text-white shadow-lg">
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
      </div>
    </section>
  );
}
