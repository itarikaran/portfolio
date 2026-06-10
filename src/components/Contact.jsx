import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";

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
    <section id="contact" className="py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something sharp and useful."
          description="If you want to talk about an internship, collaboration, or a project idea, reach out here."
          id="contact-heading"
        />

        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8">
          {/* Contact Information */}
          <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 backdrop-blur-xl shadow-2xl shadow-black/10">
            <p className="text-xs uppercase tracking-[0.35em] text-red-400 font-semibold">Reach out</p>

            <h3 className="mt-4 text-2xl font-semibold text-white">
              Let's Connect
            </h3>

            <div className="space-y-4 mt-8">
              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/8 bg-black/30 px-4 py-4">
                <FaEnvelope className="text-red-400 text-xl flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:arikaran4044@gmail.com"
                  className="text-zinc-200 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1"
                  aria-label="Send email to arikaran4044@gmail.com"
                >
                  arikaran4044@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/8 bg-black/30 px-4 py-4">
                <FaPhone className="text-red-400 text-xl flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+919940444012"
                  className="text-zinc-200 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1"
                  aria-label="Call me at +91 9940444012"
                >
                  +91 9940444012
                </a>
              </div>
            </div>

            {/* Social Links */}
            <nav className="flex gap-4 mt-8 text-2xl" aria-label="Social media links">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/8 bg-black/35 text-white transition hover:-translate-y-0.5 hover:border-red-500/30 focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label={`Visit my ${label} profile`}
                  title={label}
                >
                  <Icon aria-hidden="true" className="text-lg" />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Form */}
          <div className="rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-8 backdrop-blur-xl shadow-2xl shadow-black/10">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {submitted && (
                <div className="rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-green-300" role="alert">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-zinc-300">
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
                  className="w-full rounded-2xl border border-white/8 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-zinc-300">
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
                  className="w-full rounded-2xl border border-white/8 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-zinc-300">
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
                  className="w-full rounded-2xl border border-white/8 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:ring-2 focus:ring-red-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
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