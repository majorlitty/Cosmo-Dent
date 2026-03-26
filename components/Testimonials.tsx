'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The level of care and artistry at Cosmo Dent is unmatched. My new veneers look incredibly natural, and my confidence has skyrocketed. It truly felt like visiting a high-end spa.",
    author: "Elena M.",
    treatment: "Porcelain Veneers",
  },
  {
    quote: "I was always self-conscious about my smile, but the digital design process showed me exactly what was possible. The result is better than I ever imagined.",
    author: "David R.",
    treatment: "Smile Makeover",
  },
  {
    quote: "From the moment you walk in, the experience is luxurious. The team is professional, the technology is state-of-the-art, and the results speak for themselves.",
    author: "Sophia L.",
    treatment: "Invisalign & Whitening",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6"
          >
            Patients Love <span className="italic text-[#C5A059]">Their New Smiles</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#4A4A4A] text-lg font-light"
          >
            Read what our clients have to say about their aesthetic transformations and the Cosmo Dent experience.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-[#E5E0D8] shadow-sm flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6 text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-[#1A1A1A] font-serif text-lg leading-relaxed mb-8 flex-grow italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="pt-6 border-t border-[#E5E0D8]/50">
                <p className="font-semibold text-[#1A1A1A]">{testimonial.author}</p>
                <p className="text-xs text-[#7A7A7A] uppercase tracking-wider mt-1">{testimonial.treatment}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
