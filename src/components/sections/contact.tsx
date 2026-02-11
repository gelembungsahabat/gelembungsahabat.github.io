import { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";
import { Toast } from "../ui/toast";
import "./styles/contact.css";

export function Contact() {
  const email = "muhammadwildan.career@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/gelembungsahabat";
  const githubUrl = "https://github.com/gelembungsahabat";
  const resumeUrl = "/resume/muhammad-wildan-resume.pdf";

  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setShowToast(true);
  };

  return (
    <section className="section-contact">
      <div className="contact-content">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="contact-description">
          I'm open to new opportunities and interesting projects. Feel free to
          reach out if you'd like to discuss web development, React
          architecture, or potential collaborations.
        </p>

        <div className="contact-actions">
          <a
            href={resumeUrl}
            download
            className="btn-primary btn-large"
            aria-label="Download resume"
          >
            <FaFileDownload /> Download Resume
          </a>

          <button
            onClick={handleCopyEmail}
            className="btn-secondary btn-large"
            aria-label="Copy email address"
          >
            <FaEnvelope /> Copy Email
          </button>
        </div>

        <div className="contact-links">
          <p className="contact-links-label">Or connect with me on:</p>
          <div className="social-links">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub profile"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="social-link"
              aria-label="Send email"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      <Toast
        message="Email copied to clipboard!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
}
