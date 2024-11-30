import React from 'react';

interface ProductImageProps {
  imageUrl: string;
  name: string;
}

export function ProductImage({ imageUrl, name }: ProductImageProps) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
      <img
        src={imageUrl}
        alt={name}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}