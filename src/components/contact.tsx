import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from 'lucide-react';

const ContactSection: React.FC = () => {
  const handleBookMeeting = () => {
    // Replace this URL with your actual Google Calendar booking link
    window.open('https://calendar.app.google/zfYjABPHgr233E936', '_blank');
  };

  return (
    <section id='contact' className="relative py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center z-10">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Customer Support?</h2>
        <p className="text-xl mb-8">Join businesses already using Yugaa AI</p>
       
        <div className="mt-8">
          {/* <h3 className="text-2xl font-semibold mb-4">Want to discuss further?</h3> */}
          <Button 
            onClick={handleBookMeeting}
            className="rounded-full bg-white text-indigo-600 hover:bg-indigo-100 px-6 py-3 flex items-center justify-center mx-auto"
          >
            <Calendar className="mr-2" />
            Book a Meeting
          </Button>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;