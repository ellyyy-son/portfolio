import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Skills() {
  return (
    <div className="flex gap-6 justify-center mt-8">
      <a
        href="https://github.com/ellyyy-son"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00f0ff] hover:text-[#00ffff] transition-colors duration-300"
      >
        <SiGithub size={32} />
      </a>
      <a
        href="https://linkedin.com/in/hubert-olegario"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00f0ff] hover:text-[#00ffff] transition-colors duration-300"
      >
        <SiLinkedin size={32} />
      </a>
    
      <a
        href="https://www.instagram.com/ellyyy_son/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00f0ff] hover:text-[#00ffff] transition-colors duration-300"
      >
        <SiInstagram size={32} />
      </a>

    </div>
  );
}
