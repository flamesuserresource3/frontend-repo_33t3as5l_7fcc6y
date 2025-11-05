import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, PenTool } from 'lucide-react';

export default function AboutAndBlog() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* About */}
          <div>
            <div className="mb-4 flex items-center gap-2 text-gray-900">
              <Briefcase className="h-5 w-5" />
              <h3 className="text-xl font-semibold">About</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p>
                I’m a creative director and technologist working across cinematography, motion graphics, design, AI, and code.
                My practice sits at the intersection of storytelling and systems thinking—building brands, films, and products
                that are both emotionally resonant and technically rigorous.
              </p>
              <p>
                With experience spanning agencies, startups, and global brands, I bring a hands-on approach to craft and a
                strategic lens to every collaboration. I lead with clarity, iterate quickly, and deliver work that balances
                experimentation with measurable results.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Cinematography", "Design Systems", "Motion", "AI/ML", "Creative Coding", "Brand Strategy", "Product"].map((chip) => (
                <span key={chip} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">{chip}</span>
              ))}
            </div>
          </div>

          {/* Writing / Blog */}
          <div id="writing">
            <div className="mb-4 flex items-center gap-2 text-gray-900">
              <PenTool className="h-5 w-5" />
              <h3 className="text-xl font-semibold">Writing & Notes</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[{
                title: "Designing Motion Systems for Brands",
                summary: "A framework for scalable kinetics across platforms and time.",
              }, {
                title: "AI as a Creative Collaborator",
                summary: "From concept to tool: aligning models to taste and intent.",
              }, {
                title: "Directing with Data",
                summary: "Using analytics to inform story without losing soul.",
              }].map((post, i) => (
                <motion.a key={post.title} href="#" whileHover={{ y: -2 }} className="block rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="font-medium text-gray-900">{post.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{post.summary}</p>
                  <p className="mt-2 text-xs text-gray-400">Article — {i + 4} min read</p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
