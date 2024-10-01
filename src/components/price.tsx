import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PricingSection: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const exchangeRate = 84; // 1 USD = 75 INR (approximation, you may want to use a real-time API for accuracy)

  const handleBookMeeting = () => {
    window.open('https://calendar.app.google/zfYjABPHgr233E936', '_blank');
  };

  const convertPrice = (priceUSD: number) => {
    if (currency === 'USD') return `$${priceUSD}`;
    return `₹${(priceUSD * exchangeRate).toLocaleString('en-IN')}`;
  };

  return (
    <section className="relative py-20 bg-black text-gray-800 min-h-screen flex items-center border-t-2 border-indigo-600" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Choose Your Plan</h2>
        <div className="flex justify-center mb-8">
          <Select value={currency} onValueChange={(value: 'USD' | 'INR') => setCurrency(value)} >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent className='bg-white'>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="INR">INR</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan Card */}
          <Card className="w-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6">
              <h3 className="text-2xl font-bold">Basic Plan</h3>
            </CardHeader>
            <CardContent className="p-6 h-[75%]">
              <p className="text-4xl font-bold mb-6">{convertPrice(499)}</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>1000 AI tickets</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>GPT-4o Powered AI Chatbot</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Advanced Widget Customizations</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Enhanced Copilot Ticketing System</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Advanced Real-time Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Unlimited Page Ingestion</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Multi-Lingual Bot</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="bg-gray-50 p-6">
              <Button onClick={handleBookMeeting} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full py-2 px-4">Contact Sales</Button>
            </CardFooter>
          </Card>

          {/* Enterprise Card */}
          <Card className="w-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6">
              <h3 className="text-2xl font-bold">Enterprise</h3>
            </CardHeader>
            <CardContent className="p-6 h-[75%]">
              <p className="text-4xl font-bold mb-6">Custom Pricing</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Unlimited AI tickets</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>GPT-4o Powered AI Chatbot</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Advanced Widget Customizations</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Enhanced Copilot Ticketing System</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Advanced Real-time Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Unlimited Page Ingestion</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Multi-Lingual Bot</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Highest Priority Support (24/7)</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Advanced API access</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Custom Integrations</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="bg-gray-50 p-6">
              <Button onClick={handleBookMeeting} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full py-2 px-4">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;