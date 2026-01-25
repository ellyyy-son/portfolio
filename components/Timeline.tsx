
import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function TimelineChart() {
  return (
    <Timeline className="flex flex-col gap-8">
      <TimelineItem className="hover:bg-[#2d3030] p-6 rounded-2xl">
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime className="text-md lg:text-xl text-white">October 2025 - Present</TimelineTime>
          <TimelineTitle className="text-xl lg:text-3xl text-[#00FFFF] mt-4">IT Skills and Development Officer</TimelineTitle>
          <TimelineTitle className="text-lg lg:text-2xl text-[#b9c8fa] mt-4 italic">Ateneo Management Information Systems Association</TimelineTitle>
          <TimelineBody className="text-white mt-4">
            <ul className="flex flex-col list-disc ml-8 gap-2 text-sm lg:text-md">
                <li>Created and facilitated technical training modules for internal members and external events, mentoring participants and providing hands-on support.</li>
                <li>Served as lead developer on organizational and client projects, building and maintaining web systems while collaborating with cross-functional teams on MISA’s technical and cluster initiatives.</li>
            </ul>
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="hover:bg-[#2d3030] p-6 rounded-2xl">
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime className="text-md lg:text-xl text-white">July 2025 - Present</TimelineTime>
          <TimelineTitle className="text-xl lg:text-3xl text-[#00FFFF] mt-4">Deputy for Website Management</TimelineTitle>
          <TimelineTitle className="text-lg lg:text-2xl text-[#b9c8fa] mt-4 italic">Ateneo Gabay</TimelineTitle>
          <TimelineBody className="text-white mt-4">
            <ul className="flex flex-col list-disc ml-8 gap-2 text-sm lg:text-md">
                <li>Managed and maintained the organization’s main website, ensuring reliability, usability, and timely updates.</li>
                <li>Designed and implemented a custom shortlinking system to streamline link sharing.</li>
                <li>Oversaw and supported all domain-related needs, including configuration, troubleshooting, and domain management for organizational platforms.</li>
            </ul>
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="hover:bg-[#2d3030] p-6 rounded-2xl">
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime className="text-md lg:text-xl text-white">May 2025 - July 2025</TimelineTime>
          <TimelineTitle className="text-xl lg:text-3xl text-[#00FFFF] mt-4">Information Technology Intern</TimelineTitle>
          <TimelineTitle className="text-lg lg:text-2xl text-[#b9c8fa] mt-4 italic">SAILE Industries Inc.</TimelineTitle>
          <TimelineBody className="text-white mt-4">
            <ul className="flex flex-col list-disc ml-8 gap-2 text-sm lg:text-md">
                <li>Built and deployed an informational website using React showcasing company products and other important information</li>
                <li> Contributed to digital transformation efforts by converting physical documents into electronic format.</li>
            </ul>
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
