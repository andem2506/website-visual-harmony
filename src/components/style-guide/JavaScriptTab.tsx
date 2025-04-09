
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CodeBlock from "@/components/CodeBlock";

const JavaScriptTab = () => {
  return (
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
      <Link to={\`/product/\${id}\`}>
        <img 
          src={imageUrl} 
          alt={name} 
          className="product-image" 
        />
        <div className="p-4">
          {category && <p className="text-sm text-bamboo-text-light">{category}</p>}
          <h3 className="product-title">{name}</h3>
          {price && <p className="product-price">\${price.toFixed(2)}</p>}
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
      className={\`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]} \${widthClass} \${disabledClasses}\`}
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
  );
};

export default JavaScriptTab;
