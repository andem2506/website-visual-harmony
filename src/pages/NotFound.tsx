
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl md:text-8xl font-raleway font-bold text-bamboo-teal mb-4">404</h1>
          <h2 className="text-3xl font-raleway font-medium text-bamboo-charcoal mb-4">Page Not Found</h2>
          <p className="text-bamboo-text-light mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button variant="primary" className="flex items-center justify-center gap-2 mx-auto">
              <Home size={18} />
              Return Home
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
