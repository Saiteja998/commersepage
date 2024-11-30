import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductInfoProps {
  name: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

export function ProductInfo({ name, description, price, onAddToCart }: ProductInfoProps) {
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
        <p className="mt-2 text-xl font-semibold text-gray-900">${price.toFixed(2)}</p>
      </div>
      
      <div className="prose prose-sm text-gray-600">
        <p>{description}</p>
      </div>
      
      <button
        onClick={onAddToCart}
        className="flex items-center justify-center space-x-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <ShoppingCart className="h-5 w-5" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
}