import React from 'react';
import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    console.log('Added to cart:', product.name);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-8">
        <ProductImage imageUrl={product.imageUrl} name={product.name} />
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <ProductInfo
            name={product.name}
            description={product.description}
            price={product.price}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
}