import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const CancellationRefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Cancellation & Refund Policy - Yugaa AI</title>
        <meta name="description" content="Cancellation & Refund Policy for Yugaa AI" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Cancellation & Refund Policy for Yugaa AI</h1>
        
        <div className="bg-black shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Cancellation & Refund Policy</h2>
          <p className="text-gray-600 mb-4">Last updated on 01-10-2024 12:45:37</p>

          <div className="text-white space-y-4">
            <p>
              QYTHERION TECHNOLOGIES PRIVATE LIMITED believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</li>
              <li>QYTHERION TECHNOLOGIES PRIVATE LIMITED does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.</li>
              <li>In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within Only same day days of receipt of the products.</li>
              <li>In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within Only same day days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</li>
              <li>In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.</li>
              <li>In case of any Refunds approved by the QYTHERION TECHNOLOGIES PRIVATE LIMITED, it&apos;ll take 9-15 Days days for the refund to be processed to the end customer.</li>
            </ul>
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