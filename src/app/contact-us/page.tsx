import React from 'react';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-black">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Contact Us</h1>

        <div className="bg-black shadow-md rounded-lg p-6 mb-8">
          <p className="text-white mb-4">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <p className="text-white mb-4">
              Contact Us
              You may contact us using the information below:


            </p>
          </section>

          <section className="mb-8">
            <p className="text-white mb-4">
              Merchant Legal entity name: QYTHERION TECHNOLOGIES PRIVATE LIMITED
            </p>
            <p className="text-white mb-4">
              Registered Address: 881, Azad Nagar, Roorkee, Roorkee, Uttarakhand, PIN: 247667

            </p>
            <p className="text-white mb-4">
              Operational Address: 881, Azad Nagar, Roorkee, Roorkee, Uttarakhand, PIN: 247667
            </p>
            <p className="text-white mb-4">
              Telephone No: 7017412845
            </p>
            <p className="text-white mb-4">
              E-Mail ID: sales@yugaa.tech
            </p>
          </section>
          <Link href="/" className="text-white hover:text-indigo-800 transition-colors duration-200">
            Return to Home
          </Link>
        </div>
      </main>
    </div>
  );
};
