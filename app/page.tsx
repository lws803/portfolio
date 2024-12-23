import Link from "next/link";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconFileDownload,
  IconExternalLink,
  IconChevronDown,
  IconBrandX,
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 md:p-24 max-w-4xl mx-auto">
      {/* Header Section */}
      <header className="mb-16">
        <div className="flex flex-col">
          <div className="flex items-start gap-6 mb-4">
            <Image
              src="/images/square.png"
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
        <div className="flex flex-wrap gap-4 mt-4">
          <Button
            variant="outline"
            asChild
            className="sm:w-auto justify-center"
          >
            <Link href="https://github.com/lws803" target="_blank">
              <IconBrandGithubFilled className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="sm:w-auto justify-center"
          >
            <Link href="https://linkedin.com/in/wilsonler" target="_blank">
              <IconBrandLinkedinFilled className="mr-2 h-4 w-4" /> LinkedIn
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="sm:w-auto justify-center"
          >
            <Link href="https://x.com/LerWilson" target="_blank">
              <IconBrandX className="mr-2 h-4 w-4" /> Twitter
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="sm:w-auto justify-center"
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
            <div className="flex items-start gap-4">
              <Link href="https://www.beloga.xyz/" target="_blank">
                <Image
                  src="/images/beloga-logo.png"
                  alt="Beloga Logo"
                  width={48}
                  height={48}
                  className="rounded-lg object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Technical Co-founder</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <Link
                    href="https://www.beloga.xyz/"
                    target="_blank"
                    className="hover:text-[#3859FF] transition-colors"
                  >
                    Beloga
                  </Link>{" "}
                  • February 2024 - Present • San Francisco Bay Area
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    Launched 2nd Product of the Day on Product Hunt with 6-month
                    MVP.
                  </li>
                  <li>
                    Scaled to $3K MRR and 400 MAUs with 3hr daily user
                    engagement.
                  </li>
                  <li>Built multi-source RAG platform with personalization.</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-4">
              <Link href="https://www.breakthelove.com/" target="_blank">
                <Image
                  src="/images/break-the-love-logo.png"
                  alt="Break the Love Logo"
                  width={48}
                  height={48}
                  className="rounded-lg object-contain border border-black dark:border-white hover:opacity-80 transition-opacity"
                />
              </Link>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Technical Consultant</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <Link
                    href="https://www.breakthelove.com/"
                    target="_blank"
                    className="hover:text-[#3859FF] transition-colors"
                  >
                    Break Sports
                  </Link>{" "}
                  • June 2024 - August 2024 • New York (Remote)
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Restructured engineering team and hired 4 engineers.</li>
                  <li>
                    Reduced technical debt by 20% through architectural
                    improvements.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-4">
              <Link
                href="https://constructor.com/"
                target="_blank"
                className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/constructor-logo.jpeg"
                  alt="Constructor Logo"
                  width={48}
                  height={48}
                  className="rounded-lg object-contain"
                />
              </Link>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Engineering Manager</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <Link
                    href="https://constructor.com/"
                    target="_blank"
                    className="hover:text-[#3859FF] transition-colors"
                  >
                    Constructor
                  </Link>{" "}
                  • August 2021 - February 2024 • Remote
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    Led quiz platform development for e-commerce experiences.
                  </li>
                  <li>
                    Reduced onboarding time by 30% with improved hiring
                    processes.
                  </li>
                  <li>
                    Achieved 80% error coverage with Sentry auto-assignment
                    system.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-4">
              <Link
                href="https://constructor.com/"
                target="_blank"
                className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/constructor-logo.jpeg"
                  alt="Constructor Logo"
                  width={48}
                  height={48}
                  className="rounded-lg object-contain"
                />
              </Link>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <Link
                    href="https://constructor.com/"
                    target="_blank"
                    className="hover:text-[#3859FF] transition-colors"
                  >
                    Constructor
                  </Link>{" "}
                  • August 2019 - August 2021 • Remote
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Early engineer scaling valuation from $50M to $550M.</li>
                  <li>Increased API documentation engagement by 50%.</li>
                  <li>
                    Reduced indexing time by 50% through redirect optimization.
                  </li>
                  <li>
                    Implemented multilingual search for French, Dutch, and
                    English.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-[#3859FF]">Education</h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/stanford-logo.png"
                  alt="Stanford Logo"
                  width={48}
                  height={48}
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Stanford University</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Exchange Student • 2019
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400">
                  <li>Completed CS229 Machine Learning course</li>
                  <li>
                    Part of NUS Overseas Colleges Silicon Valley program (Batch
                    36)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/nus-logo.png"
                  alt="NUS Logo"
                  width={48}
                  height={48}
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="flex-1">
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
                    Focus areas: Information Retrieval, Natural Language
                    Processing (NLP)
                  </li>
                </ul>
              </div>
            </div>
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
            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Watch our autonomous submarine pick up golf balls underwater in
                a small bin using computer vision and precise controls.
              </p>
              <div className="relative w-full mb-4 rounded-lg overflow-hidden">
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

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                <Link
                  href="https://cs229.stanford.edu/proj2019aut/data/assignment_308832_raw/26608523.pdf"
                  target="_blank"
                  className="hover:text-gray-600 dark:hover:text-gray-400 inline-flex items-center"
                >
                  CCTV Anomaly Detection
                  <IconExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                2019 • Under Prof. Andrew Ng
              </p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  Implemented and tested CNN models for visual anomaly detection
                </li>
                <li>
                  Achieved over 90% accuracy in detecting golf carts using the
                  UCSD Anomaly Detection Dataset
                </li>
                <li>
                  Developed under Stanford&apos;s machine learning course
                  (CS229)
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
