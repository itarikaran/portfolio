import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import SectionHeading from "./SectionHeading";

function Profiles() {
  const profiles = [
    { icon: FaGithub, label: "GitHub", url: "https://github.com/itarikaran" },
    { icon: FaLinkedin, label: "LinkedIn", url: "https://linkedin.com/in/itarikaran" },
    { icon: SiLeetcode, label: "LeetCode", url: "https://leetcode.com/u/itarikaran" },
    { icon: FaHackerrank, label: "HackerRank", url: "https://hackerrank.com/profile/itarikaran" },
  ];

  return (
    <section id="profiles" className="py-24 lg:py-28" role="region" aria-labelledby="profiles-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Profiles"
          title="Where I build, practice, and ship."
          description="A quick set of links to the platforms I use for development, practice, and public work."
          id="profiles-heading"
        />

        <nav className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6" aria-label="Coding profiles">
          {profiles.map(({ icon: Icon, label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label={`Visit my ${label} profile (opens in new window)`}
              title={label}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/8 bg-black/35 text-2xl text-white transition group-hover:border-red-500/30">
                <Icon aria-hidden="true" />
              </div>
              <span className="text-white font-semibold">{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default Profiles;