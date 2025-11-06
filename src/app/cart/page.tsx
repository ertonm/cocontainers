import { CartClient } from './CardClient';
import Link from 'next/link';

export default function CartPage() {
  return (
    <main style={{ padding: '4rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
      <Link href="/shop" style={{ color: 'var(--orange-600)' }}>
        Back to Shop
      </Link>
      <h1 style={{ fontSize: '2.5rem', color: 'var(--orange-600)', margin: '1rem 0' }}>
        Your Cart
      </h1>
      <CartClient />
    </main>
  );
}