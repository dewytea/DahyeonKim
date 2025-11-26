import React from 'react';
import { RESUME_DATA } from '../constants';
import { Award, CheckCircle, Trophy } from 'lucide-react';

const Skills: React.FC = () => {
  const { skills, awards } = RESUME_DATA;

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-serif font-bold text-primary mb-8 border-b pb-2 border-gray-200">
          Technical Skills & Languages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-5 rounded border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-md font-bold text-secondary mb-3 flex items-center">
                <CheckCircle size={16} className="mr-2" />
                {skill.category}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {skill.items}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section>
        <h2 className="text-2xl font-serif font-bold text-primary mb-8 border-b pb-2 border-gray-200 flex items-center">
            <Trophy size={24} className="mr-3 text-yellow-600" />
            Scholarships & Awards
        </h2>
        <div className="space-y-8">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-1/4">
                    <div className="font-bold text-gray-800 text-sm">{award.year}</div>
                    <div className="text-xs text-gray-500">{award.location}</div>
                </div>
                <div className="md:w-3/4">
                    <h3 className="text-lg font-serif font-medium text-primary mb-1">{award.name}</h3>
                    <div className="text-sm text-secondary italic mb-2">{award.issuer}</div>
                    <p className="text-sm text-gray-600">{award.description}</p>
                </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;