import { ArrowUpRight, Brain, Clock, Database } from 'lucide-react';

const AdditionalFeaturesSection = () => {
    return (
        <section id='features' className="relative py-20 bg-black min-h-screen flex items-center border-t-2 border-indigo-600">
            <div className="container mx-auto px-4 z-10">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">Empowering Your Support Team</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard
                        icon={<Clock className="h-12 w-12 text-white mb-4" />}
                        title="24/7 Customer Support"
                        description="We are available 100% of the time. Our AI agents are always online, ready to assist your customers anytime."
                    />
                    <FeatureCard
                        icon={<ArrowUpRight className="h-12 w-12 text-white mb-4" />}
                        title="10% Escalation Rate"
                        description="Only 10% of queries require human intervention, freeing up your team for complex issues."
                    />
                    <FeatureCard
                        icon={<Brain className="h-12 w-12 text-white mb-4" />}
                        title="AI Copilot"
                        description="AI assists human agents, suggesting responses and actions to boost efficiency."
                    />
                    <FeatureCard
                        icon={<Database className="h-12 w-12 text-white mb-4" />}
                        title="Knowledge Base Integration"
                        description="Seamlessly integrates with your existing knowledge base for accurate, context-aware responses."
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title, description }: { icon: any, title: any, description: any }) => {
    return (
        <div className="p-6 rounded-lg shadow-md transition-all duration-300 
                        border-l-4 border-indigo-600
                        hover:shadow-lg hover:bg-neutral-800 hover:border-l-6 hover:border-indigo-400">
            {icon}
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};


export default AdditionalFeaturesSection;