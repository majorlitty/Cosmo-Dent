'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const treatments = [
  {
    title: 'Porcelain Veneers',
    description: 'Ultra-thin, custom-made ceramic shells designed to cover the front surface of teeth, instantly correcting color, shape, and alignment.',
    benefit: 'Flawless, red-carpet ready smile.',
    confidence: 'Radiate confidence in every photo.',
  },
  {
    title: 'Custom Smile Makeovers',
    description: 'A comprehensive approach combining multiple cosmetic procedures to achieve your ideal aesthetic vision and facial harmony.',
    benefit: 'Complete aesthetic transformation.',
    confidence: 'Feel like the best version of yourself.',
  },
  {
    title: 'Professional Whitening',
    description: 'Advanced laser whitening technology that safely lifts deep stains, revealing a brilliantly bright smile in just one session.',
    benefit: 'Up to 8 shades whiter in 60 minutes.',
    confidence: 'A youthful, vibrant appearance.',
  },
  {
    title: 'Cosmetic Bonding',
    description: 'Artistic application of tooth-colored composite resin to seamlessly repair chips, close gaps, and reshape teeth.',
    benefit: 'Quick, non-invasive aesthetic correction.',
    confidence: 'Smile freely without hesitation.',
  },
  {
    title: 'Dental Implants',
    description: 'The gold standard for tooth replacement. Titanium posts that fuse with bone, topped with lifelike ceramic crowns.',
    benefit: 'Permanent, natural-looking restoration.',
    confidence: 'Eat, speak, and smile with total security.',
  },
  {
    title: 'Invisalign Alignment',
    description: 'Clear, custom-fitted aligners that gradually and discreetly shift your teeth into perfect position without metal braces.',
    benefit: 'Invisible, comfortable orthodontic care.',
    confidence: 'Straighten your smile without anyone knowing.',
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6"
          >
            Cosmetic Dental <span className="italic text-[#C5A059]">Treatments</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#4A4A4A] text-lg font-light"
          >
            Discover our suite of premium aesthetic services, designed to elevate your smile and enhance your natural beauty.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-3xl border border-[#E5E0D8] hover:border-[#C5A059] transition-all duration-500 hover:shadow-xl hover:shadow-[#C5A059]/5 flex flex-col h-full"
            >
              <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4 group-hover:text-[#C5A059] transition-colors">
                {treatment.title}
              </h3>
              <p className="text-[#7A7A7A] text-sm leading-relaxed mb-6 flex-grow">
                {treatment.description}
              </p>
              
              <div className="space-y-3 pt-6 border-t border-[#E5E0D8]/50">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <p className="text-xs font-medium text-[#1A1A1A]">{treatment.benefit}</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <p className="text-xs font-medium text-[#1A1A1A]">{treatment.confidence}</p>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link href="#booking" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C5A059] uppercase tracking-wider group-hover:gap-4 transition-all">
                  Inquire Now <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
