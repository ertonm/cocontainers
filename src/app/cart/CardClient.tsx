// app/cart/CartClient.tsx
'use client';

import { useCart } from '@/app/lib/cart';
import Link from 'next/link';

export function CartClient() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
        <Link
          href="/shop"
          className="mt-4 inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-bold"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex gap-4 py-4 border-b last:border-0 items-center"
        >
          <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-orange-700 font-bold">
            {item.size}
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{item.name}</h3>
            <p className="text-sm text-gray-600">
              {item.condition} • {item.color}
            </p>
            <p className="font-bold text-orange-600">${item.price.toFixed(0)}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="w-8 h-8 rounded-full border hover:bg-gray-100"
              disabled={item.quantity <= 1}
            >
              −
            </button>
            <span className="w-8 text-center font-medium">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 rounded-full border hover:bg-gray-100"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500 hover:text-red-700 ml-4"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-6 pt-6 border-t">
        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span className="text-orange-600">${getTotal().toFixed(0)}</span>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={clearCart}
            className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50"
          >
            Clear Cart
          </button>
          <Link
            href="/checkout"
            className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-bold text-center hover:bg-orange-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}