import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Palette, Code, Cpu, Music, ExternalLink } from 'lucide-react';

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-6 flex items-end justify-between gap-4">
    <div>
      <div className="flex items-center gap-2 text-gray-900">
        <Icon className="h-5 w-5" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      {subtitle && (
        <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
      )}
    </div>
    <a href="#" className="group hidden items-center gap-2 text-sm text-gray-700 hover:text-gray-900 sm:flex">
      View all <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
    </a>
  </div>
);

const MediaCard = ({ type = 'image', src, title, tags = [] }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
  >
    <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
      {type === 'video' ? (
        <video src={src} className="h-full w-full object-cover" controls playsInline />
      ) : (
        <img src={src} alt={title} className="h-full w-full object-cover" />
      )}
    </div>
    <div className="p-4">
      <h4 className="font-medium text-gray-900">{title}</h4>
      {tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{t}</span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

export default function WorkShowcase() {
  return (
    <section id="work" className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Cinematography & Videography */}
        <SectionHeader
          icon={Camera}
          title="Cinematography & Videography"
          subtitle="Narrative, commercial, and experimental motion work"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <MediaCard type="video" src="https://cdn.coverr.co/videos/coverr-sunlight-through-the-trees-6545/1080p.mp4" title="Sunlight Studies" tags={["Commercial", "Color", "RED"]} />
          <MediaCard type="image" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop" title="Urban Night" tags={["Steadicam", "Low Light"]} />
          <MediaCard type="video" src="https://cdn.coverr.co/videos/coverr-shooting-a-video-1447/1080p.mp4" title="Studio Sequence" tags={["Product", "Lighting"]} />
        </div>

        {/* Motion Graphics & Design */}
        <div className="mt-14">
          <SectionHeader
            icon={Palette}
            title="Motion Graphics & Design"
            subtitle="Kinetic typography, brand animations, and visual systems"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MediaCard type="image" src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop" title="Brand Motion Explorations" tags={["After Effects", "Styleframes"]} />
            <MediaCard type="image" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop" title="Modular Design System" tags={["Design", "Component Library"]} />
            <MediaCard type="video" src="https://cdn.coverr.co/videos/coverr-colorful-liquid-9440/1080p.mp4" title="Liquid Particles" tags={["Simulation", "Shaders"]} />
          </div>
        </div>

        {/* AI, Coding & Digital Products */}
        <div className="mt-14">
          <SectionHeader
            icon={Cpu}
            title="AI, Coding & Digital Products"
            subtitle="Data-driven visuals, creative tooling, and interactive experiences"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div whileHover={{ y: -4 }} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-gray-900"><Code className="h-4 w-4" /><h4 className="font-semibold">Generative Style Transfer</h4></div>
              <p className="text-sm text-gray-600">Custom pipeline for transforming footage with trained diffusion models and LUT-aware post-processing.</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-gray-900"><Code className="h-4 w-4" /><h4 className="font-semibold">Interactive Reel Builder</h4></div>
              <p className="text-sm text-gray-600">Web app for sequencing cuts, timing beats, and exporting social-ready deliverables.</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-gray-900"><Code className="h-4 w-4" /><h4 className="font-semibold">Brand System Generator</h4></div>
              <p className="text-sm text-gray-600">Parametric identity tool that outputs logo variants, palettes, and motion rules.</p>
            </motion.div>
          </div>
        </div>

        {/* Music Production */}
        <div className="mt-14">
          <SectionHeader
            icon={Music}
            title="Music Production & Sound Design"
            subtitle="Scores, sound design, and experimental compositions"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div whileHover={{ y: -4 }} className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h4 className="font-medium text-gray-900">Nocturne in Flux</h4>
              <p className="mt-1 text-sm text-gray-600">Ambient score for short film — analog synths and granular textures.</p>
              <audio className="mt-3 w-full" controls>
                <source src="https://cdn.pixabay.com/audio/2022/03/15/audio_4a38ee9cc0.mp3" type="audio/mpeg" />
              </audio>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h4 className="font-medium text-gray-900">Kinetic Rhythms</h4>
              <p className="mt-1 text-sm text-gray-600">Percussive exploration designed for brand launch motion piece.</p>
              <audio className="mt-3 w-full" controls>
                <source src="https://cdn.pixabay.com/audio/2021/08/04/audio_5f5c1f29c9.mp3" type="audio/mpeg" />
              </audio>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h4 className="font-medium text-gray-900">Signal Bloom</h4>
              <p className="mt-1 text-sm text-gray-600">Generative composition driven by visual data inputs.</p>
              <audio className="mt-3 w-full" controls>
                <source src="https://cdn.pixabay.com/audio/2022/03/10/audio_26ef1b2d2d.mp3" type="audio/mpeg" />
              </audio>
            </motion.div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mt-14">
          <SectionHeader
            icon={Video}
            title="Case Studies: Consulting & Branding"
            subtitle="Strategy, concept development, and measurable outcomes"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div whileHover={{ y: -4 }} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900">Global Lifestyle Brand: End-to-End Identity</h4>
              <p className="mt-2 text-sm text-gray-600">Built a modular brand system, launch campaign visuals, and product storytelling. Increased engagement 3.2x in first 60 days.</p>
              <ul className="mt-3 list-inside list-disc text-sm text-gray-600">
                <li>Strategy sprints and audience mapping</li>
                <li>Motion rules and content playbook</li>
                <li>Design tokens and component library</li>
              </ul>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900">Tech Startup: Product Narrative & Launch</h4>
              <p className="mt-2 text-sm text-gray-600">Defined product positioning, created keynote visuals, microsite, and modular demo videos. Drove 5k+ signups in launch week.</p>
              <ul className="mt-3 list-inside list-disc text-sm text-gray-600">
                <li>Messaging and visual hierarchy</li>
                <li>Real-time motion graphics toolkit</li>
                <li>Performance-focused web build</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
