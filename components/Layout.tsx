import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { RESUME_DATA } from '../constants';
import { Mail, Phone, MapPin, Download } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { profile } = RESUME_DATA;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans text-text">
      <div className="max-w-4xl mx-auto bg-white shadow-paper min-h-[1100px] flex flex-col">
        {/* Document Header */}
        <header className="px-12 pt-16 pb-8 border-b border-gray-100 bg-white sticky top-0 z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
            <div>
              <h1 className="text-4xl font-serif font-bold text-primary mb-2 tracking-tight">
                {profile.name}
              </h1>
              <p className="text-secondary font-medium tracking-wide uppercase text-sm">
                Senior Consultant @ Deloitte / Duke University Alumna
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end space-y-1 text-sm text-gray-600">
              <a href={`mailto:${profile.email}`} className="flex items-center hover:text-secondary transition-colors">
                <Mail size={14} className="mr-2" /> {profile.email}
              </a>
              <span className="flex items-center">
                <Phone size={14} className="mr-2" /> {profile.phone}
              </span>
              <span className="flex items-center">
                <MapPin size={14} className="mr-2" /> {profile.location}
              </span>
            </div>
          </div>

          {/* Navigation - Styled as document tabs */}
          <nav className="flex flex-wrap gap-6 text-sm font-medium border-t border-gray-100 pt-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `pb-1 border-b-2 transition-colors duration-300 ${isActive ? 'border-secondary text-primary' : 'border-transparent text-gray-400 hover:text-gray-600'}`
              }
            >
              Summary
            </NavLink>
            <NavLink 
              to="/experience" 
              className={({ isActive }) => 
                `pb-1 border-b-2 transition-colors duration-300 ${isActive ? 'border-secondary text-primary' : 'border-transparent text-gray-400 hover:text-gray-600'}`
              }
            >
              Experience
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `pb-1 border-b-2 transition-colors duration-300 ${isActive ? 'border-secondary text-primary' : 'border-transparent text-gray-400 hover:text-gray-600'}`
              }
            >
              Projects
            </NavLink>
             <NavLink 
              to="/skills" 
              className={({ isActive }) => 
                `pb-1 border-b-2 transition-colors duration-300 ${isActive ? 'border-secondary text-primary' : 'border-transparent text-gray-400 hover:text-gray-600'}`
              }
            >
              Skills & Awards
            </NavLink>
            <NavLink 
              to="/cover-letter" 
              className={({ isActive }) => 
                `pb-1 border-b-2 transition-colors duration-300 ${isActive ? 'border-secondary text-primary' : 'border-transparent text-gray-400 hover:text-gray-600'}`
              }
            >
              Cover Letter
            </NavLink>
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow px-12 py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="px-12 py-8 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <button className="flex items-center hover:text-primary transition-colors" onClick={() => window.alert('This would trigger a PDF download.')}>
            <Download size={14} className="mr-1" /> Download PDF
          </button>
        </footer>
      </div>
    </div>
  );
};