import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const contactItems = [
  { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: null },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/Abhipagar92', href: personalInfo.github },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'Abhishek Pagar', href: personalInfo.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-500 mb-3">Let&apos;s talk</p>
          <h2 className="section-title text-gray-900 dark:text-white">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Open to full-time roles, freelance projects, and exciting collaborations. Let&apos;s build something great together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {contactItems.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="glass-card p-5 flex flex-col items-center gap-3 text-center shadow-sm hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200 block no-underline cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-md shadow-primary-500/30">
                      <Icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary-500 mb-1">{label}</p>
                      <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">{value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="glass-card p-5 flex flex-col items-center gap-3 text-center shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-md shadow-primary-500/30">
                      <Icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary-500 mb-1">{label}</p>
                      <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">{value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 text-center"
          >
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary text-base inline-flex"
            >
              <FiSend size={18} />
              Send Me an Email
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
