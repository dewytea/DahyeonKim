import React from 'react';
import { RESUME_DATA } from '../constants';
import { BookOpen, Presentation, FileText } from 'lucide-react';

const Projects: React.FC = () => {
  const { research, presentations, experience } = RESUME_DATA;

  // Extract key corporate projects from experience for a consolidated view
  const corporateProjects = experience.flatMap(exp => 
    exp.projects?.map(p => ({ ...p, company: exp.company, role: exp.role })) || []
  );

  return (
    <div className="space-y-12 animate-fade-in">
      
      {/* Research Experience */}
      <section>
        <div className="flex items-center mb-6">
            <BookOpen size={24} className="text-secondary mr-3" />
            <h2 className="text-2xl font-serif font-bold text-primary">Research Experience</h2>
        </div>
        
        <div className="grid gap-8">
          {research.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-sm border-l-4 border-secondary shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
              <div className="flex justify-between text-sm text-gray-500 mb-3 border-b border-gray-200 pb-2">
                <span>{item.institution}</span>
                <span>{item.period}</span>
              </div>
              {item.advisors && (
                <div className="text-xs text-gray-500 mb-3 italic">
                  Advisors: {item.advisors}
                </div>
              )}
              <ul className="list-disc list-outside ml-4 text-gray-700 text-sm space-y-2">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Corporate Projects */}
      <section>
        <div className="flex items-center mb-6">
            <FileText size={24} className="text-secondary mr-3" />
            <h2 className="text-2xl font-serif font-bold text-primary">Key Corporate Projects</h2>
        </div>
        <div className="space-y-6">
             {corporateProjects.map((project, index) => (
                 <div key={index} className="group">
                    <h3 className="text-lg font-medium text-gray-800 group-hover:text-secondary transition-colors mb-2">
                        {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                        {project.role} @ {project.company}
                    </p>
                    <ul className="list-none space-y-2 text-sm text-gray-600 border-l border-gray-200 pl-4">
                        {project.description.map((desc, i) => (
                            <li key={i} className="leading-relaxed">{desc}</li>
                        ))}
                    </ul>
                 </div>
             ))}
        </div>
      </section>

      {/* Presentations */}
      <section>
        <div className="flex items-center mb-6">
            <Presentation size={24} className="text-secondary mr-3" />
            <h2 className="text-2xl font-serif font-bold text-primary">Presentations</h2>
        </div>
        <ul className="space-y-4">
            {presentations.map((pres, index) => (
                <li key={index} className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-700 italic">{pres}</span>
                </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default Projects;