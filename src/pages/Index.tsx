
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";

const Index = () => {
  // Sample product data
  const featuredProducts = [
    {
      id: "1",
      name: "Lampus",
      imageUrl: "/public/lovable-uploads/f4894635-3dde-420b-9528-09e2026b85c4.png",
      category: "Lighting",
      price: 89.99,
    },
    {
      id: "2",
      name: "Lampus Air Pro",
      imageUrl: "/public/lovable-uploads/f4894635-3dde-420b-9528-09e2026b85c4.png",
      category: "Lighting",
      price: 129.99,
    },
    {
      id: "3",
      name: "Tabloin",
      imageUrl: "/public/lovable-uploads/f4894635-3dde-420b-9528-09e2026b85c4.png",
      category: "Furniture",
      price: 199.99,
    },
    {
      id: "4",
      name: "Olympus Max",
      imageUrl: "/public/lovable-uploads/f4894635-3dde-420b-9528-09e2026b85c4.png",
      category: "Furniture",
      price: 249.99,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title="Store"
          description="Our vision is to revolutionize the way bamboo is seen and used by bringing India its first eco-friendly yet inventive and aesthetic bamboo-built options. We aspire to challenge ourselves by fashioning products that are not only sustainable or aesthetic but individualistically revolutionary."
          imageUrl="/public/lovable-uploads/f4894635-3dde-420b-9528-09e2026b85c4.png"
        />
        
        {/* Featured Products */}
        <ProductSection title="Featured Products" products={featuredProducts} />
        
        {/* Sustainability Section */}
        <section className="py-16 bg-bamboo-teal/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-raleway font-medium mb-4">
                  Sustainable by Design
                </h2>
                <p className="mb-6 text-bamboo-text-light">
                  Bamboo is one of the most sustainable materials on the planet. It grows rapidly, 
                  requires minimal water, and absorbs carbon dioxide. Our bamboo products are 
                  crafted with care to ensure durability and minimal environmental impact.
                </p>
                <Button variant="primary" className="flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Button>
              </div>
              <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-bamboo-beige rounded text-center">
                    <h3 className="text-3xl font-raleway font-medium text-bamboo-teal mb-2">50%</h3>
                    <p className="text-sm text-bamboo-text-light">Less carbon footprint than wood</p>
                  </div>
                  <div className="p-4 bg-bamboo-beige rounded text-center">
                    <h3 className="text-3xl font-raleway font-medium text-bamboo-teal mb-2">30x</h3>
                    <p className="text-sm text-bamboo-text-light">Faster growth than hardwood trees</p>
                  </div>
                  <div className="p-4 bg-bamboo-beige rounded text-center">
                    <h3 className="text-3xl font-raleway font-medium text-bamboo-teal mb-2">100%</h3>
                    <p className="text-sm text-bamboo-text-light">Biodegradable material</p>
                  </div>
                  <div className="p-4 bg-bamboo-beige rounded text-center">
                    <h3 className="text-3xl font-raleway font-medium text-bamboo-teal mb-2">2x</h3>
                    <p className="text-sm text-bamboo-text-light">More durable than oak</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-bamboo-charcoal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-raleway font-medium mb-4">
              Join Our Newsletter
            </h2>
            <p className="mb-6 text-gray-300 max-w-md mx-auto">
              Stay updated with our latest products, sustainable initiatives, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded flex-grow focus:outline-none focus:ring-2 focus:ring-bamboo-teal"
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
