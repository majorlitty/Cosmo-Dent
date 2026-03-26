'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Smile Design', href: '#philosophy' },
  { name: 'Treatments', href: '#treatments' },
  { name: 'Results', href: '#results' },
  { name: 'Experience', href: '#experience' },
  { name: 'Reviews', href: '#reviews' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-[#E5E0D8] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="font-serif text-2xl tracking-tight text-[#1A1A1A]">
            Cosmo <span className="text-[#C5A059] italic">Dent</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#4A4A4A] hover:text-[#C5A059] transition-colors tracking-wide uppercase"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#booking"
            className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#C5A059] transition-colors"
          >
            Book Consultation
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-[#1A1A1A]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-[#FDFBF7] h-screen flex flex-col items-center justify-center gap-8 px-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-[#1A1A1A] hover:text-[#C5A059] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#C5A059] transition-colors mt-4"
              >
                Book Consultation
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
