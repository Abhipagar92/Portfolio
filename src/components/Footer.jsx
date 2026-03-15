import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-gray-400 py-10 px-4">
      <div className="container-max">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-mono text-primary-400 font-bold">&lt;AP /&gt;</span>
            <span>·</span>
            <span>Made with <FiHeart className="inline text-rose-400 mx-0.5" size={13} /> by Abhishek Pagar</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
          </div>

          <span className="text-sm text-gray-600">© {year} Abhishek Pagar. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
