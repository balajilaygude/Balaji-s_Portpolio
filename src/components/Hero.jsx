import profile from "../assets/balaji.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Background */}
      <div className="absolute -right-52 md:-top-40 top-0 w-[500px] h-[500px] sm:w-[900px] sm:h-[900px] bg-[#A691E4]/80 blur-3xl rounded-full" />

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full px-6 md:px-20 gap-10">
        {/* Text */}
        <div className="text-center md:text-left md:w-1/2">
          <p className="tracking-widest text-sm text-gray-500">
            HELLO, MY NAME IS
          </p>

          <h1 className="text-4xl md:text-6xl font-bold my-4">
            Balaji Laygude
          </h1>

          <p className="mb-6 text-xl text-purple-600 font-semibold">
            Web Developer
          </p>
          <a
            href="mailto:balajiwork05@gmail.com"
            className="text-lg block hover:text-purple-600"
          >
            ✉️ balajiwork05@gmail.com
          </a>

          <a
            href="tel:+918080049103"
            className="text-lg block hover:text-purple-600"
          >
            📞 +91 80800 49103
          </a>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition focus:outline-none focus:ring-2 focus:ring-purple-500
"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-xl hover:bg-purple-50 transition focus:outline-none focus:ring-2 focus:ring-purple-500
"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex items-center">
          <img
            src={profile}
            alt="Balaji Laygude profile"
            className="w-64 h-64 sm:w-[400px] sm:h-[400px] rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
