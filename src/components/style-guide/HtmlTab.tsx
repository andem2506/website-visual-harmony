
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CodeBlock from "@/components/CodeBlock";

const HtmlTab = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <section className="mb-10">
          <h2 className="text-2xl font-raleway font-medium mb-4">Component HTML Structure</h2>
          <p className="text-bamboo-text-light mb-6">
            Example HTML structure for key components in the Bamboo design system.
          </p>

          <h3 className="text-xl font-raleway font-medium mb-3">Hero Component</h3>
          <CodeBlock 
            language="html"
            code={`<div class="container mx-auto py-12 px-4">
  <div class="flex flex-col md:flex-row items-center md:space-x-12">
    <!-- Content -->
    <div class="md:w-1/2 space-y-6 mb-8 md:mb-0">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-raleway font-semibold text-bamboo-charcoal">
        Title Goes Here
      </h1>
      <p class="text-bamboo-text-light text-lg max-w-lg">
        Description text goes here. This explains the purpose of this section.
      </p>
    </div>

    <!-- Image -->
    <div class="md:w-1/2">
      <img 
        src="path-to-image.jpg" 
        alt="Hero Banner" 
        class="rounded-lg shadow-md w-full h-auto object-cover" 
      />
    </div>
  </div>
</div>`} 
          />

          <h3 className="text-xl font-raleway font-medium mt-8 mb-3">Product Card</h3>
          <CodeBlock 
            language="html"
            code={`<div class="product-card bg-white">
  <img 
    src="product-image.jpg"
    alt="Product Name" 
    class="product-image" 
  />
  <div class="p-4">
    <p class="text-sm text-bamboo-text-light">{category}</p>
    <h3 class="product-title">{name}</h3>
    <p class="product-price">${24.99}</p>
    <button class="btn-primary w-full mt-4">Add to Cart</button>
  </div>
</div>`} 
          />

          <h3 className="text-xl font-raleway font-medium mt-8 mb-3">Button Styles</h3>
          <CodeBlock 
            language="html"
            code={`<!-- Primary Button -->
<button class="btn-primary">Primary Button</button>

<!-- Secondary Button -->
<button class="btn-secondary">Secondary Button</button>

<!-- Ghost Button -->
<button class="bg-transparent text-bamboo-charcoal hover:bg-bamboo-beige transition-colors duration-300 px-4 py-2">
  Ghost Button
</button>`} 
          />
        </section>
      </CardContent>
    </Card>
  );
};

export default HtmlTab;
