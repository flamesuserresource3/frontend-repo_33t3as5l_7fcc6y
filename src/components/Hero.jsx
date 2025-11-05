import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to ensure text readability; non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 text-white">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide backdrop-blur">
          Multidisciplinary Creative • Cinematography • Motion • Design • AI • Code
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-6xl">
          Bold vision. Precise craft. <span className="text-white/80">Across mediums.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-white/80">
          I blend visual storytelling, design systems, and advanced technology to build immersive content,
          brands, and products that move people and move business.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow hover:bg-white/90 transition"
          >
            Explore Work <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
