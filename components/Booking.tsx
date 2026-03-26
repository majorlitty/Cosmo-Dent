'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consultationType, setConsultationType] = useState('in-person');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would send the form data to your backend here
  };

  return (
    <section id="booking" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-[#FDFBF7] rounded-[3rem] border border-[#E5E0D8] overflow-hidden shadow-2xl shadow-[#C5A059]/5 flex flex-col lg:flex-row min-h-[700px]">
          
          {/* Form Side */}
          <div className="p-10 md:p-16 lg:w-1/2 relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-4">
                      Start Your <span className="italic text-[#C5A059]">Smile Transformation</span>
                    </h2>
                    <p className="text-[#7A7A7A] text-sm font-light">
                      Request a private consultation with our aesthetic specialists. Our team will contact you within 24 hours to confirm your appointment.
                    </p>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full bg-white border border-[#E5E0D8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-colors"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          className="w-full bg-white border border-[#E5E0D8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-white border border-[#E5E0D8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-colors"
                        placeholder="jane@example.com"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="treatment" className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">Treatment Interest</label>
                        <select
                          id="treatment"
                          required
                          className="w-full bg-white border border-[#E5E0D8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-colors appearance-none"
                        >
                          <option value="">Select a treatment</option>
                          <option value="veneers">Porcelain Veneers</option>
                          <option value="makeover">Smile Makeover</option>
                          <option value="whitening">Professional Whitening</option>
                          <option value="implants">Dental Implants</option>
                          <option value="invisalign">Invisalign</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="type" className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">Consultation Type</label>
                        <select
                          id="type"
                          required
                          value={consultationType}
                          onChange={(e) => setConsultationType(e.target.value)}
                          className="w-full bg-white border border-[#E5E0D8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-colors appearance-none"
                        >
                          <option value="in-person">In-Clinic Consultation</option>
                          <option value="virtual">Virtual Video Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">Additional Notes</label>
                      <textarea
                        id="message"
                        rows={3}
                        className="w-full bg-white border border-[#E5E0D8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-colors resize-none"
                        placeholder="Tell us about your smile goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl font-medium hover:bg-[#C5A059] transition-all duration-300 shadow-lg shadow-transparent hover:shadow-[#C5A059]/20"
                    >
                      Request Consultation
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 md:p-16 bg-[#FDFBF7]"
                >
                  <div className="w-20 h-20 rounded-full bg-white border border-[#E5E0D8] flex items-center justify-center mb-6 shadow-xl shadow-[#C5A059]/10">
                    <CheckCircle2 size={40} className="text-[#C5A059]" />
                  </div>
                  <h3 className="text-3xl font-serif text-[#1A1A1A] mb-4">Request Received</h3>
                  <p className="text-[#7A7A7A] leading-relaxed mb-8 max-w-sm">
                    Thank you for reaching out. Our concierge team will contact you shortly to confirm your {consultationType === 'virtual' ? 'virtual video' : 'in-clinic'} consultation details.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm font-semibold text-[#C5A059] uppercase tracking-wider hover:text-[#1A1A1A] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Image Side */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <Image
              src="https://picsum.photos/seed/clinic-luxury/800/1000"
              alt="Luxury dental clinic interior"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#FDFBF7]" />
          </div>
        </div>
      </div>
    </section>
  );
}
