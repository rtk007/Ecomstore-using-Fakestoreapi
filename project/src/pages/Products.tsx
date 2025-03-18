import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const Products = () => {
  const [category, setCategory] = useState<string>('all');
  const [sort, setSort] = useState<string>('none');

  const { data: products = [], isLoading, error } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Error loading products. Please try again later.</p>
      </div>
    );
  }

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredProducts = products
    .filter(p => category === 'all' || p.category === category)
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating.rate - a.rating.rate;
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={category === cat ? 'default' : 'outline'}
              onClick={() => setCategory(cat)}
              className="capitalize"
            >
              {cat}
            </Button>
          ))}
        </div>
        <select
          className="border rounded-md px-4 py-2"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="none">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};