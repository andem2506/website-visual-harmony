
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bamboo-charcoal text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="font-raleway font-medium text-xl mb-4">About Bamboo</h4>
            <p className="text-gray-300 mb-4">
              Our vision is to revolutionize the way bamboo is seen and used by bringing
              India its first eco-friendly yet inventive and aesthetic bamboo-built options.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-white hover:text-bamboo-teal transition-colors">
                <Instagram size={20} />
              </Link>
              <Link to="#" className="text-white hover:text-bamboo-teal transition-colors">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="text-white hover:text-bamboo-teal transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-raleway font-medium text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-gray-300 hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-raleway font-medium text-xl mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-raleway font-medium text-xl mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-bamboo-teal shrink-0 mt-1" />
                <span className="text-gray-300">123 Eco Street, Green City, Earth</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-bamboo-teal shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-bamboo-teal shrink-0" />
                <span className="text-gray-300">hello@bamboostore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Bamboo Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
