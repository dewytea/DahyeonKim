import React from 'react';
import { RESUME_DATA } from '../constants';

const CoverLetter: React.FC = () => {
  const { profile } = RESUME_DATA;
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      <h2 className="text-2xl font-serif font-bold text-primary mb-8 border-b pb-2 border-gray-200">
        Cover Letter
      </h2>
      
      <div className="font-serif text-gray-800 space-y-6 leading-relaxed text-justify">
        <div className="text-right text-sm text-gray-500 mb-8 font-sans">
          {currentDate}
        </div>

        <p>
          To whom it may concern,
        </p>

        <p>
          My name is <strong>{profile.name}</strong>, and I am writing to express my strong interest in opportunities where I can leverage my background in public policy, data analytics, and strategic consulting. With a foundation built at Duke University and refined through rigorous professional experiences at Deloitte and BCG, I have dedicated my early career to solving complex problems at the intersection of business strategy and social impact.
        </p>

        <p>
          During my time as a Senior Consultant at Deloitte, I had the privilege of leading high-stakes projects, from determining optimal overseas plant locations to quantifying climate change risks for major semiconductor companies. These experiences taught me that true innovation lies not just in data analysis, but in the ability to translate those numbers into actionable frameworks that drive business decisions. I take pride in my ability to synthesize regulatory environments, financial metrics, and operational realities into cohesive strategies.
        </p>

        <p>
          My academic journey, particularly my Honors Thesis on Transnational Technology Corporations in China, honed my research capabilities and fostered a deep appreciation for cross-cultural dynamics. Fluent in English, Korean, and Mandarin, I thrive in global environments where diverse perspectives are essential for success. Whether it was interviewing policymakers in Beijing or implementing SAP dashboards in Seoul, I have consistently sought to bridge gaps—between data and strategy, between different cultural contexts, and between ambitious goals and tangible results.
        </p>

        <p>
          I am eager to bring my unique blend of analytical rigor, linguistic versatility, and strategic thinking to a forward-thinking team. I am confident that my passion for research and my proven track record in consulting will allow me to make meaningful contributions to your organization.
        </p>

        <p>
          Thank you for your time and consideration. I look forward to the possibility of discussing how my background aligns with your team's needs.
        </p>

        <div className="mt-12">
          <p>Sincerely,</p>
          <br />
          <p className="font-bold text-xl font-signature text-secondary">{profile.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;