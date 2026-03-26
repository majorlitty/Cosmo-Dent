'use client';

import { motion } from 'motion/react';
import { Coffee, Headphones, Sofa, ShieldPlus } from 'lucide-react';

const experiences = [
  {
    icon: <Sofa size={28} />,
    title: 'Spa-Like Environment',
    description: 'Relax in our beautifully designed, calming clinic spaces that feel more like a luxury lounge than a dental office.',
  },
  {
    icon: <Coffee size={28} />,
    title: 'Concierge Care',
    description: 'From booking to aftercare, our dedicated patient concierge ensures every detail of your visit is seamless.',
  },
  {
    icon: <ShieldPlus size={28} />,
    title: 'Pain-Free Treatment',
    description: 'Advanced techniques and sedation options guarantee a comfortable, anxiety-free experience.',
  },
  {
    icon: <Headphones size={28} />,
    title: 'Entertainment Menu',
    description: 'Enjoy noise-canceling headphones, curated playlists, or your favorite shows during your procedure.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            A Private Luxury <span className="italic text-[#C5A059]">Dental Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#A0A0A0] text-lg font-light"
          >
            We&apos;ve reimagined the dental visit. Expect five-star hospitality, absolute privacy, and an environment designed to soothe the senses.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#2A2A2A] border border-[#3A3A3A] flex items-center justify-center text-[#C5A059] mb-6">
                {exp.icon}
              </div>
              <h3 className="text-xl font-serif mb-4">{exp.title}</h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
