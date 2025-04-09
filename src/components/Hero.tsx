
import React from "react";

interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Hero = ({ title, description, imageUrl }: HeroProps) => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        {/* Content */}
        <div className="md:w-1/2 space-y-6 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-raleway font-semibold text-bamboo-charcoal">
            {title}
          </h1>
          <p className="text-bamboo-text-light text-lg max-w-lg">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img 
            src={imageUrl} 
            alt="Hero Banner" 
            className="rounded-lg shadow-md w-full h-auto object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
