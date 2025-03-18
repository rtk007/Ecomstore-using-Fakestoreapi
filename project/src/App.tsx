import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from './store/cartStore';

const queryClient = new QueryClient();

function App() {
  const items = useCartStore(state => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">
                  FakeStore
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <div className="relative">
                    <ShoppingCart className="w-6 h-6" />
                    {itemCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {itemCount}
                      </span>
                    )}
                  </div>
                  Cart
                </Link>
              </div>
            </div>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
