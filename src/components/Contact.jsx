import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-red-500 mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Left */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-6">
              Let's Connect
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-red-500 text-xl" />
                <span>arikaran4044@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-red-500 text-xl" />
                <span>9940444012</span>
              </div>

            </div>

            <div className="flex gap-6 mt-8 text-2xl">

              <a
                href="https://github.com/itarikaran"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-red-500 transition" />
              </a>

              <a
                href="https://linkedin.com/in/itarikaran"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="hover:text-red-500 transition" />
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-red-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-red-500"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-red-500"
              />

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;