import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const CancellationRefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Cancellation & Refund Policy - Yugaa AI</title>
        <meta name="description" content="Cancellation & Refund Policy for Yugaa AI Software Services" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Cancellation & Refund Policy for Yugaa AI</h1>
        
        <div className="bg-black shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Cancellation & Refund Policy</h2>
          <p className="text-gray-600 mb-4">Last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>

          <div className="text-white space-y-4">
            <p>
              QYTHERION TECHNOLOGIES PRIVATE LIMITED is committed to providing high-quality software services to our clients. We have established the following cancellation and refund policy to ensure fairness and transparency in our business operations:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cancellations will be considered only if the request is made within 24 hours of placing the order or signing the service agreement, whichever comes first. Once our team has begun work on your project, cancellations may not be possible.</li>
              <li>For subscription-based services, you may cancel your subscription at any time. However, refunds will only be issued for unused full months of service. Partial months will not be refunded.</li>
              <li>In the event that you are unsatisfied with the quality of our services, please report your concerns to our Customer Support team within 7 days of service delivery. We will thoroughly investigate your complaint and work towards a satisfactory resolution.</li>
              <li>If a refund is approved due to service quality issues, we will provide a full or partial refund based on the extent of the issue and the amount of work completed.</li>
              <li>For custom software development projects, refunds will be considered on a case-by-case basis, depending on the project&apos;s stage and the amount of work completed.</li>
              <li>We do not offer refunds for time spent on consultations, requirements gathering, or any work that has been delivered and approved by the client.</li>
              <li>In cases where QYTHERION TECHNOLOGIES PRIVATE LIMITED is unable to deliver the agreed-upon services due to unforeseen circumstances, a full refund will be issued.</li>
              <li>All approved refunds will be processed within 10-15 business days and will be returned to the original payment method used for the purchase.</li>
            </ul>
            <p>
              We reserve the right to modify this policy at any time. Any changes will be reflected on this page with an updated revision date.
            </p>
          </div>
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

export default CancellationRefundPolicy;