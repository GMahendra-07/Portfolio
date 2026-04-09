import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactInfo, socialLinks } from '../data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    const sendEmailFallback = () => {
      const recipient = 'gunduboinamahendra@gmail.com';
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    };

    try {
      const response = await fetch(`${apiBaseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Backend request failed');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact API error:', error);
      setSubmitError('Backend unavailable. Opening your email client instead.');
      sendEmailFallback();
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

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

  const socialButtons = [
    {
      url: socialLinks.email,
      label: 'Email',
      color: 'from-red-500 to-orange-500',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M2.25 5.75A2.75 2.75 0 0 1 5 3h14a2.75 2.75 0 0 1 2.75 2.75v12.5A2.75 2.75 0 0 1 19 21H5A2.75 2.75 0 0 1 2.25 18.25V5.75zm2.3.83l6.2 4.28 6.2-4.28a.75.75 0 1 0-.86-1.2L12 9.92 5.41 5.38a.75.75 0 1 0-.86 1.2zM4 7.4v10.85c0 .41.34.75.75.75h14.5a.75.75 0 0 0 .75-.75V7.4l-7.5 5.18L4 7.4z" />
        </svg>
      ),
    },
    {
      url: socialLinks.linkedin,
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-700',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M4.98 3.5C4.98 4.6 4.07 5.5 2.98 5.5S1 4.6 1 3.5 1.91 1 2.98 1 4.98 2.4 4.98 3.5zM0 24V7.5h4.5V24H0zm7.5-16.5H12v2.03c.64-1.21 2.24-2.47 4.6-2.47 4.92 0 5.83 3.24 5.83 7.46V24H18v-7.68c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.94 2-2.94 4.06V24H7.5V7.5z" />
        </svg>
      ),
    },
    {
      url: socialLinks.facebook,
      label: 'Facebook',
      color: 'from-blue-600 to-blue-700',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M22 12a10 10 0 1 0-11.5 9.93v-7.04h-2.17V12h2.17V9.8c0-2.15 1.28-3.34 3.25-3.34.94 0 1.93.17 1.93.17v2.12h-1.08c-1.07 0-1.4.66-1.4 1.34V12h2.39l-.38 2.89h-2.01v7.04A10 10 0 0 0 22 12z" />
        </svg>
      ),
    },
    {
      url: socialLinks.instagram,
      label: 'Instagram',
      color: 'from-pink-600 to-purple-600',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 1.968.247 2.425.415a4.9 4.9 0 0 1 1.79 1.145 4.9 4.9 0 0 1 1.145 1.79c.168.457.36 1.219.415 2.425.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.247 1.968-.415 2.425a4.9 4.9 0 0 1-1.145 1.79 4.9 4.9 0 0 1-1.79 1.145c-.457.168-1.219.36-2.425.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-1.968-.247-2.425-.415a4.9 4.9 0 0 1-1.79-1.145 4.9 4.9 0 0 1-1.145-1.79c-.168-.457-.36-1.219-.415-2.425C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.206.247-1.968.415-2.425a4.9 4.9 0 0 1 1.145-1.79A4.9 4.9 0 0 1 5.583.488c.457-.168 1.219-.36 2.425-.415C8.416.175 8.796.163 12 .163zm0-2.163C8.741 0 8.332.012 7.052.07 5.78.128 4.743.326 3.958.623c-.8.301-1.477.7-2.148 1.37-.67.67-1.069 1.348-1.37 2.148C.143 5.301-.055 6.338-.113 7.61-.171 8.89-.183 9.299-.183 12s.012 3.11.07 4.39c.058 1.272.256 2.309.553 3.094.301.8.7 1.477 1.37 2.148.67.67 1.348 1.069 2.148 1.37.785.297 1.822.495 3.094.553 1.28.058 1.689.07 4.766.07s3.486-.012 4.766-.07c1.272-.058 2.309-.256 3.094-.553.8-.301 1.477-.7 2.148-1.37.67-.67 1.069-1.348 1.37-2.148.297-.785.495-1.822.553-3.094.058-1.28.07-1.689.07-4.766s-.012-3.486-.07-4.766c-.058-1.272-.256-2.309-.553-3.094-.301-.8-.7-1.477-1.37-2.148-.67-.67-1.348-1.069-2.148-1.37C19.257.326 18.22.128 16.948.07 15.668.012 15.259 0 12 0z" />
          <path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 16 12a4 4 0 0 1-4 4z" />
          <circle cx="18.406" cy="5.594" r="1.44" />
        </svg>
      ),
    },
    {
      url: socialLinks.github,
      label: 'GitHub',
      color: 'from-slate-800 to-slate-900',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.79 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.21.694.825.576C20.565 21.79 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="relative py-10 lg:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black" />
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl" />
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
            <span className="text-xs font-semibold text-blue-400 tracking-widest">📬 CONTACT</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            variants={itemVariants}
          >
            Let's <span className="text-blue-400">Connect</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Open to full-time opportunities, collaborations, and exciting tech roles.
          </motion.p>
        </motion.div>

        {/* Contact grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left - Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Ready to build something amazing together?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm actively seeking Java Developer / Full Stack Developer roles at product-based companies and MNCs. I respond within 24 hours — let's talk!
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-4">
              {contactInfo.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link || '#'}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-blue-400/20 hover:border-blue-400/40 transition-all group"
                  whileHover={{ x: 8 }}
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                      {item.label}
                    </div>
                    <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                      {item.value}
                    </div>
                  </div>
                  {item.link && (
                    <span className="text-gray-500 group-hover:text-blue-400 transition-colors">→</span>
                  )}
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Stay Connected</h4>
              <div className="flex flex-wrap gap-3">
                {socialButtons.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-xl text-white shadow-lg hover:shadow-2xl transition-all border border-white/10`}
                    whileHover={{ scale: 1.15, y: -8 }}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="relative group"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative bg-slate-800/50 border border-blue-400/20 hover:border-blue-400/40 rounded-3xl p-8 lg:p-10 transition-all">
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message ✉️</h3>

              {/* Form fields */}
              <div className="space-y-4 mb-6">
                {/* Name */}
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-semibold text-white mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-blue-400/20 text-white placeholder-gray-500 focus:border-blue-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                  />
                </motion.div>

                {/* Email */}
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-semibold text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-blue-400/20 text-white placeholder-gray-500 focus:border-blue-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                  />
                </motion.div>

                {/* Subject */}
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-semibold text-white mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Collaboration"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-blue-400/20 text-white placeholder-gray-500 focus:border-blue-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                  />
                </motion.div>

                {/* Message */}
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-semibold text-white mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Mahendra, I'd like to discuss..."
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-blue-400/20 text-white placeholder-gray-500 focus:border-blue-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all resize-none"
                  />
                </motion.div>
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/40 transition-all disabled:cursor-not-allowed disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : submitted ? '✅ Message Sent!' : 'Send Message →'}
              </motion.button>

              <p className="mt-4 text-xs text-gray-400">
                {apiBaseUrl
                  ? 'Messages are sent to the backend API and stored in the portfolio database. If the backend is unavailable, it falls back to your email client.'
                  : 'This opens your default email client and sends the message to gunduboinamahendra@gmail.com.'}
              </p>
              {submitError && (
                <motion.div
                  className="mt-4 p-3 rounded-lg bg-rose-500/20 border border-rose-400/40 text-rose-300 text-sm text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitError}
                </motion.div>
              )}

              {/* Success message */}
              {submitted && (
                <motion.div
                  className="mt-4 p-3 rounded-lg bg-green-500/20 border border-green-400/40 text-green-300 text-sm text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Thank you! I'll get back to you soon.
                </motion.div>
              )}
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
