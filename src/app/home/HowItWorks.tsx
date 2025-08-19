import { Search, Eye, Home, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Search Properties",
      description:
        "Use our smart search to find properties that match your criteria - location, budget, and preferences.",
      step: "01",
    },
    {
      icon: Eye,
      title: "View & Compare",
      description:
        "Browse detailed property listings with photos, virtual tours, and verified information.",
      step: "02",
    },
    {
      icon: Home,
      title: "Move In",
      description:
        "Connect directly with property owners, complete simple paperwork, and move into your new home.",
      step: "03",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative bg-[#010101] py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-white text-[48px] font-normal leading-[60px] tracking-[-1.68px]">
            How Homestaq Works
          </h2>
          <p className="text-[#c3c3c3] text-base leading-6 max-w-[529px] mx-auto">
            Our streamlined process makes finding your perfect home as simple as
            1-2-3. No complications, no hidden steps, just results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <div key={index} className="relative group">
                  <div className="flex items-start space-x-6">
                    {/* Step Icon */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 bg-[#7b0dae] rounded-2xl flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-[#7b0dae] text-sm font-medium">
                            {step.step}
                          </span>
                        </div>
                      </div>
                      {/* Connecting Line */}
                      {!isLast && (
                        <div className="w-0.5 h-16 bg-white/10 ml-8 mt-4"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-white text-xl font-normal leading-7 tracking-[-0.8px] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#c3c3c3] text-base leading-6">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CTA */}
            <div className="pt-8">
              <button className="flex items-center space-x-2 bg-[#7b0dae] hover:bg-[#9d1ac7] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300">
                <span>Start Your Search</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMG5pZ2h0fGVufDF8fHx8MTc1NTU1OTEwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern house search interface"
                className="w-full rounded-2xl"
              />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -left-6 glass-card rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl font-normal text-[#7b0dae] tracking-[-1.44px]">
                  48hrs
                </div>
                <div className="text-sm text-[#c3c3c3] uppercase tracking-[1.44px]">
                  AVG TIME
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl font-normal text-green-400 tracking-[-1.44px]">
                  ₦0
                </div>
                <div className="text-sm text-[#c3c3c3] uppercase tracking-[1.44px]">
                  HIDDEN FEES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
