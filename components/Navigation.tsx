import React, { useState, useEffect } from 'react';
import { NAV_LINKS, HERO_TITLE } from '../constants';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      {/* --- Desktop Sidebar (Always Visible) --- */}
      <div className="hidden md:flex fixed left-0 top-0 h-full w-24 bg-brand-dark border-r border-white/10 z-50 flex-col items-center justify-between py-8">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 flex items-center justify-center text-white hover:text-brand-red transition-colors relative z-50 group focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="flex flex-col gap-1.5 items-center">
              <span className="w-8 h-[2px] bg-white group-hover:bg-brand-red transition-colors duration-300"></span>
              <span className="w-8 h-[2px] bg-white group-hover:bg-brand-red transition-colors duration-300"></span>
              <span className="w-8 h-[2px] bg-white group-hover:bg-brand-red transition-colors duration-300"></span>
            </div>
          )}
        </button>

        {/* Logo/Brand Vertical */}
        <div className="flex-1 flex items-center justify-center">
          <div className="writing-vertical-lr rotate-180 font-header font-bold text-2xl tracking-[0.5em] text-white opacity-80 select-none whitespace-nowrap">
            {HERO_TITLE.toUpperCase()}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col gap-8 items-center mb-4">
          {/* Utility Icons Placeholder - Search, Account, Cart */}
          <div className="flex flex-col gap-6 text-gray-400">
            <button className="hover:text-brand-red transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="hover:text-brand-red transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </button>
            <button className="hover:text-brand-red transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Top Bar --- */}
      <div className="fixed top-0 left-0 w-full h-16 bg-black/90 backdrop-blur-md z-50 flex items-center justify-between px-6 md:hidden border-b border-white/10">
        <span className="font-header font-bold text-xl tracking-widest text-white">{HERO_TITLE}</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* --- Full Screen Menu Overlay --- */}
      <div
        className={`fixed inset-0 z-40 bg-brand-red/95 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-[-100%]'}`}
      >
        <div className="flex h-full w-full">
          {/* Spacer for Sidebar on Desktop */}
          <div className="hidden md:block w-24 flex-shrink-0 bg-transparent h-full"></div>

          {/* Main Menu Content */}
          <div className="flex-1 flex flex-col h-full overflow-y-auto">

            {/* Top Search Bar */}
            <div className="h-24 min-h-[6rem] border-b border-white/20 flex items-center px-8 md:px-16">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent text-white placeholder-white/50 text-2xl md:text-3xl font-serif focus:outline-none"
              />
              <button className="text-white hover:opacity-70 transition-opacity">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>

            {/* Menu Grid */}
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center items-center">
              <div className="flex flex-col gap-6 text-center">
                {NAV_LINKS.map(link => {
                  const isInternal = link.href.startsWith('/');
                  return isInternal ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-header text-4xl md:text-6xl font-bold tracking-widest text-white hover:text-black transition-colors uppercase"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-header text-4xl md:text-6xl font-bold tracking-widest text-white hover:text-black transition-colors uppercase"
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Bottom Footer Area (Removed) */}

          </div>
        </div>
      </div>

      <style>{`
        .writing-vertical-lr {
          writing-mode: vertical-lr;
        }
      `}</style>
    </>
  );
};

export default Navigation;