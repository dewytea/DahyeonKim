import React from 'react';
import { RESUME_DATA } from '../constants';
import { ArrowRight, GraduationCap, Briefcase, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { profile, education, experience } = RESUME_DATA;
  const latestRole = experience[0];

  return (
    <div className="space-y-12 animate-fade-in">
      <section>
        <h2 className="text-2xl font-serif font-bold text-primary mb-6 border-b pb-2 border-gray-200">Abstract</h2>
        <p className="text-lg leading-relaxed text-gray-700 font-light mb-6">
          {profile.summary}
        </p>
        <div className="flex gap-4">
          <Link to="/experience" className="inline-flex items-center text-sm font-medium text-secondary hover:text-primary transition-colors">
            View Full Experience <ArrowRight size={16} className="ml-1" />
          </Link>
          <Link to="/projects" className="inline-flex items-center text-sm font-medium text-secondary hover:text-primary transition-colors">
            View Research & Projects <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
          <div className="flex items-center mb-4 text-primary">
            <GraduationCap size={20} className="mr-2" />
            <h3 className="font-serif font-bold text-lg">Education</h3>
          </div>
          <ul className="space-y-4">
            {education.map((edu, index) => (
              <li key={index}>
                <div className="font-medium text-gray-900">{edu.school}</div>
                <div className="text-sm text-gray-600 italic">{edu.degree}</div>
                <div className="text-xs text-gray-500 mt-1">{edu.period} | {edu.location}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
          <div className="flex items-center mb-4 text-primary">
            <Briefcase size={20} className="mr-2" />
            <h3 className="font-serif font-bold text-lg">Current Role</h3>
          </div>
          <div>
            <div className="font-medium text-gray-900">{latestRole.role}</div>
            <div className="text-sm text-gray-600">{latestRole.company}</div>
            <div className="text-xs text-gray-500 mt-1">{latestRole.period} | {latestRole.location}</div>
            <div className="mt-3 text-sm text-gray-700">
              Focusing on manufacturing optimization, risk quantification, and post-merger integration for global clients.
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="flex items-center mb-4 text-primary border-b pb-2 border-gray-200">
            <Globe size={20} className="mr-2" />
            <h3 className="font-serif font-bold text-lg">Global Perspective</h3>
        </div>
        <div className="prose text-gray-700 text-sm">
            <p className="mb-4">
                With a Bachelor's degree from Duke University concentrating in Chinese studies and professional experience spanning Seoul and global markets, I bring a unique cross-cultural perspective to consulting and research. My fluency in English, Korean, and Mandarin allows me to navigate complex international environments effectively.
            </p>
        </div>
      </section>
    </div>
  );
};

export default Home;