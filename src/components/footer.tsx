import React from 'react';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-800 text-white py-12 z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex flex-col items-center md:items-start">
              <span className="text-3xl font-bold text-indigo-400 mb-2">Yugaa AI</span>
              <span className="text-sm text-gray-400">by QYTHERION TECHNOLOGIES PRIVATE LIMITED</span>
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
            <Link href="#" className="hover:text-indigo-400 transition-colors duration-200">Home</Link>
            <Link href="#features" className="hover:text-indigo-400 transition-colors duration-200">Features</Link>
            <Link href="#pricing" className="hover:text-indigo-400 transition-colors duration-200">Pricing</Link>
            <Link href="/contact-us" className="hover:text-indigo-400 transition-colors duration-200">Contact Us</Link>
            <Link href="/privacy-policy" className="hover:text-indigo-400 transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-400 transition-colors duration-200">Terms of Service</Link>
          </nav>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left text-gray-400">
            <p>© {new Date().getFullYear()} Yugaa AI. All rights reserved.</p>
            <p className="mt-2 text-sm">A product of QYTHERION TECHNOLOGIES PRIVATE LIMITED</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="https://www.linkedin.com/company/yugaaai/posts/?feedView=all" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;