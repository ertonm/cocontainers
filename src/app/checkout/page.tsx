import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <main style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', color: 'var(--orange-600)' }}>
        Checkout (Coming Soon)
      </h1>
      <p>Payment integration, shipping, and order confirmation will go here.</p>
      <Link href="/cart" style={{ color: 'var(--orange-600)' }}>
        Back to Cart
      </Link>
    </main>
  );
}