"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EMAIL = "nils@team-fink.de";

function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch((err) => console.error("Copy failed: ", err));
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 md:px-8 mt-16 md:mt-24 scroll-mt-28"
    >
      <motion.div
        className="bg-slate-900 text-white rounded-3xl shadow-xl p-8 md:p-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold">Get in touch</h2>
        <p className="text-slate-300 mt-3 md:text-lg max-w-2xl mx-auto">
          Interested in working together or want to know more about my
          experience? I'm happy to hear from you — the fastest way is email
          or LinkedIn.
        </p>

        {/* Email, visible in plain text */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
          <a
            href={`mailto:${EMAIL}`}
            className="bg-white text-slate-900 font-semibold px-5 py-3 rounded-xl md:text-lg hover:bg-slate-200"
          >
            <i className="bi bi-envelope-at-fill mr-2"></i>
            {EMAIL}
          </a>
          <button
            onClick={handleCopy}
            aria-label="Copy email address"
            className="bg-slate-700 text-white font-semibold px-4 py-3 rounded-xl hover:bg-slate-600 md:text-lg"
          >
            <i className={copied ? "bi bi-check-lg" : "bi bi-clipboard"}></i>
            <span className="ml-2">{copied ? "Copied!" : "Copy"}</span>
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-7 text-3xl md:text-4xl">
          <a
            href="https://www.linkedin.com/in/nils-fink-42220b257/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-indigo-300"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/NiFink"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="hover:text-indigo-300"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
