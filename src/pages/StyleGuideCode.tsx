import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, CopyCheck } from "lucide-react";

const StyleGuideCode = () => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const CodeBlock = ({ code, language }: { code: string; language: string }) => (
    <div className="relative">
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button 
        className="absolute top-2 right-2 p-1 bg-gray-800 rounded-md hover:bg-gray-700"
        onClick={() => copyToClipboard(code, code)}
      >
        {copied === code ? <CopyCheck size={18} className="text-green-500" /> : <Copy size={18} className="text-white" />}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-bamboo-beige">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl md:text-5xl font-raleway font-semibold">Bamboo Style Guide Code</h1>
            <Link to="/style-guide">
              <button className="btn-secondary">View Style Guide</button>
            </Link>
          </div>

          <p className="text-lg text-bamboo-text-light max-w-3xl mb-8">
            This page shows the HTML, CSS, and JavaScript code that powers the Bamboo Store's design system.
          </p>

          <Tabs defaultValue="css">
            <TabsList className="mb-6">
              <TabsTrigger value="css">CSS</TabsTrigger>
              <TabsTrigger value="html">HTML</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="tailwind">Tailwind Config</TabsTrigger>
            </TabsList>

            {/* CSS Tab */}
            <TabsContent value="css">
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
            </TabsContent>

            {/* HTML Tab */}
            <TabsContent value="html">
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
            </TabsContent>

            {/* JavaScript Tab */}
            <TabsContent value="javascript">
              <Card>
                <CardContent className="pt-6">
                  <section className="mb-10">
                    <h2 className="text-2xl font-raleway font-medium mb-4">Component Implementation</h2>
                    <p className="text-bamboo-text-light mb-6">
                      React component implementations used in the Bamboo design system.
                    </p>

                    <h3 className="text-xl font-raleway font-medium mb-3">Hero Component</h3>
                    <CodeBlock 
                      language="tsx"
                      code={`import React from "react";

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

export default Hero;`} 
                    />

                    <h3 className="text-xl font-raleway font-medium mt-8 mb-3">Product Card Component</h3>
                    <CodeBlock 
                      language="tsx"
                      code={`import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl: string;
  category?: string;
  price?: number;
}

const ProductCard = ({ id, name, imageUrl, category, price }: ProductCardProps) => {
  return (
    <div className="product-card bg-white">
      <Link to={'/product/${id}'}>
        <img 
          src={imageUrl} 
          alt={name} 
          className="product-image" 
        />
        <div className="p-4">
          {category && <p className="text-sm text-bamboo-text-light">{category}</p>}
          <h3 className="product-title">{name}</h3>
          {price && <p className="product-price">${price.toFixed(2)}</p>}
          <button className="btn-primary w-full mt-4">Add to Cart</button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;`} 
                    />

                    <h3 className="text-xl font-raleway font-medium mt-8 mb-3">Button Component</h3>
                    <CodeBlock 
                      language="tsx"
                      code={`import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  fullWidth = false,
  disabled = false,
  onClick 
}: ButtonProps) => {
  const baseClasses = "rounded font-medium transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-bamboo-teal text-white hover:bg-opacity-90",
    secondary: "bg-bamboo text-white hover:bg-opacity-90",
    outline: "border border-bamboo-teal text-bamboo-teal bg-transparent hover:bg-bamboo-teal hover:bg-opacity-10",
    ghost: "bg-transparent text-bamboo-charcoal hover:bg-bamboo-beige"
  };
  
  const sizeClasses = {
    sm: "text-sm px-3 py-1",
    md: "px-4 py-2",
    lg: "text-lg px-6 py-3"
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;`} 
                    />
                  </section>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tailwind Config Tab */}
            <TabsContent value="tailwind">
              <Card>
                <CardContent className="pt-6">
                  <section className="mb-10">
                    <h2 className="text-2xl font-raleway font-medium mb-4">Tailwind Configuration</h2>
                    <p className="text-bamboo-text-light mb-6">
                      The Tailwind configuration that powers the Bamboo design system.
                    </p>
                    
                    <CodeBlock 
                      language="typescript"
                      code={`import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// ... other base colors
				bamboo: {
					DEFAULT: '#9C7B61',
					light: '#BEA68F',
					dark: '#7A5E48',
					beige: '#F5F1EA',
					teal: '#0A5D6A',
					charcoal: '#404040',
					'text-light': '#6B6B6B',
				},
			},
			fontFamily: {
				raleway: ['Raleway', 'sans-serif'],
				opensans: ['Open Sans', 'sans-serif']
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;`} 
                    />
                  </section>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StyleGuideCode;
