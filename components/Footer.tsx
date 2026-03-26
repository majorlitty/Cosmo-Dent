import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 border-t border-[#3A3A3A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-tight text-white">
                Cosmo <span className="text-[#C5A059] italic">Dent</span>
              </span>
            </Link>
            <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">
              A luxury smile design studio dedicated to aesthetic excellence, precision medicine, and unparalleled patient experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#3A3A3A] flex items-center justify-center text-[#A0A0A0] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#3A3A3A] flex items-center justify-center text-[#A0A0A0] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#3A3A3A] flex items-center justify-center text-[#A0A0A0] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Treatments</h4>
            <ul className="space-y-4">
              <li><Link href="#treatments" className="text-[#A0A0A0] hover:text-[#C5A059] text-sm transition-colors">Porcelain Veneers</Link></li>
              <li><Link href="#treatments" className="text-[#A0A0A0] hover:text-[#C5A059] text-sm transition-colors">Smile Makeovers</Link></li>
              <li><Link href="#treatments" className="text-[#A0A0A0] hover:text-[#C5A059] text-sm transition-colors">Teeth Whitening</Link></li>
              <li><Link href="#treatments" className="text-[#A0A0A0] hover:text-[#C5A059] text-sm transition-colors">Invisalign</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-[#A0A0A0]">
              <li>1-800-SMILE-DESIGN</li>
              <li>hello@cosmodent.luxury</li>
              <li>450 Beverly Hills Blvd,<br />Suite 200, CA 90210</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg mb-6">Hours</h4>
            <ul className="space-y-4 text-sm text-[#A0A0A0]">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 4:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-[#3A3A3A] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A0A0A0] text-xs">
            &copy; {new Date().getFullYear()} Cosmo Dent Luxury Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[#A0A0A0] hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[#A0A0A0] hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
