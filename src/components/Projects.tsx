import React from 'react';
import { ExternalLink, Github, Code, Database, Server, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CI/CD Pipeline Automation",
      description: "Developed a comprehensive automation solution using Jenkins and Docker for streamlined deployment processes. This hackathon project showcased advanced DevOps practices and significantly improved deployment efficiency.",
      technologies: ["Jenkins", "Docker", "Shell Scripting", "Linux", "Git"],
      category: "DevOps",
      icon: <Server className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=500",
      highlights: ["Automated deployment pipeline", "Containerized applications", "Reduced deployment time by 70%"]
    },
    {
      title: "Interactive Data Dashboard",
      description: "Created an intuitive Power BI dashboard for data visualization and business intelligence. Features real-time data processing, interactive charts, and comprehensive reporting capabilities.",
      technologies: ["Power BI", "SQL", "Data Analytics", "DAX", "Power Query"],
      category: "Data Visualization",
      icon: <Database className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=500",
      highlights: ["Real-time data processing", "Interactive visualizations", "Custom DAX formulas"]
    },
    {
      title: "Responsive Portfolio Website",
      description: "Designed and developed a modern, responsive portfolio website using React and Tailwind CSS. Features smooth animations, dark mode toggle, and optimized performance across all devices.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
      category: "Web Development",
      icon: <Code className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
      highlights: ["Mobile-first design", "Smooth animations", "Performance optimized"]
    },
    {
      title: "UI/UX Design System",
      description: "Developed a comprehensive design system with reusable components, style guides, and design tokens. Focused on accessibility, consistency, and user-centered design principles.",
      technologies: ["Figma", "Design Tokens", "Component Library", "Accessibility", "User Research"],
      category: "UI/UX Design",
      icon: <Zap className="w-6 h-6" />,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
      highlights: ["Accessibility compliant", "Reusable components", "User-centered approach"]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "DevOps": "from-blue-500 to-cyan-600",
      "Data Visualization": "from-purple-500 to-pink-600",
      "Web Development": "from-green-500 to-teal-600",
      "UI/UX Design": "from-orange-500 to-red-600"
    };
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FEATURED PROJECTS
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Crafted digital experiences with precision and purpose.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:transform hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-sm font-medium`}>
                    {project.category}
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center">
                    {project.icon}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200">
                      <Github className="w-4 h-4" />
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;