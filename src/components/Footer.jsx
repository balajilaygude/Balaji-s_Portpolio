export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4 text-sm">
      <a
        href="#home"
        className="hover:text-purple-400 transition-colors duration-300"
      >
        © {new Date().getFullYear()} Balaji Laygude — Portfolio
      </a>
    </footer>
  );
}
