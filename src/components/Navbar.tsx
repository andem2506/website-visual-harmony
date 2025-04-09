
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-bamboo-beige py-4 border-b border-bamboo-light/30">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Link to="/" className="flex flex-col">
            <span className="text-sm text-bamboo-text-light">Shop</span>
            <span className="text-4xl font-raleway font-semibold text-bamboo-charcoal">Bamboo</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8 items-center">
          <Link to="/community" className="nav-link">
            Community
          </Link>
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/cart" className="nav-link flex items-center gap-1">
            <ShoppingCart size={18} />
            <span>Cart</span>
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>

          {/* Social Icons */}
          <div className="flex gap-3 items-center">
            <Link to="#" className="text-bamboo-charcoal hover:text-bamboo-teal transition-colors">
              <Instagram size={18} />
            </Link>
            <Link to="#" className="text-bamboo-charcoal hover:text-bamboo-teal transition-colors">
              <Twitter size={18} />
            </Link>
            <Link to="#" className="text-bamboo-charcoal hover:text-bamboo-teal transition-colors">
              <Facebook size={18} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
