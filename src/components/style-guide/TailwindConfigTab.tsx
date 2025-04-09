import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CodeBlock from "@/components/CodeBlock";

const TailwindConfigTab = () => {
  return (
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
  );
};

export default TailwindConfigTab;
