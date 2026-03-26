'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import SmileVisualizer from './SmileVisualizer';

const results = [
  {
    id: 1,
    image: 'https://i.postimg.cc/8kXL6Br8/Teeth_transform_2.jpg',
    treatment: 'Porcelain Veneers',
    outcome: 'Restored symmetry and brightened shade for a flawless, natural look.',
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/PJJZ7N0d/Teeth_Transform_3.jpg',
    treatment: 'Full Smile Makeover',
    outcome: 'Corrected alignment and proportion, completely transforming facial harmony.',
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/dQNGymTJ/Teeth_transforms_1.jpg',
    treatment: 'Invisalign & Whitening',
    outcome: 'Straightened and illuminated for a youthful, vibrant appearance.',
  },
];

export default function Results() {
  return (
    <section id="results" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6">
              Real Smile <span className="italic text-[#C5A059]">Transformations</span>
            </h2>
            <p className="text-[#4A4A4A] text-lg font-light">
              Witness the artistry of our master ceramists and clinicians. Preview your own transformation with our AI visualizer, or explore our gallery of custom-designed smiles.
            </p>
          </motion.div>
        </div>

        <div className="mb-24">
          <SmileVisualizer />
        </div>

        <h3 className="text-2xl font-serif text-[#1A1A1A] mb-8">Patient Gallery</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden mb-6">
                <Image
                  src={result.image}
                  alt={`Smile transformation ${result.id}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-xs font-semibold uppercase tracking-wider mb-3">
                    {result.treatment}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-serif text-[#1A1A1A] mb-2">The Outcome</h3>
              <p className="text-[#7A7A7A] text-sm leading-relaxed">
                {result.outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
