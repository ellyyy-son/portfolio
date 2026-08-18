"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import "./globals.css";

import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import Skills from "../components/Skills";
import TimelineChart from "../components/Timeline";
import Footer from "@/components/Footer";
import Form from "@/components/Form";

import { IoSchoolOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { FaRegIdCard } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { GrSend } from "react-icons/gr";
import { HiArrowUpRight } from "react-icons/hi2";


/* =========================
   Reusable Components
========================= */

function SectionHeading({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-row items-center justify-center gap-4">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00FFFF]/30 bg-[#00FFFF]/10">
        {icon}
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
        {label}
      </h2>

    </div>
  );
}


function PrimaryButton({
  href,
  onClick,
  icon,
  children,
  external = false,
}: {
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  children: ReactNode;
  external?: boolean;
}) {

  const classes =
    "group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#00FFFF]/60 hover:bg-[#00FFFF]/10 hover:shadow-[0_0_30px_-8px_#00FFFF] lg:text-base";

  const content = (
    <>
      {icon}

      <span>{children}</span>

      <HiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  );
}


function ProjectCard({
  title,
  badges,
  description,
  githubHref,
  visitHref,
  onVisit,
}: {
  title: string;
  badges: string[];
  description: string;
  githubHref: string;
  visitHref?: string;
  onVisit?: () => void;
}) {

  return (
    <article className="group relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#00FFFF]/40 lg:p-8">

      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,255,0.08),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <h3 className="relative mb-4 text-xl font-bold tracking-tight text-[#00FFFF]">
        {title}
      </h3>

      <div className="relative mb-6 flex flex-row flex-wrap items-center justify-center gap-2">

        {badges.map((src, i) => (
          <img
            key={i}
            className="h-5 rounded lg:h-6"
            src={src}
            alt=""
          />
        ))}

      </div>

      <p className="relative text-sm leading-relaxed text-white/70">
        {description}
      </p>

      <div className="relative mt-8 flex flex-col items-center justify-center gap-4 lg:flex-row">

        <a
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#00FFFF]/60 hover:bg-[#00FFFF]/10"
        >
          <SiGithub
            size={18}
            className="text-[#00FFFF]"
          />

          GitHub
        </a>


        {onVisit ? (

          <button
            type="button"
            onClick={onVisit}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#00FFFF]/60 hover:bg-[#00FFFF]/10"
          >
            <GrSend
              size={16}
              className="text-[#00FFFF]"
            />

            Visit
          </button>

        ) : (

          <a
            href={visitHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#00FFFF]/60 hover:bg-[#00FFFF]/10"
          >
            <GrSend
              size={16}
              className="text-[#00FFFF]"
            />

            Visit
          </a>

        )}

      </div>

    </article>
  );
}


/* =========================
   Main Page
========================= */

export default function Home() {

  const [experienceType, setExperienceType] =
    useState<string>("professional");

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-x-hidden bg-black">


      {/* =========================
          AMBIENT BACKGROUND
      ========================= */}

      <div className="pointer-events-none fixed inset-0 z-0">

        <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-[#00FFFF]/10 blur-[140px]" />

        <div className="absolute right-[-10rem] top-1/3 h-[24rem] w-[24rem] rounded-full bg-[#00FFFF]/5 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_20%,transparent_75%)]" />

      </div>


      {/* =========================
          PAGE CONTENT
      ========================= */}

      <div className="relative z-10 w-full font-sans">


        {/* =========================
            NAVBAR
        ========================= */}

        <Navbar />


        {/* =========================
            MAIN CONTENT
        ========================= */}

        <main className="mx-auto w-[85%] lg:w-[75%]">


          {/* =========================
              HERO
          ========================= */}

          <section
            id="home"
            className="flex min-h-screen scroll-mt-28 flex-col justify-center pt-24 pb-12"
          >

            {/* Hero Main Content */}

            <div className="flex w-full flex-col-reverse items-center justify-center gap-10 py-8 text-white lg:flex-row lg:gap-16 lg:py-12">


              {/* Hero Text */}

              <div className="flex flex-col items-center justify-center lg:items-start">

                <span className="inline-flex items-center gap-2 rounded-full border border-[#00FFFF]/30 bg-[#00FFFF]/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#00FFFF] lg:text-sm">
                  Data &amp; Business Analytics
                </span>


                <h1 className="mt-6 text-center text-4xl font-bold tracking-tight lg:text-left lg:text-6xl">
                  Hello! I am
                </h1>


                <h1 className="mt-2 text-6xl font-bold tracking-tight text-[#00FFFF] lg:text-7xl">
                  Elly
                </h1>


                <h1 className="-mt-2 text-6xl font-bold tracking-tight text-[#00FFFF] lg:-mt-3 lg:text-7xl">
                  Olegario
                </h1>


                <p className="mt-6 max-w-xl text-center text-sm leading-relaxed text-white/70 lg:text-left lg:text-lg">
                  Computer Science student interested in data,
                  analytics, technology, and building data-driven
                  solutions.
                </p>


                <p className="mt-3 text-center text-sm text-white/50 lg:text-left lg:text-base">
                  4th Year BS Computer Science · Ateneo de Manila University
                </p>


                {/* Current Role */}

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/70 lg:text-sm">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#00FFFF]" />

                  Currently:

                  <span className="font-semibold text-white">
                    Supply Chain Intern @ Unilever
                  </span>

                </div>


                {/* Buttons */}

                <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row lg:justify-start">

                  <PrimaryButton
                    onClick={() =>
                      window.open("/resume.pdf", "_blank")
                    }
                  >
                    View CV
                  </PrimaryButton>

                  <Socials />

                </div>

              </div>


              {/* Hero Image */}

              <div className="relative flex-shrink-0">

                <div className="absolute -inset-5 rounded-full bg-[#00FFFF]/20 blur-2xl" />

                <Image
                  className="relative h-60 w-60 rounded-full object-cover ring-2 ring-[#00FFFF]/60 ring-offset-8 ring-offset-black md:h-64 md:w-64 lg:h-72 lg:w-72"
                  src="/pic.jpeg"
                  alt="Elly Olegario"
                  width={288}
                  height={288}
                  priority
                />

              </div>

            </div>


            {/* =========================
                QUICK STATS
                PART OF HERO
            ========================= */}

            <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-10">


              {/* Data Focus */}

              <div className="rounded-2xl border border-white/15 bg-[#111414] p-5 text-center shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00FFFF]/50 hover:bg-[#151919] hover:shadow-[0_0_25px_-12px_#00FFFF]">

                <p className="text-xl font-bold text-[#00FFFF] lg:text-2xl">
                  Analytics &amp; Machine Learning
                </p>

                <p className="mt-2 text-xs text-white/55 lg:text-sm">
                  Focus on Data Science
                </p>

              </div>


              {/* Industry Experience */}

              <div className="rounded-2xl border border-white/15 bg-[#111414] p-5 text-center shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00FFFF]/50 hover:bg-[#151919] hover:shadow-[0_0_25px_-12px_#00FFFF]">

                <p className="text-xl font-bold text-[#00FFFF] lg:text-2xl">
                  FMCG &amp; E-Commerce
                </p>

                <p className="mt-2 text-xs text-white/55 lg:text-sm">
                  Industry Experience
                </p>

              </div>


              {/* Graduation */}

              <div className="rounded-2xl border border-white/15 bg-[#111414] p-5 text-center shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00FFFF]/50 hover:bg-[#151919] hover:shadow-[0_0_25px_-12px_#00FFFF]">

                <p className="text-xl font-bold text-[#00FFFF] lg:text-2xl">
                  May 2027
                </p>

                <p className="mt-2 text-xs text-white/55 lg:text-sm">
                  Expected Graduation
                </p>

              </div>

            </div>

          </section>


          {/* =========================
              MAIN SECTIONS
          ========================= */}

          <div className="mt-20 flex flex-col gap-32">


            {/* =========================
                PROFILE
            ========================= */}

            <section
              id="profile"
              className="flex scroll-mt-28 flex-col items-center gap-12"
            >

              <SectionHeading
                icon={
                  <FaRegIdCard
                    size={22}
                    className="text-[#00f0ff]"
                  />
                }
                label="Profile"
              />


              <div className="max-w-4xl">

                <div className="flex flex-col gap-6 text-center text-sm leading-relaxed text-white/80 lg:text-lg">

                  <p>
                    I’m a 4th Year Computer Science student and an
                    aspiring data and analytics professional with a
                    strong interest in turning data into meaningful
                    insights. I enjoy working on problems involving
                    analysis, pattern recognition, and building
                    data-driven solutions.
                  </p>


                  <p>
                    My interests span data analytics, machine learning,
                    product analytics, and business applications of
                    technology. I enjoy combining technical skills with
                    practical problem-solving to create solutions that
                    are both useful and understandable.
                  </p>

                </div>


                {/* Skills */}

                <div className="mt-14 w-full">

                  <h3 className="mb-8 text-center text-2xl font-bold text-white lg:text-3xl">
                    Skills
                  </h3>

                  <Skills />

                </div>

              </div>

            </section>


            {/* =========================
                EXPERIENCE
            ========================= */}

            <section
              id="experience"
              className="flex scroll-mt-28 flex-col items-center gap-10"
            >

              <SectionHeading
                icon={
                  <MdWorkspacePremium
                    size={22}
                    className="text-[#00f0ff]"
                  />
                }
                label="Experience"
              />


              <div className="max-w-2xl text-center">

                <p className="text-sm leading-relaxed text-white/60 lg:text-base">
                  Building experience across technology, data,
                  analytics, and business-focused applications.
                </p>

              </div>


              {/* Experience Toggle */}

              <div className="flex items-center rounded-2xl border border-white/10 bg-[#111414] p-1.5 backdrop-blur-sm">

                <button
                  type="button"
                  onClick={() =>
                    setExperienceType("professional")
                  }
                  className={`rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 lg:px-8 ${
                    experienceType === "professional"
                      ? "bg-[#00FFFF] text-black shadow-[0_0_20px_-8px_#00FFFF]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Professional
                </button>


                <button
                  type="button"
                  onClick={() =>
                    setExperienceType("organizational")
                  }
                  className={`rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 lg:px-8 ${
                    experienceType === "organizational"
                      ? "bg-[#00FFFF] text-black shadow-[0_0_20px_-8px_#00FFFF]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Organizational
                </button>

              </div>


              {/* Experience Timeline */}

              <div className="w-full">

                {experienceType === "professional" ? (
                  <TimelineChart type="professional" />
                ) : (
                  <TimelineChart type="organizational" />
                )}

              </div>

            </section>


            {/* =========================
                PROJECTS
            ========================= */}

            <section
              id="projects"
              className="flex scroll-mt-28 flex-col items-center gap-12"
            >

              <SectionHeading
                icon={
                  <FaCode
                    size={22}
                    className="text-[#00f0ff]"
                  />
                }
                label="Projects"
              />


              <div className="max-w-2xl text-center">

                <p className="text-sm leading-relaxed text-white/60 lg:text-base">
                  Selected projects exploring data analysis,
                  visualization, machine learning, and
                  data-driven applications.
                </p>

              </div>


              <div className="flex w-full flex-col items-stretch justify-center gap-8 lg:flex-row">


                {/* Project 1 */}

                <ProjectCard
                  title="PPop Insights Dashboard"
                  badges={[
                    "https://img.shields.io/badge/Python-blue?style=for-the-badge&logo=python&logoColor=white",
                    "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white",
                    "https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white",
                  ]}
                  description="Developed an interactive Streamlit dashboard analyzing social media engagement and musical characteristics across 15 PPop idol groups, with interactive charts, filters, and data exploration."
                  githubHref="https://github.com/ellyyy-son/ppop-dashboard"
                  visitHref="https://ellyson.streamlit.app/Audio_Features"
                />


                {/* Project 2 */}

                <ProjectCard
                  title="Mapping News Coverage of Marcos’ First Six Months"
                  badges={[
                    "https://img.shields.io/badge/Python-blue?style=for-the-badge&logo=python&logoColor=white",
                    "https://img.shields.io/badge/Scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white",
                  ]}
                  description="Collected and analyzed online news articles using LDA topic modeling and social network analysis to identify dominant themes, key actors, and changes in media framing over time."
                  githubHref="https://github.com/ellyyy-son/marcos-news-coverage"
                  onVisit={() =>
                    window.open(
                      "/MappingPoliticalArticles.pdf",
                      "_blank"
                    )
                  }
                />

              </div>

            </section>


            {/* =========================
                EDUCATION
            ========================= */}

            <section
              id="education"
              className="flex scroll-mt-28 flex-col items-center gap-12"
            >

              <SectionHeading
                icon={
                  <IoSchoolOutline
                    size={22}
                    className="text-[#00f0ff]"
                  />
                }
                label="Education"
              />


              <div className="flex w-full flex-col items-stretch justify-center gap-8 lg:flex-row">


                {/* High School */}

                <article className="flex-1 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center text-white transition-all duration-300 hover:border-[#00FFFF]/40 hover:bg-white/[0.06]">

                  <h3 className="mb-2 text-xl font-bold tracking-tight text-[#00FFFF]">
                    High School Diploma
                  </h3>

                  <p className="mb-5 text-sm text-white/70">
                    Academic Track — Science, Technology,
                    Engineering, and Mathematics (STEM)
                  </p>

                  <div className="mx-auto mb-5 h-px w-16 bg-white/15" />

                  <p className="font-semibold text-[#b9c8fa]">
                    Quezon City Science High School
                  </p>

                  <p className="mt-1 text-sm text-white/60">
                    June 2017 – July 2023
                  </p>

                </article>


                {/* University */}

                <article className="flex-1 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center text-white transition-all duration-300 hover:border-[#00FFFF]/40 hover:bg-white/[0.06]">

                  <h3 className="mb-2 text-xl font-bold tracking-tight text-[#00FFFF]">
                    BS Computer Science
                  </h3>

                  <p className="mb-5 text-sm text-white/70">
                    Double Specialization in Data Science and
                    Analytics (DSA) and Enterprise Systems (ES)
                  </p>

                  <div className="mx-auto mb-5 h-px w-16 bg-white/15" />

                  <p className="font-semibold text-[#b9c8fa]">
                    Ateneo de Manila University
                  </p>


                  <div className="mt-3 flex flex-col gap-1">

                    <span className="text-xs italic text-white/60 lg:text-sm">
                      Director&apos;s List Scholar
                    </span>

                    <span className="text-xs italic text-white/60 lg:text-sm">
                      DOST-SEI JLSS Merit Scholar
                    </span>

                  </div>


                  <p className="mt-3 text-sm text-white/60">
                    August 2023 – June 2027
                  </p>

                </article>

              </div>

            </section>


            {/* =========================
                CONTACT
            ========================= */}

            <section
              id="contact"
              className="flex scroll-mt-28 flex-col items-center gap-16"
            >

              <div className="flex flex-col items-center justify-center gap-5 text-center">

                <SectionHeading
                  icon={
                    <GrSend
                      size={20}
                      className="text-[#00f0ff]"
                    />
                  }
                  label="Contact Me!"
                />


                <p className="max-w-xl text-sm text-white/70 lg:text-lg">
                  Interested in working together or just want to
                  connect? Reach me through the platforms below.
                </p>


                <div className="mt-2 flex flex-col items-center justify-center gap-2 text-center">

                  <p className="text-sm text-white/80 lg:text-lg">
                    ellysonolegario@gmail.com
                  </p>

                  <p className="text-sm text-white/80 lg:text-lg">
                    hubert.olegario@student.ateneo.edu
                  </p>


                  <div className="mt-3">
                    <Socials />
                  </div>

                </div>

              </div>


              {/* Contact Form */}

              <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-6">

                <h3 className="text-center text-xl font-bold tracking-tight text-white lg:text-2xl">
                  Answer the form below!
                </h3>


                <div className="w-full px-2 lg:px-4">
                  <Form />
                </div>

              </div>

            </section>

          </div>


          {/* =========================
              FOOTER
          ========================= */}

          <Footer />

        </main>

      </div>

    </div>
  );
}