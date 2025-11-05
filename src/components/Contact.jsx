import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gray-950 py-16 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-2">
          <Mail className="h-5 w-5" />
          <h3 className="text-xl font-semibold">Let’s build something remarkable</h3>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-white/80" htmlFor="name">Name</label>
                  <input id="name" required className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/30" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-white/80" htmlFor="email">Email</label>
                  <input id="email" type="email" required className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/30" placeholder="name@company.com" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80" htmlFor="subject">Subject</label>
                <input id="subject" className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/30" placeholder="Project, collaboration, or speaking" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80" htmlFor="message">Message</label>
                <textarea id="message" rows={5} className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/30" placeholder="Tell me about your goals and timeline" />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/60">Response within 24–48 hours</div>
                <button className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow transition hover:bg-white/90">
                  Send Message <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h4 className="font-medium">Availability</h4>
              <p className="mt-1 text-sm text-white/70">Consulting, direction, and hands-on production. Remote-first; available for global travel.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h4 className="font-medium">Connect</h4>
              <ul className="mt-2 space-y-2 text-sm text-white/80">
                <li><a className="hover:underline" href="#">Instagram</a></li>
                <li><a className="hover:underline" href="#">LinkedIn</a></li>
                <li><a className="hover:underline" href="#">YouTube</a></li>
                <li><a className="hover:underline" href="#">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} — Crafted with care and curiosity.</div>
      </div>
    </section>
  );
}
