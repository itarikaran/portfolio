import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Profiles() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-red-500 mb-10">
          Coding Profiles
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <a
            href="https://github.com/itarikaran"
            target="_blank"
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center"
          >
            <FaGithub className="mx-auto text-4xl mb-4" />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/itarikaran"
            target="_blank"
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center"
          >
            <FaLinkedin className="mx-auto text-4xl mb-4" />
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/itarikaran"
            target="_blank"
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center"
          >
            <SiLeetcode className="mx-auto text-4xl mb-4" />
            LeetCode
          </a>

          <a
            href="https://hackerrank.com/profile/itarikaran"
            target="_blank"
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center"
          >
            <FaHackerrank className="mx-auto text-4xl mb-4" />
            HackerRank
          </a>

        </div>

      </div>

    </section>
  );
}

export default Profiles;