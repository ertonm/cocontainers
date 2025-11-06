'use client';

import { useCart } from '@/app/lib/cart';
import Link from 'next/link';

export function CartButton() {
  const { items } = useCart();
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <Link
      href="/cart"
      className="fixed bottom-6 right-6 bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-orange-700 transition z-50"
    >
      <span className="relative">
        Cart
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {itemCount}
          </span>
        )}
      </span>
    </Link>
  );
}