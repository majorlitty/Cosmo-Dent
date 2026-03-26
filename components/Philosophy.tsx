'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ScanFace, Fingerprint, Palette, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <ScanFace size={24} />,
    title: 'Digital Smile Design',
    description: 'Advanced 3D scanning and digital modeling to preview your perfect smile before treatment begins.',
  },
  {
    icon: <Fingerprint size={24} />,
    title: 'Facial Harmony Analysis',
    description: 'We design smiles that complement your unique facial features, ensuring a naturally beautiful result.',
  },
  {
    icon: <Palette size={24} />,
    title: 'Personalized Planning',
    description: 'Every treatment plan is bespoke, tailored to your aesthetic goals and dental health needs.',
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Natural Outcomes',
    description: 'Our master ceramists craft restorations that mimic the translucency and texture of natural teeth.',
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-[2rem] overflow-hidden order-2 lg:order-1"
          >
            <Image
              src="https://i.postimg.cc/9MnhjFLC/smile-design.jpg"
              alt="Dentist reviewing digital smile design"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border border-black/5 rounded-[2rem]" />
          </motion.div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6 leading-tight">
                Aesthetic Dentistry <br />
                <span className="italic text-[#C5A059]">Meets Precision Medicine</span>
              </h2>
              <p className="text-[#4A4A4A] text-lg font-light mb-12">
                At Cosmo Dent, we believe your smile is your signature. Our philosophy blends artistic vision with cutting-edge medical technology to craft smiles that are as healthy as they are beautiful.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FDFBF7] border border-[#E5E0D8] flex items-center justify-center text-[#C5A059]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-serif text-[#1A1A1A]">{feature.title}</h3>
                  <p className="text-sm text-[#7A7A7A] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
