import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in all fields");
      return;
    }
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/itarikaran", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/itarikaran", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-red-500 mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Let's Connect
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-red-500 text-xl flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:arikaran4044@gmail.com"
                  className="hover:text-red-500 transition focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1"
                  aria-label="Send email to arikaran4044@gmail.com"
                >
                  arikaran4044@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <FaPhone className="text-red-500 text-xl flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+919940444012"
                  className="hover:text-red-500 transition focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1"
                  aria-label="Call me at +91 9940444012"
                >
                  +91 9940444012
                </a>
              </div>
            </div>

            {/* Social Links */}
            <nav className="flex gap-6 mt-8 text-2xl" aria-label="Social media links">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-red-500 transition focus:outline-none focus:ring-2 focus:ring-red-500 rounded p-1"
                  aria-label={`Visit my ${label} profile`}
                  title={label}
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {submitted && (
                <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg" role="alert">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 sr-only">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  aria-required="true"
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 sr-only">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  aria-required="true"
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Message"
                  required
                  aria-required="true"
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Send message"
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