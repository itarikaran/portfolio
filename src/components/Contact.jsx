import { useState } from 'react';
import { FiGithub, FiGlobe, FiLinkedin, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection.jsx';
import SectionHeading from './SectionHeading.jsx';
import { contactInfo } from '../data/portfolio.js';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`,
    );

    window.location.href = `mailto:arikaran4044@gmail.com?subject=${subject}&body=${body}`;
    setStatusMessage('Your email app is opening. If it does not, use the direct contact details above.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <AnimatedSection id="contact" alternate className="border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Contact"
          description="Direct contact details and a polished no-backend form for quick outreach."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactInfo.map((item) => {
              const iconMap = {
                Phone: FiPhone,
                Email: FiMail,
                Location: FiMapPin,
                Portfolio: FiGlobe,
                LinkedIn: FiLinkedin,
                GitHub: FiGithub,
              };
              const Icon = iconMap[item.label] ?? FiMail;

              const content = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="text-xl" />
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-base font-semibold text-slate-950">{item.value}</p>
                </>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Email' || item.label === 'Phone' ? undefined : '_blank'}
                  rel={item.label === 'Email' || item.label === 'Phone' ? undefined : 'noreferrer'}
                  className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(15,23,42,0.1)] backdrop-blur-xl"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                  {content}
                </div>
              );
            })}
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Send a message</p>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Message</span>
                <textarea
                  name="message"
                  rows="6"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  placeholder="Tell me about your project or opportunity"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1"
              >
                Submit
              </button>

              {statusMessage ? <p className="text-sm text-slate-500">{statusMessage}</p> : null}
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}