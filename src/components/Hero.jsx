import profile from "../assets/balaji.png"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Background */}
      <div className="absolute -right-52 md:-top-40 top-0 w-[500px] h-[500px] sm:w-[900px] sm:h-[900px] bg-[#A691E4] rounded-[50%]" />

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full px-6 md:px-20 gap-10">
        {/* Text */}
        <div className="text-center md:text-left md:w-1/2">
          <p className="tracking-widest text-2xl">HELLO, MY NAME IS</p>
          <h1 className="text-4xl md:text-5xl font-bold my-2">
            BALAJI LAYGUDE
          </h1>
          <p className="mb-6 text-2xl">WEB DEVELOPER</p>
          <p className="text-lg">✉ balajiwork05@gmail.com</p>
          <p className="text-lg">📞 +91 80800 49103</p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex items-center">
          <img
            src={profile}
            className="w-64 h-64 sm:w-64 sm:h-[500px] sm:w-[500px] rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
