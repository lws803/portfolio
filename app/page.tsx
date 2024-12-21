import Link from "next/link";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconFileDownload,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

// TODO: Maybe add more stuff that makes me look ambitious, e.g. a YouTube embed of me
// landing a submarine to pick up balls
// TODO: Also the AR VR project stuff
// TODO: Include an FAQ section

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 md:p-24 max-w-4xl mx-auto">
      {/* Header Section */}
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-2">Wilson Ler</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          San Francisco, California, United States
        </p>
        <p className="text-xl mt-4">
          Technical Co-founder at Beloga, former Engineering Manager at
          Constructor
        </p>

        {/* Social Links */}
        <div className="flex gap-4 mt-4">
          <Button variant="outline" asChild>
            <Link href="https://github.com/lws803" target="_blank">
              <IconBrandGithubFilled className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://linkedin.com/in/wilsonler" target="_blank">
              <IconBrandLinkedinFilled className="mr-2 h-4 w-4" /> LinkedIn
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/resume.pdf" target="_blank">
              <IconFileDownload className="mr-2 h-4 w-4" /> Resume
            </Link>
          </Button>
        </div>
      </header>

      {/* Bio Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-[#3859FF]">About</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Technical Co-founder of Beloga, building a thinking and functioning AI
          second brain for knowledge-intensive tasks. Experienced in natural
          language processing (NLP), retrieval-augmented generation (RAG), and
          full-stack development. Former Engineering Manager at Constructor with
          a track record of leading successful teams and delivering impactful
          projects.
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-[#3859FF]">
          Work Experience
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold">Technical Co-founder</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Beloga • February 2024 - Present
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                Built an MVP in 6 months and launched 2nd Product of the day on
                Product Hunt
              </li>
              <li>
                Lead product development and technical architecture from 0 to 1
              </li>
              <li>Scaled revenue from $0 - $3K MRR and 400 MAUs</li>
              <li>
                Built the platform using multi-source RAG with personalization
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Engineering Manager</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Constructor • August 2021 - February 2024
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                Founded and led a team of full-stack engineers to build a quiz
                platform for e-commerce guided experiences
              </li>
              <li>
                Streamlined hiring pipeline with new processes and buddy system,
                reducing onboarding time by 30%
              </li>
              <li>
                Led development of customer merchandizing tools that increased
                clickthrough rates
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Software Engineer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Constructor • August 2019 - August 2021
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                Scaled Constructor from a valuation of $50M to $550M as an early
                engineer
              </li>
              <li>
                Developed configuration interfaces for customer catalog data
              </li>
              <li>
                Implemented dynamic synonyms and multilingual search detection
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-[#3859FF]">Education</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Stanford University</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Visiting Student • 2019
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400">
              <li>Completed CS229 Machine Learning course</li>
              <li>
                Part of NUS Overseas Colleges Silicon Valley program (Batch 36)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              National University of Singapore
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Bachelor of Engineering in Computer Engineering • 2017 - 2021
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400">
              <li>Honors Graduate</li>
              <li>Minor in NUS Overseas Colleges (Entrepreneurship)</li>
              <li>
                Focus areas: Information Retrieval, Natural Language Processing
                (NLP)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-[#3859FF]">Projects</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">
              <Link
                href="https://github.com/lws803/gigachadgpt"
                target="_blank"
                className="hover:text-gray-600 dark:hover:text-gray-400 inline-flex items-center"
              >
                GigaChadGPT
                <IconBrandGithubFilled className="ml-2 h-4 w-4" />
              </Link>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              December 2023
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                Developed a ChatGPT-based persona through prompt engineering
              </li>
              <li>
                Created an engaging conversational AI for fitness and lifestyle
                advice
              </li>
              <li>Achieved 50+ DAUs on the platform</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              <Link
                href="https://github.com/lws803/next-use-warmroutes"
                target="_blank"
                className="hover:text-gray-600 dark:hover:text-gray-400 inline-flex items-center"
              >
                next-use-warmroutes
                <IconBrandGithubFilled className="ml-2 h-4 w-4" />
              </Link>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">May 2023</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                Built a Next.js hook to control serverless/SSR route warm-up
                timing
              </li>
              <li>
                Helps developers prevent cold starts by pre-warming routes based
                on user navigation patterns
              </li>
              <li>Published as an npm package with 6 stars on GitHub</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              <Link
                href="https://github.com/lws803/soul"
                target="_blank"
                className="hover:text-gray-600 dark:hover:text-gray-400 inline-flex items-center"
              >
                Soul
                <IconBrandGithubFilled className="ml-2 h-4 w-4" />
              </Link>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              January 2023
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                Built a social media authentication and relationships service
                using NestJS and MySQL
              </li>
              <li>
                Implemented user connections and reputation system with full
                test coverage
              </li>
              <li>Achieved 17 stars on GitHub</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              <Link
                href="https://github.com/lws803/Crime-detect"
                target="_blank"
                className="hover:text-gray-600 dark:hover:text-gray-400 inline-flex items-center"
              >
                Crime-detect
                <IconBrandGithubFilled className="ml-2 h-4 w-4" />
              </Link>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              January 2019
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                Built a real-time surveillance system to detect weapons and
                aggressive behavior using computer vision
              </li>
              <li>
                Implemented weapon detection using ML and motion analysis with
                Optical Flow
              </li>
              <li>
                Achieved 18 stars and 10 forks on GitHub, developed during
                HackAndRoll2019
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              <Link
                href="https://github.com/lws803/BLE-jammer"
                target="_blank"
                className="hover:text-gray-600 dark:hover:text-gray-400 inline-flex items-center"
              >
                Bluetooth Low Energy Jammer
                <IconBrandGithubFilled className="ml-2 h-4 w-4" />
              </Link>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              December 2022
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                Built a BLE jammer using NRF240L+ modules and Maple Mini (STM32)
              </li>
              <li>Achieved 170 stars on GitHub</li>
              <li>Was able to jam up to 100m of BLE communications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-[#3859FF]">Skills</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Technologies</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Large Language Models (LLM), Retrieval-Augmented Generation (RAG),
              React.js, NestJS, JavaScript, Information Retrieval
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Soft Skills</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Leadership, Hiring, Project Management, Building an Engineering
              Culture
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-[#3859FF]">Get in Touch</h2>
        <div className="space-y-4">
          <Button asChild>
            <Link href="mailto:lws803@gmail.com">Contact Me</Link>
          </Button>
          <p className="text-gray-600 dark:text-gray-400">
            Phone: (226) 280-2518
          </p>
        </div>
      </section>
    </main>
  );
}
