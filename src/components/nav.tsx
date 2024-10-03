import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Montserrat_Alternates } from 'next/font/google';

const montserratAlternates = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['700'],  // You can add more weights if needed
  })
  

interface NavProps {
  scrolled: boolean;
}

const Navigation: React.FC<NavProps> = (
  // { scrolled }
) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing & Services' },
  ];

  // const handleBookMeeting = () => {
  //   // Replace this URL with your actual Google Calendar booking link
  //   window.open('https://calendar.app.google/zfYjABPHgr233E936', '_blank');
  // };

  return (
    <div className="px-4">
      <div className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <span className={`text-2xl font-bold text-white ${montserratAlternates.className}`}>Yugaa</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:bg-neutral-800 p-2 px-4 rounded-full text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex space-x-2">
          <Link href="https://app.yugaa.tech/sign-in" className={`hover:bg-neutral-800 p-2 px-4 rounded-full text-white`}>
            Login
          </Link>
          {/* <Button onClick={handleBookMeeting} className={`rounded-full ${scrolled ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-neutral-900 text-white'}`}>
            Book Demo
          </Button> */}
        </div>

        {/* Mobile Hamburger Icon */}
        <button className="md:hidden text-white" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-black transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
          <button className="text-white" onClick={toggleSidebar}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4 bg-black h-screen">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-white hover:bg-neutral-800 p-2 rounded" onClick={toggleSidebar}>
              {item.label}
            </Link>
          ))}
          <Link href="https://app.yugaa.tech/sign-in" className="text-white hover:bg-neutral-800 p-2 rounded" onClick={toggleSidebar}>
            Login
          </Link>
          <Button className={`rounded-full bg-neutral-900 text-white`} onClick={toggleSidebar}>
            Book Demo
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;