
import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  category?: string;
  price?: number;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection = ({ title, products }: ProductSectionProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{title}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
