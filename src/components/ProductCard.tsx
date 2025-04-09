
import React from "react";
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
    <Link to={`/products/${id}`} className="product-card block bg-white">
      <div className="relative overflow-hidden group">
        <img 
          src={imageUrl} 
          alt={name} 
          className="product-image transition-transform duration-500 group-hover:scale-105" 
        />
        
        {/* Overlay with button that appears on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-bamboo-teal text-white px-4 py-2 rounded transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Details
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="product-title">{name}</h3>
        {price && <p className="product-price">${price.toFixed(2)}</p>}
        {category && <p className="text-sm text-bamboo-text-light mt-1">{category}</p>}
      </div>
    </Link>
  );
};

export default ProductCard;
