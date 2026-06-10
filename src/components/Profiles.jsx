import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Profiles() {
  const profiles = [
    { icon: FaGithub, label: "GitHub", url: "https://github.com/itarikaran" },
    { icon: FaLinkedin, label: "LinkedIn", url: "https://linkedin.com/in/itarikaran" },
    { icon: SiLeetcode, label: "LeetCode", url: "https://leetcode.com/u/itarikaran" },
    { icon: FaHackerrank, label: "HackerRank", url: "https://hackerrank.com/profile/itarikaran" },
  ];

  return (
    <section id="profiles" className="py-24" role="region" aria-labelledby="profiles-heading">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="profiles-heading" className="text-4xl font-bold text-red-500 mb-10">
          Coding Profiles
        </h2>

        <nav className="grid md:grid-cols-4 gap-6" aria-label="Coding profiles">
          {profiles.map(({ icon: Icon, label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center hover:border-red-500 transition focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label={`Visit my ${label} profile (opens in new window)`}
              title={label}
            >
              <Icon className="mx-auto text-4xl mb-4" aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default Profiles;