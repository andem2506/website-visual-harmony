
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button = ({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-bamboo-teal focus:ring-offset-2";
  
  const variants = {
    primary: "bg-bamboo-teal text-white hover:bg-bamboo-teal/90 active:bg-bamboo-teal/95",
    secondary: "bg-bamboo hover:bg-bamboo/90 text-white active:bg-bamboo/95",
    outline: "bg-transparent border border-bamboo-teal text-bamboo-teal hover:bg-bamboo-teal/10",
    ghost: "bg-transparent text-bamboo-teal hover:bg-bamboo-teal/10",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  const widthClasses = fullWidth ? "w-full" : "";

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        widthClasses,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
