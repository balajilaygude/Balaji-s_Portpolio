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
        pt-24 pb-10
        bg-white
      "
    >

      <div
        className="
          z-10
          max-w-7xl
          mx-auto
        "
      >

            {/* HEADER */}
        <div className="mb-5">
          <h2
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-black
              tracking-tight
            "
          >
            Let's
              connect.

          </h2>
          <p
            className="
              mt-2
              max-w-xl
              text-black
              text-sm
              md:text-base
              leading-relaxed
            "
          >
            Have a project, opportunity, or just want
            to talk tech? My inbox is always open.
          </p>

        </div>

        <div
          className="
          "
        >

              {/* TERMINAL */}

          <div
            className="
              lg:col-span-3
              rounded-3xl
              overflow-hidden
              bg-[#08080b]
              font-mono
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                px-5
                py-4
                border-b
                border-white
              "
            >

              <div className="flex gap-2">

                <span
                  className="
                    w-3
                    h-3
                    rounded-full
                    bg-white
                  "
                />

                <span
                  className="
                    w-3
                    h-3
                    rounded-full
                    bg-white
                  "
                />

                <span
                  className="
                    w-3
                    h-3
                    rounded-full
                    bg-white
                  "
                />
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-white
                "
              >
                <Terminal size={13} />
                contact.sh
              </div>

            </div>

            <div
              className="
                p-6
                md:p-9
              "
            >

              <div>
                <p className="text-white text-xs md:text-sm">
                    balaji@portfolio
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
                      text-white/80
                    "
                  >
                    Full Stack MERN Developer
                  </p>

                </div>

              </div>

              <div
                className="
                  my-6 
                  h-px
                  bg-white
                "
              />


              {/* Connect */}

              <p className="text-white text-xs md:text-sm">
                  balaji@portfolio
                :~$ connect
              </p>

              {/* Contact Links */}
              <div className="mt-6 space-y-3">

                <a
                  href="mailto:balajiwork05@gmail.com"
                  className="
                    flex
                    items-center
                    gap-4
                    p-3
                    rounded-xl
                  "
                >

                  <div
                    className="
                      w-9
                      h-9
                      rounded-lg
                      bg-white
                      text-black
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
                        text-white
                      "
                    >
                      Email
                    </p>
                    <p
                      className="
                        text-sm
                        text-white

                      "
                    >
                      balajiwork05@gmail.com
                    </p>

                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/balajilaygude"
                  target="_blank"
                  className="
                    flex
                    items-center
                    gap-4
                    p-3
                    rounded-xl
                  "
                >
                  <div
                    className="
                      w-9
                      h-9
                      rounded-lg
                      bg-white
                      text-black
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
                        text-white
                      "
                    >
                      LinkedIn
                    </p>

                    <p
                      className="
                        text-sm
                        text-white
                        
                      "
                    >
                      /balajilaygude
                    </p>

                  </div>

                </a>

                <a
                  href="https://github.com/balajilaygude"
                  target="_blank"
                  className="
                    flex
                    items-center
                    gap-4
                    p-3
                    rounded-xl
                  "
                >

                  <div
                    className="
                      w-9
                      h-9
                      rounded-lg
                      bg-white
                      text-black
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
                        text-white
                      "
                    >
                      GitHub
                    </p>

                    <p
                      className="
                        text-sm
                        text-white
                      "
                    >
                      /balajilaygude
                    </p>

                  </div>
                </a>

              </div>
              <div
                className="
                  mt-6
                  flex
                  items-center
                  text-xs
                  text-white
                "
              >
                    balaji@portfolio
                  :~$
                <span
                  className="
                    ml-2
                    w-2
                    h-4
                    bg-white
                    animate-pulse
                  "
                />
              </div>

            </div>

          </div>



        </div>

      </div>

    </section>
  );
}