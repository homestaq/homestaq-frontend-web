import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="relative bg-[#010101]">
      {/* Final CTA Section */}
      <div className="glass-card rounded-3xl mx-6 lg:mx-8 mb-12 p-8 text-center">
        <h3 className="text-white text-2xl font-normal leading-8 tracking-[-1.2px] mb-4">
          Ready to Find Your Dream Home?
        </h3>
        <p className="text-[#c3c3c3] text-base leading-6 mb-6 max-w-md mx-auto">
          Join thousands of Nigerians who have found their perfect homes with Homestaq.
        </p>
        <button className="bg-white text-[#02071a] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
          Get Started Now
        </button>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-medium text-white tracking-[-1.2px] mb-6">
              Homestaq
            </div>
            <p className="text-[#c3c3c3] text-base leading-6 mb-6 max-w-md">
              Homestaq is revolutionizing house hunting in Nigeria by providing a transparent, 
              efficient, and hassle-free platform for finding your perfect home.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#7b0dae]" />
                <span className="text-[#c3c3c3] text-base">hello@homestaq.ng</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#7b0dae]" />
                <span className="text-[#c3c3c3] text-base">+234 (0) 800-HOMESTAQ</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#7b0dae]" />
                <span className="text-[#c3c3c3] text-base">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-[#c3c3c3] hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#how-it-works" className="text-[#c3c3c3] hover:text-white transition-colors duration-300">How It Works</a></li>
              <li><a href="#testimonials" className="text-[#c3c3c3] hover:text-white transition-colors duration-300">Testimonials</a></li>
              <li><a href="#" className="text-[#c3c3c3] hover:text-white transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="text-[#c3c3c3] hover:text-white transition-colors duration-300">About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#c3c3c3] hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-[#c3c3c3] hover:text-white transition-colors duration-300">Contact Support</a></li>
              <li><a href="#" className="text-[#c3c3c3] hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-[#c3c3c3] hover:text-white transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-[#c3c3c3] hover:text-white transition-colors duration-300">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            {/* Links */}
            <div className="flex items-center gap-3 text-[#c3c3c3] text-base">
              <span>House Listings</span>
              <span>·</span>
              <span>Property Search</span>
              <span>·</span>
              <span>Homestaq.ng</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-[#c3c3c3] hover:text-[#7b0dae] transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#c3c3c3] hover:text-[#7b0dae] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#c3c3c3] hover:text-[#7b0dae] transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#c3c3c3] hover:text-[#7b0dae] transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-5">
            <div className="flex items-center justify-center gap-1 text-base">
              <span className="text-[#c3c3c3]">© 2024 Homestaq by</span>
              <span className="text-white font-medium">Team Homestaq</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}