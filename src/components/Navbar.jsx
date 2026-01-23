import { useState } from "react"
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass =
    "cursor-pointer hover:text-purple-600 transition"

  return (
    <nav className="fixed top-4 right-4 md:right-40 md:top-10 z-50">
      {/* Mobile Button */}
      <button
        className="md:hidden bg-white px-3 py-1 rounded shadow"
        onClick={() => setOpen(!open)}
      >
         {open ? <X /> : <Menu />}
      </button>

      {/* Menu */}
      <ul
        className={`${
          open ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-6 bg-white md:bg-transparent p-4 md:p-0 rounded shadow md:shadow-none`}
      >
        <a href="#home" className={linkClass} onClick={() => setOpen(false)}>HOME</a>
        <a href="#projects" className={linkClass} onClick={() => setOpen(false)}>PROJECTS</a>
        <a href="#about" className={linkClass} onClick={() => setOpen(false)}>ABOUT</a>
        <a href="#contact" className={linkClass} onClick={() => setOpen(false)}>CONTACT</a>
      </ul>
    </nav>
  )
}
