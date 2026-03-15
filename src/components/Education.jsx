import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-500 mb-3">My academic background</p>
          <h2 className="section-title text-gray-900 dark:text-white">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800/50 space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className={`timeline-dot -left-[1.05rem] top-4 ${
                    edu.highlight
                      ? 'w-5 h-5 border-primary-500 shadow-primary-500/40'
                      : ''
                  }`}
                />

                <motion.div
                  whileHover={{ x: 4 }}
                  className={`glass-card p-6 ml-4 shadow-sm transition-all duration-200 ${
                    edu.highlight
                      ? 'border-primary-300 dark:border-primary-700/50 shadow-primary-100 dark:shadow-primary-900/20'
                      : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl mt-0.5">{edu.icon}</span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug">
                          {edu.degree}
                        </h3>
                        {edu.highlight && (
                          <span className="flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent-400/20 text-accent-600 dark:text-accent-400 border border-accent-400/30">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">{edu.institution}</p>
                      <p className="text-gray-400 dark:text-gray-500 text-sm mt-0.5">{edu.period}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
