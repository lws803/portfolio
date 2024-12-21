import Link from "next/link";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 md:p-24 max-w-4xl mx-auto">
      {/* Header Section */}
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-2">Wilson Ler</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          San Francisco, CA
        </p>
        <p className="text-xl mt-4">
          Technical Co-founder of Beloga, former Engineering Manager at
          Constructor
        </p>

        {/* Social Links */}
        <div className="flex gap-4 mt-4">
          <Button
            variant="outline"
            asChild
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            <Link href="https://github.com/lws803">
              <IconBrandGithubFilled className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            <Link href="https://linkedin.com/in/wilsonler">
              <IconBrandLinkedinFilled className="mr-2 h-4 w-4" /> LinkedIn
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            <Link href="/resume.pdf" target="_blank">
              Resume
            </Link>
          </Button>
        </div>
      </header>

      {/* Bio Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Building AI-powered tools for knowledge workers. Passionate about
          leveraging technology to solve real-world problems.
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Technical Co-founder</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Beloga • 2023 - Present
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Engineering Manager</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Constructor • 2021 - 2023
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-semibold">
            National University of Singapore
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Bachelor&apos;s in Computer Science
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid gap-6">
          <div>
            <h3 className="text-xl font-semibold">Beloga</h3>
            <p className="text-gray-600 dark:text-gray-400">
              AI-powered tools for knowledge workers
            </p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">What am I working on?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Currently building AI-powered tools at Beloga to enhance
              productivity for knowledge workers.
            </p>
          </div>
          {/* Add more FAQ items as needed */}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <Button asChild>
          <Link href="mailto:wilson@beloga.io">Contact Me</Link>
        </Button>
      </section>
    </main>
  );
}
