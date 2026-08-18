import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

/* =========================
   Types
========================= */

type Experience = {
  date: string;
  title: string;
  company: string;
  description: string[];
};

type TimelineChartProps = {
  type?: "professional" | "organizational";
};


/* =========================
   Professional Experience
========================= */

const professionalExperience: Experience[] = [
  {
    date: "September 2026 - Present",
    title: "Supply Chain Intern - Business Week 2026",
    company: "Unilever Philippines Inc.",
    description: [
      "Selected as 1 of only 35 participants from a pool of 6,000+ applicants nationwide to join Unilever Philippines' Business Week 2026.",
      "Selected for an internship under Unilever Personal Care, supporting the Integrated Planning Team.",
    ],
  },

  {
    date: "June 2026 - August 2026",
    title: "Fraud Projects and Analytics Intern - Apprentice Program",
    company: "Shopee Philippines Inc.",
    description: [
      "Selected as 1 of only 22 students nationwide from thousands of applicants to join Batch 6 of Shopee Philippines' Apprentice Program.",
      "Collaborated cross-functionally with multiple teams to identify opportunities where targeted fraud rules could mitigate bad actor behavior.",
      "Researched, designed, and proposed a novel fraud detection rule leveraging linkage signals and account behavior to uncover hidden prohibited listings and bad actors attempting to evade existing detection methods.",
      "Conducted data-driven impact assessments and feasibility testing on the proposed rule, demonstrating its ability to flag risky seller accounts and previously undetected prohibited listings.",
    ],
  },

  {
    date: "May 2025 - July 2025",
    title: "Information Technology Intern",
    company: "SAILE Industries Inc.",
    description: [
      "Built and deployed an informational website using React showcasing company products and other important information.",
      "Contributed to digital transformation efforts by converting physical documents into electronic format.",
    ],
  },
];


/* =========================
   Organizational Experience
========================= */

const organizationalExperience: Experience[] = [
  {
    date: "October 2025 - Present",
    title: "IT Skills and Development Officer",
    company: "Ateneo Management Information Systems Association",
    description: [
      "Created and facilitated technical training modules for internal members and external events, mentoring participants and providing hands-on support.",
      "Served as lead developer on organizational and client projects, building and maintaining web systems while collaborating with cross-functional teams on MISA’s technical and cluster initiatives.",
    ],
  },

  {
    date: "July 2025 - July 2026",
    title: "Deputy for Website Management",
    company: "Ateneo Gabay",
    description: [
      "Managed and maintained the organization’s main website, ensuring reliability, usability, and timely updates.",
      "Designed and implemented a custom shortlinking system to streamline link sharing.",
      "Oversaw and supported all domain-related needs, including configuration, troubleshooting, and domain management for organizational platforms.",
    ],
  },
];


/* =========================
   Timeline Component
========================= */

export default function TimelineChart({
  type = "professional",
}: TimelineChartProps) {

  const experiences: Experience[] =
    type === "organizational"
      ? organizationalExperience
      : professionalExperience;

  return (
    <Timeline className="flex flex-col gap-8">

      {experiences.map((experience, index) => (

        <TimelineItem
          key={`${experience.company}-${experience.title}-${index}`}
          className="rounded-2xl p-6 transition-all duration-300 hover:bg-[#2d3030]"
        >

          <TimelinePoint />

          <TimelineContent>

            <TimelineTime className="text-md text-white lg:text-xl">
              {experience.date}
            </TimelineTime>


            <TimelineTitle className="mt-4 text-xl text-[#00FFFF] lg:text-3xl">
              {experience.title}
            </TimelineTitle>


            <TimelineTitle className="mt-4 text-lg italic text-[#b9c8fa] lg:text-2xl">
              {experience.company}
            </TimelineTitle>


            <TimelineBody className="mt-4 text-white">

              <ul className="ml-8 flex list-disc flex-col gap-2 text-sm lg:text-md">

                {experience.description.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item}
                  </li>
                ))}

              </ul>

            </TimelineBody>

          </TimelineContent>

        </TimelineItem>

      ))}

    </Timeline>
  );
}