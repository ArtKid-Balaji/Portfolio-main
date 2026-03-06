import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Download,
  Send,
  Github,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  // Resume download
  const downloadResume = (filePath: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Contact Info
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "balaji06oct@gmail.com",
      href: "mailto:balaji06oct@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8608802727",
      href: "tel:+918608802727",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "India",
      href: null,
    },
  ];

  // Socials
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      href: "https://instagram.com/arts.of_bala",
      color: "from-pink-600 to-purple-600",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/balaji-loganathan-b08207370",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/ArtKid-Balaji",
      color: "from-gray-500 to-gray-800",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          {/* Two Column Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT SIDE - Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Get in Touch
              </h3>

              {/* Contact Info */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 dark:text-white">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Resume Download */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    downloadResume(
                      "/resume-Balaji UI_UX resume.pdf",
                      "Balaji_UI_UX_Resume.pdf"
                    )
                  }
                  className="flex items-center gap-6 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />  UI/UX Designer Resume  
                </button>
                <button
                  onClick={() =>
                    downloadResume(
                      "/resume-webdev.pdf",
                      "Balaji_WebDev_Resume.pdf"
                    )
                  }
                  className="flex items-center gap-6 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-5 h-5" /> Web Developer Resume
                </button>
              </div>

              {/* Socials */}
              <div>
                <h3 className="text-2xl font-bold text-gray-700 dark:text-white mb-4">
                Follow on
              </h3>
                
                <div className="flex gap-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Form */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
<div className="text-center py-6 mt-16">
  <p className="text-sm text-gray-600 dark:text-gray-400">
    © 2025 BALAJI L. All rights reserved. | Designed & Developed with Art
  </p>
</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
