import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

type ReplyOption = '900' | '2500' | '8000' | '20000';

interface PriceMap {
  [key: string]: number;
}

const PricingSection: React.FC = () => {
  const [selectedReplies, setSelectedReplies] = useState<ReplyOption>('2500');

  const getPriceForReplies = (replies: ReplyOption): number => {
    const priceMap: PriceMap = {
      '900': 8,
      '2500': 19,
      '8000': 49,
      '20000': 99,
    };
    return priceMap[replies] || 0;
  };

  const handleBookMeeting = () => {
    // Replace this URL with your actual Google Calendar booking link
    window.open('https://calendar.app.google/zfYjABPHgr233E936', '_blank');
  };

  const handleSignUp = () => {
    // Replace this URL with your actual sign-up link
    window.open('https://app.yugaa.tech/sign-up', '_blank');
  };


  return (
    <section className="relative py-20 bg-black text-gray-800 min-h-screen flex items-center border-t-2 border-indigo-600" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Choose Your Plan</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Variable Pricing Card */}
          <Card className="w-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6">
              <h3 className="text-2xl font-bold">Flexible Plan</h3>
            </CardHeader>
            <CardContent className="p-6 h-[75%]">
              <div className="mb-6">
                <p className="text-lg mb-2 font-semibold">Select number of replies:</p>
                <Select onValueChange={(value: ReplyOption) => setSelectedReplies(value)} defaultValue={selectedReplies}>
                  <SelectTrigger className="w-full bg-white border-gray-300">
                    <SelectValue placeholder="Select replies" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="900">900 replies</SelectItem>
                    <SelectItem value="2500">2,500 replies</SelectItem>
                    <SelectItem value="8000">8,000 replies</SelectItem>
                    <SelectItem value="20000">20,000 replies</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className="text-4xl font-bold mb-6">${getPriceForReplies(selectedReplies)}<span className="text-xl font-normal">/month</span></p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>{selectedReplies} AI replies</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>GPT-4o Powered AI Chatbot</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Widget Customizations</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Copilot Ticketing System</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Real-time Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Multi-Lingual Bot</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>Basic support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="bg-gray-50 p-6">
              <Button onClick={handleSignUp} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full py-2 px-4">Get Started</Button>
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
                  <span>Unlimited AI replies</span>
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