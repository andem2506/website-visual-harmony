
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CodeBlock from "@/components/CodeBlock";

const CssTab = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <section className="mb-10">
          <h2 className="text-2xl font-raleway font-medium mb-4">CSS Variables & Base Styles</h2>
          <p className="text-bamboo-text-light mb-6">
            The Bamboo design system uses CSS variables to maintain a consistent look and feel across the website.
          </p>
          
          <CodeBlock 
            language="css"
            code={`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 39 29% 95%;
    --foreground: 0 0% 25%;

    --card: 39 29% 95%;
    --card-foreground: 0 0% 25%;

    --popover: 39 29% 95%;
    --popover-foreground: 0 0% 25%;

    --primary: 27 26% 50%;
    --primary-foreground: 39 29% 95%;

    --secondary: 185 76% 23%;
    --secondary-foreground: 39 29% 95%;

    --muted: 27 10% 85%;
    --muted-foreground: 0 0% 42%;

    --accent: 185 76% 23%;
    --accent-foreground: 39 29% 95%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 39 29% 95%;

    --border: 27 10% 85%;
    --input: 27 10% 85%;
    --ring: 27 26% 50%;

    --radius: 0.25rem;
  }

  * {
    @apply border-border;
  }

  html {
    font-family: 'Open Sans', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    @apply bg-bamboo-beige text-bamboo-charcoal font-opensans;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-raleway font-medium;
  }

  h1 {
    @apply text-4xl md:text-5xl lg:text-6xl;
  }
  
  h2 {
    @apply text-3xl md:text-4xl lg:text-5xl;
  }
  
  h3 {
    @apply text-2xl md:text-3xl;
  }
  
  h4 {
    @apply text-xl md:text-2xl;
  }

  p {
    @apply text-base leading-relaxed;
  }

  /* Custom component styles */
  .btn-primary {
    @apply bg-bamboo-teal text-white px-6 py-2 rounded hover:bg-opacity-90 transition-all duration-300;
  }

  .btn-secondary {
    @apply bg-transparent border border-bamboo-teal text-bamboo-teal px-6 py-2 rounded hover:bg-bamboo-teal hover:bg-opacity-10 transition-all duration-300;
  }

  .nav-link {
    @apply text-bamboo-charcoal hover:text-bamboo-teal transition-colors duration-300;
  }
}`} 
          />
          
          <h3 className="text-xl font-raleway font-medium my-4">Component Specific Styles</h3>
          
          <CodeBlock 
            language="css"
            code={`@layer components {
  .product-card {
    @apply overflow-hidden rounded shadow-sm hover:shadow-md transition-all duration-300;
  }

  .product-image {
    @apply w-full h-64 object-cover;
  }

  .product-title {
    @apply font-raleway font-medium text-xl mt-2;
  }

  .product-price {
    @apply text-bamboo-text-light;
  }

  .section-title {
    @apply font-raleway font-medium text-3xl md:text-4xl text-bamboo-charcoal border-b border-bamboo-light pb-4 mb-8;
  }
}`} 
          />
        </section>
      </CardContent>
    </Card>
  );
};

export default CssTab;
