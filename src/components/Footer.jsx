import { FaGithub,FaLinkedin  } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4 text-sm">
      <a
        href="#home"
        className="font-mono font-semibold"
      >
        © {new Date().getFullYear()} Balaji Laygude — Portfolio
      </a>
    </footer>
  );
}
