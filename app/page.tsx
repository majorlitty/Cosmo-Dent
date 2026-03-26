import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Treatments from '@/components/Treatments';
import Results from '@/components/Results';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      <Navbar />
      <Hero />
      <Philosophy />
      <Treatments />
      <Results />
      <Experience />
      <Testimonials />
      <Booking />
      
      {/* Final Call to Action */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/smile-final/1920/1080"
            alt="Confident smiling patient"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-8">
            Your Perfect Smile <span className="italic text-[#C5A059]">Starts Here</span>
          </h2>
          <Link
            href="#booking"
            className="inline-flex justify-center items-center bg-[#C5A059] text-white px-10 py-5 rounded-full text-sm font-medium hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 shadow-xl shadow-[#C5A059]/20"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
