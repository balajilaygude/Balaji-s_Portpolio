
export default function Footer() {
  return (
    <footer className="relative bg-[#08080b] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 flex flex-col md:flex-row items-center justify-between gap-6 ">
            <div className="text-left space-y-2">
              <p className="font-semibold text-sm">
                Balaji Laygude
              </p>

              <p className="text-xs text-gray-500 font-mono">
                Full Stack MERN Developer
              </p>
            </div>
          <p className=" text-xs  text-gray-500 font-mono order-last md:order-0" >
            © {new Date().getFullYear()} · Built with React & Tailwind
          </p>
      </div>
    </footer>
  );
}