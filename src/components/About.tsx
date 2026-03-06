import React from 'react';
import { Code, Palette, Award, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Expertise",
      description: "Proficient in modern web technologies, CI/CD pipelines, and data visualization tools."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Artistic Vision",
      description: "Creating stunning visual art through pencil portraits, acrylic painting, and watercolor techniques."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Hackathon Experience",
      description: "Participated in automation projects showcasing innovation and problem-solving skills."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing user-centered experiences that bridge functionality with aesthetic appeal."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ABOUT ME
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I’m a B.Tech IT student passionate about exploring how technology can shape meaningful digital experiences. I focus on building smart, efficient, and user-centered solutions that bring ideas to life with clarity and purpose.
              When I’m not developing, I find inspiration in art that transforming emotions into visuals, just as I transform ideas into code.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My academic journey in Information Technology has provided me with a strong foundation in programming, system design, and emerging technologies. I specialize in web development, automation, data visualization, data science, and embedded systems with IoT integration.
               </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Beyond the digital space, I express my creativity through art that reflects emotion, perspective, and precision.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This unique combination of technical and artistic skills allows me to approach ideas with analytical precision and creative innovation, enabling inventive thinking that results in impactful and thoughtful designs.
                </p>
              </div>
            </div>

            {/* Profile Image Placeholder */}
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-teal-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-teal-900/30 flex items-center justify-center shadow-lg">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">
                    <img
                    src="download.png "
                    
                    className="w-72 h-72 rounded-full object-cover"
                    >  
                    </img>

                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white group-hover:shadow-lg transition-shadow duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;