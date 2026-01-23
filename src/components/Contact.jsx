import contact from "../assets/20943705.jpg";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10"
    >
      <img
        src={contact}
        alt=""
        className="sm:w-125 sm:h-125 rounded-md"
      />

      <div className="bg-white p-6 rounded-xl shadow text-center flex flex-col justify-center items-center gap-5">
        <h3 className="sm:text-4xl text-2xl font-bold mb-4 sm:my-10">
          Connect With Me
        </h3>
        <a
          href="mailto:balajiwork05@gmail.com"
          className="flex items-center  gap-5 hover:text-blue-600"
        >
          <Mail />
          <span>balajiwork05@gmail.com</span>
        </a>
        <a
          href="tel:+918080049103"
          className="flex items-center gap-5 hover:text-blue-600"
        >
          <Phone />
          <span>+91 80800 49103</span>
        </a>
        <div className="flex justify-center items-center gap-5">
          <MapPin />
          <p> Pune, Maharashtra</p>
        </div>
        <div className="sm:text-3xl text-2xl font-bold sm:mt-24 font-serif">
          <h2>Let’s Connect and Create Together</h2>
        </div>
      </div>
    </section>
  );
}
