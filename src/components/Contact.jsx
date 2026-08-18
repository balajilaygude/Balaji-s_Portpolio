import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        px-6
        md:px-12
        lg:px-20
        py-24
        bg-white
      "
    >
          {/* CONTAINER */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
        "
      >

            {/* HEADER */}
        <div className="mb-12">
          <h2
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-black
              tracking-tight
            "
          >
            Let's{" "}

            <span
              className="
                bg-linear-to-r
                from-violet-600
                via-purple-500
                to-cyan-500
                bg-clip-text
                text-transparent
              "
            >
              connect.
            </span>
          </h2>
          <p
            className="
              mt-5
              max-w-xl
              text-gray-500
              text-sm
              md:text-base
              leading-relaxed
            "
          >
            Have a project, opportunity, or just want
            to talk tech? My inbox is always open.
          </p>

        </div>

            {/* CONTACT GRID */}

        <div
          className="
            grid
            lg:grid-cols-5
            gap-6
          "
        >

              {/* TERMINAL */}

          <div
            className="
              lg:col-span-3
              rounded-3xl
              overflow-hidden
              bg-[#08080b]
              border
              border-gray-800
              shadow-2xl
              shadow-gray-300/40
              font-mono
              hover:shadow-violet-200/40
              transition-shadow
              duration-500
            "
          >

            {/* Terminal Header */}

            <div
              className="
                flex
                items-center
                justify-between
                px-5
                py-4
                border-b
                border-white/10
              "
            >

              <div className="flex gap-2">

                <span
                  className="
                    w-3
                    h-3
                    rounded-full
                    bg-red-500
                  "
                />

                <span
                  className="
                    w-3
                    h-3
                    rounded-full
                    bg-yellow-400
                  "
                />

                <span
                  className="
                    w-3
                    h-3
                    rounded-full
                    bg-green-500
                  "
                />
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-gray-500
                "
              >
                <Terminal size={13} />
                contact.sh
              </div>

            </div>
            
            {/* Terminal Content */}

            <div
              className="
                p-6
                md:p-9
              "
            >

              <div>
                <p className="text-gray-500 text-xs md:text-sm">
                  <span className="text-green-400">
                    balaji@portfolio
                  </span>
                  :~$ whoami
                </p>


                <div className="mt-5">

                  <h3
                    className="
                      text-2xl
                      md:text-3xl
                      font-bold
                      text-white
                    "
                  >
                    Balaji Laygude
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-gray-500
                    "
                  >
                    Full Stack MERN Developer
                  </p>

                </div>

              </div>

              <div
                className="
                  my-8
                  h-px
                  bg-white/10
                "
              />


              {/* Connect */}

              <p className="text-gray-500 text-xs md:text-sm">
                <span className="text-green-400">
                  balaji@portfolio
                </span>
                :~$ connect
              </p>

              {/* Contact Links */}
              <div className="mt-6 space-y-3">

                <a
                  href="mailto:balajiwork05@gmail.com"
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    p-3
                    rounded-xl
                    border
                    border-transparent
                    hover:border-white/10
                    hover:bg-white/0.4
                    transition-all
                    duration-300
                  "
                >

                  <div
                    className="
                      w-9
                      h-9
                      shrink-0
                      rounded-lg
                      bg-red-500/10
                      text-red-400
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Mail size={17} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-widest
                        text-gray-600
                      "
                    >
                      Email
                    </p>
                    <p
                      className="
                        text-sm
                        text-gray-300
                        truncate
                        group-hover:text-white
                        transition
                      "
                    >
                      balajiwork05@gmail.com
                    </p>

                  </div>


                  <ArrowUpRight
                    size={16}
                    className="
                      ml-auto
                      shrink-0
                      text-gray-600
                      group-hover:text-white
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-all
                    "
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/balajilaygude"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    p-3
                    rounded-xl
                    border
                    border-transparent
                    hover:border-white/10
                    hover:bg-white/0.4
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      w-9
                      h-9
                      shrink-0
                      rounded-lg
                      bg-blue-500/10
                      text-blue-400
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Linkedin size={17} />
                  </div>
                  <div>
                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-widest
                        text-gray-600
                      "
                    >
                      LinkedIn
                    </p>

                    <p
                      className="
                        text-sm
                        text-gray-300
                        group-hover:text-white
                        transition
                      "
                    >
                      /balajilaygude
                    </p>

                  </div>


                  <ArrowUpRight
                    size={16}
                    className="
                      ml-auto
                      text-gray-600
                      group-hover:text-white
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-all
                    "
                  />

                </a>

                <a
                  href="https://github.com/balajilaygude"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    p-3
                    rounded-xl
                    border
                    border-transparent
                    hover:border-white/10
                    hover:bg-white/0.4
                    transition-all
                    duration-300
                  "
                >

                  <div
                    className="
                      w-9
                      h-9
                      shrink-0
                      rounded-lg
                      bg-purple-500/10
                      text-purple-400
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Github size={17} />
                  </div>
                  <div>
                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-widest
                        text-gray-600
                      "
                    >
                      GitHub
                    </p>

                    <p
                      className="
                        text-sm
                        text-gray-300
                        group-hover:text-white
                        transition
                      "
                    >
                      /balajilaygude
                    </p>

                  </div>
                  <ArrowUpRight
                    size={16}
                    className="
                      ml-auto
                      text-gray-600
                      group-hover:text-white
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-all
                    "
                  />
                </a>

              </div>

              {/* Bottom Terminal */}
              <div
                className="
                  mt-8
                  flex
                  items-center
                  text-xs
                  text-gray-500
                "
              >
                <span>
                  <span className="text-green-400">
                    balaji@portfolio
                  </span>
                  :~$
                </span>
                <span
                  className="
                    ml-2
                    w-2
                    h-4
                    bg-green-400
                    animate-pulse
                  "
                />
              </div>

            </div>

          </div>

              {/* RIGHT CARD */}

          <div
            className="
              lg:col-span-2
              relative
              overflow-hidden
              rounded-3xl
              bg-linear-to-br
              from-violet-600
              via-purple-600
              to-cyan-500
              p-7
              md:p-9
              text-white
              shadow-xl
              shadow-violet-200/40
              flex
              flex-col
              justify-between
            "
          >

            <div className="relative z-10">

              {/* Status */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3
                  py-1.5
                  rounded-full
                  bg-white/15
                  backdrop-blur-md
                  border
                  border-white/20
                "
              >

                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-green-300
                    animate-pulse
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-mono
                    tracking-wider
                  "
                >
                  AVAILABLE FOR OPPORTUNITIES
                </span>

              </div>
              <h3
                className="
                  mt-8
                  text-3xl
                  md:text-4xl
                  font-black
                  leading-tight
                "
              >
                Let's build
                something
                <span className="block text-cyan-200">
                  awesome.
                </span>
              </h3>


              <p
                className="
                  mt-5
                  text-sm
                  text-white/75
                  leading-relaxed
                  max-w-sm
                "
              >
                I'm always interested in working on
                interesting products, collaborating with
                developers, and learning something new.
              </p>

            </div>


            {/* Location */}

            <div
              className="
                relative
                z-10

                mt-12

                flex
                items-center
                gap-3

                text-sm
                text-white/80
              "
            >

              <MapPin size={18} />

              <span>
                Pune, Maharashtra, India
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}