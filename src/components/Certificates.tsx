import React from "react";

const Certificates = () => {
  const courseCertificates = [
    {
      title: "AWS Academy Graduate – Cloud Foundations",
      provider: "AWS Academy",
      year: "2024",
      link: "https://aws.amazon.com/training/academy/",
    },
    {
      title: "UI/UX Design Fundamentals",
      provider: "Coursera",
      year: "2023",
      link: "https://coursera.org/",
    },
    {
      title: "Jenkins & Docker CI/CD Pipeline",
      provider: "Udemy",
      year: "2023",
      link: "https://udemy.com/",
    },
  ];

  const internshipCertificates = [
    {
      title: "Software Development Intern",
      provider: "XYZ Tech Solutions",
      year: "2024",
      link: "#",
    },
    {
      title: "UI/UX Design Intern",
      provider: "ABC Designs",
      year: "2023",
      link: "#",
    },
  ];

  const achievementCertificates = [
    {
      title: "Hackathon Winner – Smart City Challenge",
      provider: "National Level Hackathon",
      year: "2024",
      link: "C:\Users\radhi\Desktop\Portfolio-main\BALAJI L.pdf"
    },
    {
      title: "Best Innovation Award – Tech Fest",
      provider: "College Symposium",
      year: "2023",
      link: "#",
    },
        {
      title: "Best Innovation Award – Tech Fest",
      provider: "College Symposium",
      year: "2023",
      link: "#",
    },
  ];

  // Reusable Card Component
  const CertificateCard = ({ cert }: { cert: any }) => (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        {cert.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {cert.provider} • {cert.year}
      </p>
      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline"
        >
          View Credential →
        </a>
      )}
    </div>
  );

  // Reusable Section Component
  const CertificateSection = ({
    title,
    certificates,
  }: {
    title: string;
    certificates: any[];
  }) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white border-b-2 border-blue-500 inline-block">
        {title}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} cert={cert} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CERTIFICATES
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of the skills and certifications I’ve earned along my learning journey.
            </p>
          </div>

          {/* Categories */}
          <CertificateSection
            title=" Certified Learning Records "
            certificates={courseCertificates}
          />
          <CertificateSection
            title=" Internship Credentials "
            certificates={internshipCertificates}
          />
          <CertificateSection
            title=" Achievement Highlights "
            certificates={achievementCertificates}
          />
        </div>
      </div>
    </section>
  );
};

export default Certificates;
