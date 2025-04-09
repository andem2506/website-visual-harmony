
import React from "react";
import { Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { ArrowRight, ArrowLeft, Plus, Heart, ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// Add this route to App.tsx
// <Route path="/design-system" element={<DesignSystem />} />

const DesignSystem = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-raleway font-semibold mb-8">Design System</h1>
          <p className="text-lg text-bamboo-text-light max-w-3xl mb-12">
            This page showcases the components and styles used throughout the Bamboo Store website.
            The design system ensures consistency and helps maintain the brand identity across all pages.
          </p>
          
          {/* Colors */}
          <section className="mb-16">
            <h2 className="section-title">Colors</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div>
                <div className="h-24 bg-bamboo-beige rounded-t-lg"></div>
                <div className="p-3 bg-white rounded-b-lg shadow-sm">
                  <h4 className="font-medium">Beige</h4>
                  <p className="text-xs text-bamboo-text-light">#F5F1EA</p>
                </div>
              </div>
              <div>
                <div className="h-24 bg-bamboo rounded-t-lg"></div>
                <div className="p-3 bg-white rounded-b-lg shadow-sm">
                  <h4 className="font-medium">Bamboo</h4>
                  <p className="text-xs text-bamboo-text-light">#9C7B61</p>
                </div>
              </div>
              <div>
                <div className="h-24 bg-bamboo-light rounded-t-lg"></div>
                <div className="p-3 bg-white rounded-b-lg shadow-sm">
                  <h4 className="font-medium">Bamboo Light</h4>
                  <p className="text-xs text-bamboo-text-light">#BEA68F</p>
                </div>
              </div>
              <div>
                <div className="h-24 bg-bamboo-dark rounded-t-lg"></div>
                <div className="p-3 bg-white rounded-b-lg shadow-sm">
                  <h4 className="font-medium">Bamboo Dark</h4>
                  <p className="text-xs text-bamboo-text-light">#7A5E48</p>
                </div>
              </div>
              <div>
                <div className="h-24 bg-bamboo-teal rounded-t-lg"></div>
                <div className="p-3 bg-white rounded-b-lg shadow-sm">
                  <h4 className="font-medium">Teal</h4>
                  <p className="text-xs text-bamboo-text-light">#0A5D6A</p>
                </div>
              </div>
              <div>
                <div className="h-24 bg-bamboo-charcoal rounded-t-lg"></div>
                <div className="p-3 bg-white rounded-b-lg shadow-sm">
                  <h4 className="font-medium">Charcoal</h4>
                  <p className="text-xs text-bamboo-text-light">#404040</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Typography */}
          <section className="mb-16">
            <h2 className="section-title">Typography</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl mb-4">Headings (Raleway)</h3>
                <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
                  <div>
                    <h1>Heading 1</h1>
                    <p className="text-sm text-bamboo-text-light">font-raleway, text-4xl md:text-5xl lg:text-6xl</p>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <h2>Heading 2</h2>
                    <p className="text-sm text-bamboo-text-light">font-raleway, text-3xl md:text-4xl lg:text-5xl</p>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <h3>Heading 3</h3>
                    <p className="text-sm text-bamboo-text-light">font-raleway, text-2xl md:text-3xl</p>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <h4>Heading 4</h4>
                    <p className="text-sm text-bamboo-text-light">font-raleway, text-xl md:text-2xl</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl mb-4">Body Text (Open Sans)</h3>
                <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
                  <div>
                    <p className="text-base">Body Text - Regular</p>
                    <p className="text-sm text-bamboo-text-light">font-opensans, text-base</p>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <p className="text-sm">Small Text</p>
                    <p className="text-sm text-bamboo-text-light">font-opensans, text-sm</p>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <p className="text-xs">Extra Small Text</p>
                    <p className="text-sm text-bamboo-text-light">font-opensans, text-xs</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Buttons */}
          <section className="mb-16">
            <h2 className="section-title">Buttons</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl mb-4">Variants</h3>
                <div className="flex flex-wrap gap-4 bg-white p-6 rounded-lg shadow-sm">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4 bg-white p-6 rounded-lg shadow-sm">
                  <Button variant="primary" size="sm">Small Button</Button>
                  <Button variant="primary" size="md">Medium Button</Button>
                  <Button variant="primary" size="lg">Large Button</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl mb-4">With Icons</h3>
                <div className="flex flex-wrap gap-4 bg-white p-6 rounded-lg shadow-sm">
                  <Button variant="primary" className="flex items-center gap-2">
                    Next <ArrowRight size={16} />
                  </Button>
                  <Button variant="secondary" className="flex items-center gap-2">
                    <ArrowLeft size={16} /> Back
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Plus size={16} /> Add New
                  </Button>
                  <Button variant="primary" className="flex items-center gap-2">
                    <Heart size={16} /> Favorite
                  </Button>
                  <Button variant="primary" className="flex items-center gap-2">
                    <ShoppingCart size={16} /> Add to Cart
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl mb-4">Full Width</h3>
                <div className="space-y-3 bg-white p-6 rounded-lg shadow-sm">
                  <Button variant="primary" fullWidth>
                    Full Width Primary Button
                  </Button>
                  <Button variant="secondary" fullWidth>
                    Full Width Secondary Button
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DesignSystem;
