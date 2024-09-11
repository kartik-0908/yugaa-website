import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Terms of Service - Yugaa AI</title>
        <meta name="description" content="Terms of Service for Yugaa AI" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service for Yugaa AI</h1>
        
        <div className="bg-black shadow-md rounded-lg p-6 mb-8">
          <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-white mb-4">
              By accessing or using the Yugaa AI service (&quot;Service&quot;) provided by QYTHERION TECHNOLOGIES PRIVATE LIMITED (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of the terms, you may not access the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Service</h2>
            <p className="text-white mb-4">
              Yugaa AI is an AI-powered customer support service that provides automated responses to customer inquiries. The Service may include features such as chatbots, automated ticketing systems, and analytics tools.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. User Accounts</h2>
            <p className="text-white mb-4">
              To use certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. User Obligations</h2>
            <p className="text-white mb-4">You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc list-inside text-white mb-4">
              <li>Use the Service in any way that violates any applicable laws or regulations</li>
              <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation with a person or entity</li>
              <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
              <li>Attempt to gain unauthorized access to any portion of the Service or any other systems or networks connected to the Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Intellectual Property</h2>
            <p className="text-white mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of QYTHERION TECHNOLOGIES PRIVATE LIMITED and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Payment and Subscription</h2>
            <p className="text-white mb-4">
              Certain features of the Service may require payment of fees. You agree to pay all fees associated with your use of the Service. We reserve the right to change our fees upon reasonable notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Limitation of Liability</h2>
            <p className="text-white mb-4">
              In no event shall QYTHERION TECHNOLOGIES PRIVATE LIMITED, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Disclaimer</h2>
            <p className="text-white mb-4">
              Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is provided without warranties of any kind, whether express or implied.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Governing Law</h2>
            <p className="text-white mb-4">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Changes to Terms</h2>
            <p className="text-white mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">11. Contact Us</h2>
            <p className="text-white mb-4">
              If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;