import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Privacy Policy - Yugaa AI</title>
        <meta name="description" content="Privacy Policy for Yugaa AI" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy for Yugaa AI</h1>
        
        <div className="bg-black shadow-md rounded-lg p-6 mb-8">
          <p className="text-white mb-4">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
            <p className="text-white mb-4">
              Welcome to Yugaa AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), a product of QYTHERION TECHNOLOGIES PRIVATE LIMITED. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered customer support service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
            <p className="text-white mb-4">We may collect the following types of information:</p>
            <ul className="list-disc list-inside text-white mb-4">
              <li className="mb-2"><span className="font-semibold">Personal Information:</span> Name, email address, phone number, and other contact details you provide.</li>
              <li className="mb-2"><span className="font-semibold">Usage Data:</span> Information on how you use our service, including chat logs, feature usage, and interaction data.</li>
              <li className="mb-2"><span className="font-semibold">Technical Data:</span> IP address, browser type, device information, and other technical details.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
            <p className="text-white mb-4">We use your information to:</p>
            <ul className="list-disc list-inside text-white mb-4">
              <li>Provide and maintain our AI-powered customer support service</li>
              <li>Improve and personalize user experience</li>
              <li>Analyze usage patterns and optimize our AI algorithms</li>
              <li>Communicate with you about our service and provide customer support</li>
              <li>Comply with legal obligations</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Sharing and Disclosure</h2>
            <p className="text-white mb-4">We may share your information with:</p>
            <ul className="list-disc list-inside text-white mb-4">
              <li>Service providers who assist us in operating our business and providing our services</li>
              <li>Law enforcement or other authorities when required by law</li>
              <li>Business partners, with your consent, for specific purposes</li>
            </ul>
            <p className="text-white mb-4">We do not sell your personal information to third parties.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
            <p className="text-white mb-4">
              We implement appropriate technical and organizational measures to protect your data. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Rights</h2>
            <p className="text-white mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside text-white mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
            </ul>
            <p className="text-white mb-4">
              To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Children&apos;s Privacy</h2>
            <p className="text-white mb-4">
              Our service is not intended for children under 13. We do not knowingly collect or maintain personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information as soon as possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Changes to This Policy</h2>
            <p className="text-white mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Contact Us</h2>
            <p className="text-white mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <address className="text-white not-italic">
              QYTHERION TECHNOLOGIES PRIVATE LIMITED<br />
              881, Azad Nagar, Roorke, Uttarakhand, India<br />
              Email: vishal@yugaa.tech<br />
              Phone: +917017412845
            </address>
          </section>
        </div>

        <div className="text-center">
          <Link href="/" className="text-white hover:text-indigo-800 transition-colors duration-200">
            Return to Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;