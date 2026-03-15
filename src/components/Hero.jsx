import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-dark-900"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50 dark:opacity-100" />

      {/* Glowing orbs */}
      <div className="orb w-96 h-96 bg-primary-500 top-1/4 -left-32 animate-float" style={{ animationDelay: '0s' }} />
      <div className="orb w-80 h-80 bg-accent-500 bottom-1/4 -right-20 animate-float" style={{ animationDelay: '3s' }} />
      <div className="orb w-60 h-60 bg-violet-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '1.5s', opacity: 0.08 }} />

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800/50 text-primary-700 dark:text-primary-300 text-sm font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-400" />
          </span>
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-5xl sm:text-7xl font-black tracking-tight mb-4"
        >
          <span className="text-gray-900 dark:text-white">Hi, I&apos;m </span>
          <span className="gradient-text">Abhishek</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mb-6"
        >
          <span className="text-2xl sm:text-3xl font-semibold text-gray-500 dark:text-gray-400">
            {personalInfo.title}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed text-balance"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Link to="projects" smooth duration={700} offset={-64}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary text-base"
            >
              View Projects
              <FiArrowDown size={18} />
            </motion.button>
          </Link>

          <motion.a
            href={personalInfo.resume}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-outline text-base"
          >
            <FiDownload size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: personalInfo.github, icon: FiGithub, label: 'GitHub' },
            { href: personalInfo.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm transition-all duration-200 border border-gray-200 dark:border-white/10"
            >
              <Icon size={18} />
              {label}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-600"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <FiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
