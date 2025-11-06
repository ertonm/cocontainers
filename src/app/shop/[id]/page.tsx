import { getContainerById } from '@/app/lib/containers';
import ProductClient from './ProductClient';
import Link from 'next/link';
import { Suspense } from 'react'; // ← ADD

export const dynamic = 'force-dynamic';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const container = await getContainerById(id);

  if (!container) {
    return (
      <main style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--orange-600)' }}>Container Not Found</h1>
        <Link href="/shop" style={{ color: 'var(--orange-600)', textDecoration: 'none' }}>
          Back to Shop
        </Link>
      </main>
    );
  }

  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductClient container={container} />
    </Suspense>
  );
}

// Simple skeleton to prevent layout flash
function ProductSkeleton() {
  return (
    <main style={{ padding: '4rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div style={{ background: '#f3f4f6', borderRadius: '16px', height: '400px' }} />
        <div>
          <div style={{ height: '3rem', background: '#e5e7eb', borderRadius: '8px', marginBottom: '1rem' }} />
          <div style={{ height: '1.5rem', background: '#e5e7eb', borderRadius: '8px', width: '80%', marginBottom: '2rem' }} />
          <div style={{ height: '3rem', background: '#e5e7eb', borderRadius: '8px', marginBottom: '1rem' }} />
          <div style={{ height: '3rem', background: '#e5e7eb', borderRadius: '8px', marginBottom: '1rem' }} />
          <div style={{ height: '3.5rem', background: '#fb923c', borderRadius: '12px' }} />
        </div>
      </div>
    </main>
  );
}