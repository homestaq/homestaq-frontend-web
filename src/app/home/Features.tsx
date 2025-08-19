import { Shield, Clock, DollarSign, Search, Users, MapPin } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Verified Properties',
      description: 'Every property is thoroughly verified and authenticated before listing. No fake properties or scam listings.',
    },
    {
      icon: DollarSign,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no surprise charges, inspection fees, or unnecessary middleman costs.',
    },
    {
      icon: Clock,
      title: 'Quick Process',
      description: 'Find and secure your dream home in days, not months. Streamlined process from search to move-in.',
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Advanced filters to find exactly what you want - location, budget, amenities, and more.',
    },
    {
      icon: Users,
      title: 'Direct Contact',
      description: 'Connect directly with property owners and agents. No unnecessary middlemen or intermediaries.',
    },
    {
      icon: MapPin,
      title: 'All Major Cities',
      description: 'Properties available across Lagos, Abuja, Port Harcourt, Kano, and other major Nigerian cities.',
    }
  ];

  return (
    <section id="features" className="relative bg-[#010101] py-20 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-white text-[48px] font-normal leading-[60px] tracking-[-1.68px]">
            Why Choose Homestaq?
          </h2>
          <p className="text-[#c3c3c3] text-base leading-6 max-w-[529px] mx-auto">
            We&apos;ve revolutionized house hunting in Nigeria by eliminating the common pain points 
            and making the process simple, transparent, and efficient.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 group hover:bg-white/5 transition-all duration-300 gradient-border"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-[#7b0dae] transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-normal leading-7 tracking-[-0.8px] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#c3c3c3] text-base leading-6">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[#c3c3c3] text-base leading-6 mb-6">
            Ready to experience hassle-free house hunting?
          </p>
          <button className="bg-white text-[#02071a] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}