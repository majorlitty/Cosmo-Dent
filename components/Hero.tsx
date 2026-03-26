'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-[#F4EFE6] to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#F4EFE6] to-transparent opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#E5E0D8] mb-6">
            <Sparkles size={16} className="text-[#C5A059]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
              Luxury Smile Design Studio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6 text-[#1A1A1A]">
            Design Your <br />
            <span className="italic text-[#C5A059]">Perfect Smile</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] mb-10 leading-relaxed font-light">
            Luxury cosmetic dentistry focused on natural-looking smile transformations. Experience precision, artistry, and advanced dental technology in a spa-like environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="#booking"
              className="inline-flex justify-center items-center bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#C5A059] transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/20"
            >
              Book Your Smile Consultation
            </Link>
            <Link
              href="#results"
              className="inline-flex justify-center items-center bg-white text-[#1A1A1A] border border-[#E5E0D8] px-8 py-4 rounded-full text-sm font-medium hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-300"
            >
              View Transformations
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10 pt-8 border-t border-[#E5E0D8]/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#C5A059]">
                <Star size={20} fill="currentColor" />
              </div>
              <div>
                <p className="font-semibold text-[#1A1A1A]">5-Star</p>
                <p className="text-xs text-[#7A7A7A] uppercase tracking-wider">Patient Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#C5A059]">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="font-semibold text-[#1A1A1A]">1000+</p>
                <p className="text-xs text-[#7A7A7A] uppercase tracking-wider">Transformations</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="relative h-[600px] lg:h-[800px] w-full rounded-[2rem] overflow-hidden"
        >
          <Image
            src="https://i.postimg.cc/T1qCJy83/Hero-image-cosmo-dent.jpg"
            alt="Confident smiling patient"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {/* Floating badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-xl"
          >
            <p className="font-serif text-lg italic text-[#1A1A1A] mb-1">&quot;The most luxurious dental experience I&apos;ve ever had.&quot;</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">— Sarah J., Veneer Patient</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
