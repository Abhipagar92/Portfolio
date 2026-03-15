import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiCloud } from 'react-icons/fi';
import { aboutText, personalInfo } from '../data/portfolioData';

const highlights = [
  { icon: FiCode, label: 'Backend & API', value: 'Spring Boot · Node.js' },
  { icon: FiSmartphone, label: 'Mobile Dev', value: 'Android · iOS · React Native' },
  { icon: FiCloud, label: 'Cloud & AI', value: 'AWS · Generative AI' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-500 mb-3">Get to know me</p>
          <h2 className="section-title text-gray-900 dark:text-white">About <span className="gradient-text">Me</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
              {aboutText}
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { label: '📍', text: personalInfo.location },
                { label: '✉️', text: personalInfo.email },
              ].map(({ label, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm shadow-sm"
                >
                  {label} {text}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cards side */}
          <div className="grid gap-4">
            {highlights.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="glass-card shadow-sm p-6 flex items-center gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                  <Icon className="text-white" size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-500 mb-0.5">{label}</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
