import Link from "next/link";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconFileDownload,
  IconExternalLink,
  IconChevronDown,
} from "@tabler/icons-react";
import Image from "next/image";
import { YouTubeEmbed } from "@next/third-parties/google";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// TODO: Also the AR VR project stuff

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 md:p-24 max-w-4xl mx-auto">
      {/* Header Section */}
      <header className="mb-16">
        <div className="flex flex-col">
          <div className="flex items-start gap-6 mb-4">
            <Image
              src="/square.png"
              alt="Wilson Ler"
              width={124}
              height={124}
              className="rounded-lg w-24 h-24 md:w-[124px] md:h-[124px]"
              priority
            />
            <div>
              <h1 className="text-4xl font-bold mb-2">Wilson Ler</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Toronto, Ontario
              </p>
              <p className="text-xl mt-4 hidden sm:block">
                Technical Co-founder at Beloga, former Engineering Manager at
                Constructor
              </p>
            </div>
          </div>
          <p className="text-xl mt-4 sm:hidden">
            Technical Co-founder at Beloga,
            <br />
            former Engineering Manager at Constructor
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button
            variant="outline"
            asChild
            className="w-full sm:w-auto justify-center"
          >
            <Link href="https://github.com/lws803" target="_blank">
              <IconBrandGithubFilled className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="w-full sm:w-auto justify-center"
          >
            <Link href="https://linkedin.com/in/wilsonler" target="_blank">
              <IconBrandLinkedinFilled className="mr-2 h-4 w-4" /> LinkedIn
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="w-full sm:w-auto justify-center"
          >
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
          Technical Co-founder of Beloga and On-Deck Fellow (ODF23), building a
          thinking and functioning AI second brain for knowledge-intensive
          tasks. Experienced in natural language processing (NLP),
          retrieval-augmented generation (RAG), and full-stack development.
          Former Engineering Manager at Constructor with a track record of
          leading successful teams and delivering impactful projects.
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
              Beloga • February 2024 - Present • Toronto, Ontario (On-site)
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
              Constructor • August 2021 - February 2024 • San Francisco,
              California (Remote)
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
              Constructor • August 2019 - August 2021 • San Francisco,
              California (On-site)
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

      {/* Competitions */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-[#3859FF]">Competitions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">RobotX Maritime Challenge</h3>
            <p className="text-gray-600 dark:text-gray-400">
              1st Place • December 2018 • Hawaii, USA
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400">
              <li>
                International autonomous maritime robotics competition by
                Robonation
              </li>
              <li>
                Led the software team in developing autonomous navigation and
                perception systems
              </li>
              <li>
                Designed and built Autonomous Surface Systems to navigate
                through complex tasks
              </li>
              <li>
                Competed against teams from around the world in real-world
                maritime scenarios
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">RoboSub Competition</h3>
            <p className="text-gray-600 dark:text-gray-400">
              2nd Place • July 2018 • San Diego, USA
            </p>
            <div className="mt-4 max-w-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Watch our autonomous submarine pick up golf balls underwater in
                a small bin using computer vision and precise controls.
              </p>
              <div className="relative mb-6">
                <YouTubeEmbed videoid="8sUCNCQCBGI" />
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>
                International underwater robotics competition by Robonation
              </li>
              <li>
                Developed computer vision and control systems for underwater
                navigation
              </li>
              <li>
                Built an Autonomous Underwater Vehicle (AUV) capable of
                completing complex tasks
              </li>
              <li>
                Successfully navigated through underwater challenges mimicking
                real research scenarios
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-[#3859FF]">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                <Link
                  href="https://summarize.beloga.xyz"
                  target="_blank"
                  className="hover:text-gray-600 dark:hover:text-gray-400 inline-flex items-center"
                >
                  Agentic Summarizer
                  <IconExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                December 2024
              </p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  Built an agentic document summarizer powered by Beloga&apos;s
                  core technology
                </li>
                <li>
                  Implemented comprehensive summarization that ensures no
                  important details are missed
                </li>
                <li>
                  Designed for knowledge workers to quickly digest and
                  understand complex documents
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                <Link
                  href="https://github.com/lws803/gigachadgpt"
                  target="_blank"
                  className="hover:text-gray-600 dark:hover:text-gray-400 inline-flex items-center"
                >
                  GigaChadGPT
                  <IconBrandGithubFilled className="ml-2 h-4 w-4" />
                </Link>
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                December 2023
              </p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  Developed a ChatGPT-based persona through prompt engineering
                </li>
                <li>
                  Created an engaging conversational AI for fitness and
                  lifestyle advice
                </li>
                <li>Achieved 50+ DAUs on the platform</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                <Link
                  href="https://github.com/lws803/next-use-warmroutes"
                  target="_blank"
                  className="hover:text-gray-600 dark:hover:text-gray-400 inline-flex items-center"
                >
                  next-use-warmroutes
                  <IconBrandGithubFilled className="ml-2 h-4 w-4" />
                </Link>
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                May 2023
              </p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  Built a Next.js hook to control serverless/SSR route warm-up
                  timing
                </li>
                <li>
                  Helps developers prevent cold starts by pre-warming routes
                  based on user navigation patterns
                </li>
                <li>Published as an npm package with 6 stars on GitHub</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                <Link
                  href="https://github.com/lws803/soul"
                  target="_blank"
                  className="hover:text-gray-600 dark:hover:text-gray-400 inline-flex items-center"
                >
                  Soul
                  <IconBrandGithubFilled className="ml-2 h-4 w-4" />
                </Link>
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                January 2023
              </p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                <Link
                  href="https://github.com/lws803/Crime-detect"
                  target="_blank"
                  className="hover:text-gray-600 dark:hover:text-gray-400 inline-flex items-center"
                >
                  Crime Detect
                  <IconBrandGithubFilled className="ml-2 h-4 w-4" />
                </Link>
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                January 2019
              </p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                <Link
                  href="https://github.com/lws803/BLE-jammer"
                  target="_blank"
                  className="hover:text-gray-600 dark:hover:text-gray-400 inline-flex items-center"
                >
                  BLE Jammer
                  <IconBrandGithubFilled className="ml-2 h-4 w-4" />
                </Link>
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                December 2022
              </p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  Built a BLE jammer using NRF240L+ modules and Maple Mini
                  (STM32)
                </li>
                <li>Achieved 170 stars on GitHub</li>
                <li>Was able to jam up to 100m of BLE communications</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                <Link
                  href="https://github.com/lws803/cs4240-grp8"
                  target="_blank"
                  className="hover:text-gray-600 dark:hover:text-gray-400 inline-flex items-center"
                >
                  SPAR - AR Physics Lab
                  <IconBrandGithubFilled className="ml-2 h-4 w-4" />
                </Link>
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">2021</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  Built an AR mobile app for visualizing light physics
                  experiments
                </li>
                <li>
                  Implemented realistic light physics simulations and
                  object-tracking
                </li>
                <li>
                  Developed using Unity and C# to create interactive virtual lab
                  experiences
                </li>
              </ul>
            </CardContent>
          </Card>
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

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-[#3859FF]">Testimonials</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Julio Olivera
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Staff Engineer at Constructor • March 2024
              </p>
            </CardHeader>
            <CardContent>
              <Collapsible>
                <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                  <p>
                    Where to begin! I have had the pleasure of working with
                    Wilson for years. After so much time it&apos;s hard to
                    narrow down a recommendation, but I think it all comes from
                    Wilson&apos;s focus on building useful things and delivering
                    value.
                  </p>
                  <p>
                    One way this manifests is on Wilson&apos;s focus on
                    understanding user needs and the overall business / market
                    context in order to prioritize and propose solutions.
                  </p>
                  <CollapsibleContent>
                    <p>
                      Another very important way this also shows up is on
                      Wilson&apos;s flexibility when it comes to technical
                      areas. I&apos;ve seen him work on core backend services,
                      new APIs, complex UIs and anything in between. His focus
                      is always on building great solutions that deliver value,
                      regardless of where in the technology stack that might be.
                      This is not easy at all.
                    </p>
                    <p>
                      I consider myself fortunate to have worked with Wilson
                      these past few years and certainly look forward to cross
                      paths again!
                    </p>
                  </CollapsibleContent>
                </div>
                <CollapsibleTrigger className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mt-2">
                  <span>See more</span>
                  <IconChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
              </Collapsible>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Eli Finkelshteyn
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Founder and CEO at Constructor • February 2024
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Wilson was a talented engineer at Constructor and was
                consistently a high performer within the organization. I highly
                valued his contributions. I&apos;m confident he&apos;ll be
                successful in his future roles.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-[#3859FF]">Get in Touch</h2>
        <div className="space-y-4">
          <Button asChild>
            <Link href="mailto:lws803@gmail.com">Contact Me</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
