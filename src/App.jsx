import React from 'react';
import Hero from './components/Hero';
import WorkShowcase from './components/WorkShowcase';
import AboutAndBlog from './components/AboutAndBlog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple top nav for smooth section access */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold tracking-tight">Creative Portfolio</a>
          <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
            <a className="hover:text-gray-900" href="#work">Work</a>
            <a className="hover:text-gray-900" href="#about">About</a>
            <a className="hover:text-gray-900" href="#writing">Writing</a>
            <a className="hover:text-gray-900" href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-black/90">Hire Me</a>
        </div>
      </header>

      <main>
        <Hero />
        <WorkShowcase />
        <AboutAndBlog />
        <Contact />
      </main>
    </div>
  );
}

export default App;
