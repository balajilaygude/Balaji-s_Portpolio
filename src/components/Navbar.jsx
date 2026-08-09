import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-4">

      <div
        className="
          max-w-6xl
          mx-auto
          relative
          rounded-2xl
          border border-white/20
          bg-white/70
          backdrop-blur-xl
          shadow-lg shadow-black/5
        "
      >

        {/* Navbar Main */}

        <div
          className="
            h-16
            px-4 md:px-6
            flex
            items-center
            justify-between
          "
        >

          {/* Logo */}

          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-gradient-to-br
                from-violet-600
                to-cyan-500
                flex
                items-center
                justify-center
                text-white
                font-bold
                text-sm
                shadow-lg
                shadow-violet-500/20
                group-hover:scale-105
                transition-transform
              "
            >
              BL
            </div>

            <div className="hidden sm:block">
              <p className="font-bold leading-none">
                Balaji Laygude
              </p>

              <p className="text-[10px] text-gray-500 mt-1 font-mono">
                FULL STACK DEVELOPER
              </p>
            </div>

          </a>


          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-1">

            {navLinks.map((link) => (

              <a
                key={link.name}
                href={link.href}
                className="
                  relative
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-gray-600
                  rounded-lg
                  hover:text-gray-950
                  hover:bg-gray-100
                  transition-all
                  duration-300
                  group
                "
              >

                {link.name}

                {/* Hover Line */}

                <span
                  className="
                    absolute
                    bottom-1
                    left-4
                    right-4
                    h-[2px]
                    rounded-full
                    bg-gradient-to-r
                    from-violet-500
                    to-cyan-400
                    scale-x-0
                    group-hover:scale-x-100
                    transition-transform
                    duration-300
                  "
                />

              </a>

            ))}

          </div>


          {/* Desktop CTA */}

          <a
            href="#contact"
            className="
              hidden md:flex
              items-center
              gap-2
              bg-gray-950
              text-white
              px-4
              py-2
              rounded-xl
              text-sm
              font-medium
              hover:bg-violet-600
              hover:shadow-lg
              hover:shadow-violet-500/20
              transition-all
              duration-300
            "
          >
            Let's Talk
            <ArrowUpRight size={15} />
          </a>


          {/* Mobile Button */}

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              w-10
              h-10
              rounded-xl
              bg-gray-950
              text-white
              flex
              items-center
              justify-center
              hover:bg-violet-600
              transition-colors
            "
          >
            {open ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>

        </div>


        {/* Mobile Menu */}

        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ease-out
            ${
              open
                ? "max-h-[420px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div
            className="
              px-4
              pb-4
              pt-2
            "
          >

            <div
              className="
                rounded-xl
                bg-gray-950
                p-3
                shadow-xl
              "
            >

              {/* Mobile Links */}

              <div className="space-y-1">

                {navLinks.map((link, index) => (

                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="
                      flex
                      items-center
                      justify-between
                      px-4
                      py-3
                      rounded-lg
                      text-gray-300
                      hover:text-white
                      hover:bg-white/10
                      transition-all
                      group
                    "
                  >

                    <div className="flex items-center gap-3">

                      <span className="font-medium">
                        {link.name}
                      </span>

                    </div>

                    <ArrowUpRight
                      size={16}
                      className="
                        text-gray-600
                        group-hover:text-cyan-400
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        transition-all
                      "
                    />

                  </a>

                ))}

              </div>


              {/* Mobile CTA */}

              <a
                href="#contact"
                onClick={closeMenu}
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-2
                  w-full
                  py-3
                  rounded-lg
                  bg-gradient-to-r
                  from-violet-600
                  to-cyan-500
                  text-white
                  font-semibold
                  text-sm
                  hover:opacity-90
                  transition
                "
              >
                Let's Work Together
                <ArrowUpRight size={16} />
              </a>

            </div>

          </div>

        </div>

      </div>

    </nav>
  );
}