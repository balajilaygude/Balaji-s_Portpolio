import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

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
          rounded-xl
          border border-white/20
          bg-white/70
          backdrop-blur-xl
          shadow-lg shadow-black/5
        "
      >
        <div
          className="
            h-16
            px-4 md:px-6
            flex
            items-center
            justify-between
          "
        >
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
                bg-black
                flex
                items-center
                justify-center
                text-white
                font-bold
                text-sm
              "
            >
              BL
            </div>
          </a>
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
                "
              >
                {link.name}
              </a>
            ))}
          </div>


          <button
            type="button"
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
            "
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ease-out
            ${open ? "max-h-105 opacity-100" : "max-h-0 opacity-0"}
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
                bg-black
                p-3
                shadow-xl
              "
            >
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
                      text-white
                    "
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{link.name}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
