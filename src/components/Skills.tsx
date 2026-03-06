import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Power BI', level: 60 },
    { name: 'React', level: 40 },
  ];

  const creativeSkills = [
    { name: 'Pencil Portraits', level: 95 },
    { name: 'Acrylic Painting', level: 80 },
    { name: 'Watercolor', level: 85 },
    { name: 'Digital Art', level: 75 },
    { name: 'Color Theory', level: 90 },
    { name: 'Composition', level: 85 },
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => {
    const barRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target); // stop observing once visible
            }
          });
        },
        { threshold: 0.3 } // triggers when 30% of bar is visible
      );

      if (barRef.current) {
        observer.observe(barRef.current);
      }

      return () => {
        if (barRef.current) observer.unobserve(barRef.current);
      };
    }, []);

    return (
      <div ref={barRef} className="mb-6 group transition-transform duration-300">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {name}
          </h3>
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            {level}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-[1500ms] ease-out"
            style={{ width: isVisible ? `${level}%` : '0%' }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SKILLS & EXPERTISE
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A comprehensive blend of technical proficiency and creative mastery, 
              honed through academic study, practical projects, and artistic exploration.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Technical Skills
                </h3>
              </div>
              <div className="space-y-2">
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            {/* Creative Skills */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Creative Skills
                </h3>
              </div>
              <div className="space-y-2">
                {creativeSkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
