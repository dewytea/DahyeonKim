import React from 'react';
import { RESUME_DATA } from '../constants';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const { experience, activities } = RESUME_DATA;

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Professional Experience Section */}
      <section>
        <h2 className="text-2xl font-serif font-bold text-primary mb-8 border-b pb-2 border-gray-200">
          Professional Experience
        </h2>
        <div className="space-y-10">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l border-gray-200">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-secondary rounded-full border-2 border-white shadow-sm"></div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span className="flex items-center"><Calendar size={14} className="mr-1"/> {exp.period}</span>
                  <span className="flex items-center"><MapPin size={14} className="mr-1"/> {exp.location}</span>
                </div>
              </div>
              <div className="text-lg font-serif text-secondary mb-4">{exp.company}</div>
              
              {exp.projects && (
                <div className="space-y-6">
                  {exp.projects.map((proj, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold text-gray-700 text-sm mb-1 uppercase tracking-wide">{proj.title}</h4>
                      <ul className="list-disc list-outside ml-4 text-gray-600 text-sm space-y-1 leading-relaxed">
                        {proj.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Activities Section */}
      <section>
        <h2 className="text-2xl font-serif font-bold text-primary mb-8 border-b pb-2 border-gray-200">
          Activities & Leadership
        </h2>
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="pl-4">
               <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-lg font-bold text-gray-800">{activity.role}</h3>
                <div className="flex items-center text-xs text-gray-500 space-x-3">
                  <span>{activity.period}</span>
                  <span>|</span>
                  <span>{activity.location}</span>
                </div>
              </div>
              <div className="text-md font-serif text-secondary mb-2 italic">{activity.organization}</div>
              <ul className="list-disc list-outside ml-4 text-gray-600 text-sm space-y-1 leading-relaxed">
                {activity.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;