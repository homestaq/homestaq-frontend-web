import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Adebayo Ogundimu",
      location: "Lagos",
      rating: 5,
      text: "Homestaq saved me months of searching! I found my perfect 2-bedroom apartment in Ikeja within a week. No agent fees, no inspection hassles - just straight to the point.",
      role: "Software Engineer",
    },
    {
      name: "Fatima Abdullahi",
      location: "Abuja",
      rating: 5,
      text: "As a young professional moving to Abuja, I was worried about house hunting. Homestaq made it so easy! Direct contact with landlords and transparent pricing.",
      role: "Marketing Manager",
    },
    {
      name: "Chinedu Okwu",
      location: "Port Harcourt",
      rating: 5,
      text: "I've used other platforms before, but Homestaq is different. All properties are verified, and there are no surprise charges. Highly recommended!",
      role: "Business Owner",
    },
    {
      name: "Aisha Mohammed",
      location: "Kano",
      rating: 5,
      text: "The search filters are amazing! I was able to find a family house that met all our needs within our budget. The process was seamless from start to finish.",
      role: "Teacher",
    },
    {
      name: "Emeka Nwankwo",
      location: "Lagos",
      rating: 5,
      text: "Homestaq eliminated all the stress of house hunting. Clear photos, verified listings, and direct communication with property owners. Game changer!",
      role: "Financial Analyst",
    },
    {
      name: "Blessing Okafor",
      location: "Abuja",
      rating: 5,
      text: "I found my dream apartment in just 3 days! The platform is user-friendly, and the customer support team was very helpful throughout the process.",
      role: "Graphic Designer",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative bg-[#010101] py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-white text-[48px] font-normal leading-[60px] tracking-[-1.68px]">
            What Our Users Say
          </h2>
          <p className="text-[#c3c3c3] text-base leading-6 max-w-[529px] mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what thousands of
            satisfied Nigerians say about their Homestaq experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 group hover:bg-white/5 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-[#7b0dae]/30 mb-4" />

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#c3c3c3] text-base leading-6 mb-6">
                &quot;{testimonial.text}&quot;
              </p>

              {/* User Info */}
              <div className="border-t border-white/5 pt-4">
                <div className="text-white font-medium text-base">
                  {testimonial.name}
                </div>
                <div className="text-[#c3c3c3] text-sm">{testimonial.role}</div>
                <div className="text-[#7b0dae] text-sm">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 glass-card rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-normal text-[#7b0dae] tracking-[-1.44px] mb-2">
                4.9/5
              </div>
              <div className="text-white text-base font-medium">
                Average Rating
              </div>
              <div className="text-[#c3c3c3] text-sm">From 10,000+ Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-normal text-[#7b0dae] tracking-[-1.44px] mb-2">
                95%
              </div>
              <div className="text-white text-base font-medium">
                Success Rate
              </div>
              <div className="text-[#c3c3c3] text-sm">
                Users Find Their Home
              </div>
            </div>
            <div>
              <div className="text-3xl font-normal text-[#7b0dae] tracking-[-1.44px] mb-2">
                7 Days
              </div>
              <div className="text-white text-base font-medium">
                Average Time
              </div>
              <div className="text-[#c3c3c3] text-sm">
                From Search to Move-in
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
