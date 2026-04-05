import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const email = "arikaran4044@gmail.com";
  const phone = "+919940444012";

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-black text-white overflow-hidden"
    >
      {/* Subtle top glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-600/20 via-transparent to-transparent blur-2xl"></div>

      {/* Title */}
      <motion.h2
        className="text-3xl font-bold text-center mb-14 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact
      </motion.h2>

      {/* Container */}
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 
                   bg-white/5 backdrop-blur-xl border border-white/10 
                   rounded-2xl p-10 shadow-xl shadow-red-500/10 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">
            Let’s Connect
          </h3>

          <p className="text-gray-400 mb-8">
            I’m open to internships and software development opportunities.
            Feel free to reach out.
          </p>

          {/* Contact Info */}
          <div className="space-y-5">

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 hover:text-red-400 transition"
            >
              <FaEnvelope className="text-red-400" />
              {email}
            </a>

            <a
              href={`tel:${phone}`}
              className="flex items-center gap-3 hover:text-red-400 transition"
            >
              <FaPhone className="text-red-400" />
              {phone}
            </a>

          </div>

          {/* Socials */}
          <div className="flex gap-6 mt-8 text-xl">
            <a
              href="https://github.com/itarikaran"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/itarikaran"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <form
          action={`mailto:${email}`}
          method="POST"
          encType="text/plain"
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-black border border-white/10 focus:border-red-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-black border border-white/10 focus:border-red-500 outline-none"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="p-3 rounded-lg bg-black border border-white/10 focus:border-red-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-red-600 py-3 rounded-lg hover:bg-red-700 transition shadow-lg shadow-red-600/30"
          >
            Send Message
          </button>
        </form>

      </motion.div>
    </section>
  );
}

export default Contact;