import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '../data/portfolio';

const Modal = ({ isOpen, cert, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            className="relative bg-slate-900 border border-blue-400/30 rounded-3xl overflow-hidden max-w-2xl w-full"
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-blue-400/20">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{cert.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-white">Training Offer Letter</h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-800 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-400 transition-colors text-xl"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-8 text-center">
              <div className="mb-6">
                <p className="text-gray-300 mb-4">
                  The official offer letter and certification details for the course completion.
                </p>
              </div>

              {/* Placeholder for PDF - Replace with actual PDF viewer */}
              <div className="bg-slate-800/50 border border-dashed border-blue-400/30 rounded-xl p-12 mb-6">
                <div className="text-4xl mb-3">📄</div>
                <p className="text-gray-400 mb-4">PDF Document</p>
                <a
                  href={cert.offerLetterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all"
                >
                  <span>📥</span>
                  Download Offer Letter
                </a>
              </div>

              {/* Certificate details */}
              <div className="bg-slate-800/30 border border-blue-400/20 rounded-xl p-6 text-left">
                <h4 className="font-semibold text-white mb-4">Certificate Details</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Issued By:</span>
                    <span className="text-white font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Program:</span>
                    <span className="text-white font-medium">{cert.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white font-medium">{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-4 border-t border-blue-400/20 flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full border border-gray-600 text-gray-300 font-semibold hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
              <a
                href={cert.offerLetterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all"
              >
                View Full Document
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section id="certifications" className="relative py-10 lg:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black" />
        <div className="absolute left-1/3 top-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-block px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 mb-4"
            variants={itemVariants}
          >
            <span className="text-xs font-semibold text-blue-400 tracking-widest">🎓 CERTIFICATIONS</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            variants={itemVariants}
          >
            Training <span className="text-blue-400">Certification</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Official recognition of my professional development at an industry-certified institute.
          </motion.p>
        </motion.div>

        {/* Certificates grid */}
        <div className="flex justify-center flex-wrap gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              className="w-full max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <motion.div
                className="relative rounded-2xl bg-slate-800/50 border border-blue-400/20 overflow-hidden cursor-pointer group"
                whileHover={{ y: -8, borderColor: 'rgba(59, 130, 246, 0.4)' }}
                onClick={() => setSelectedCert(cert)}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-xs font-bold text-blue-400">
                  {cert.badge}
                </div>

                {/* Top border glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

                {/* Content */}
                <div className="p-8 text-center relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-4 group-hover:scale-110 transition-transform"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {cert.icon}
                  </motion.div>

                  {/* Issuer */}
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
                    {cert.issuer}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {cert.name}
                  </h3>

                  {/* Date */}
                  <div className="text-sm text-gray-400 mb-6">
                    📅 {cert.date}
                  </div>

                  {/* CTA */}
                  <div
                    className="inline-flex items-center gap-2 text-blue-400 font-bold group-hover:text-blue-300 transition-colors"
                  >
                    <span>View Offer Letter</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent my-6" />

                  {/* Hover hint */}
                  <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view details
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={selectedCert !== null}
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};

export default Certifications;
